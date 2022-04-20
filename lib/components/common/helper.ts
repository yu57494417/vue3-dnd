import { isArray, isString } from './utils'
import { ConcreteComponent, resolveComponent } from '@vue/runtime-core'
import { cloneVNode, h, isVNode, VNode } from 'vue'
import { DragItem } from './types'

export const getItemKey = <T extends DragItem>(
	item: T,
	key: string | ((item: T) => string)
) => {
	if (isString(key)) {
		return item[key]
	}
	return key(item)
}

export function isElement(node: any): boolean {
	return isVNode(node) && typeof node.type === 'string'
}

export function isComponent(node: any): boolean {
	return isVNode(node) && typeof node.type === 'object'
}

export function callVnodeHooks(hooks: any, ...args: any[]) {
	if (!hooks) {
		return
	}
	if (typeof hooks === 'function') {
		hooks(...args)
	}
	if (Array.isArray(hooks)) {
		hooks.forEach(hook => hook(...args))
	}
}

export function cloneVNodeAndSetRef(
	vnode: VNode | VNode[],
	props: Record<string, unknown> = {}
) {
	let clonedVNode: VNode
	const _props = { ...props }
	const setRef = _props.ref as ((ref: object | null) => void) | undefined
	if (setRef) {
		delete _props.ref
	}
	if (isElement(vnode)) {
		clonedVNode = cloneVNode(
			vnode as VNode,
			{
				...props,
				...(setRef ? { ref: setRef } : {}),
			},
			true
		)
	} else if (isComponent(vnode)) {
		const component = vnode as VNode
		const originOnVnodeMounted = component.props?.onVnodeMounted
		const originOnVnodeUpdated = component.props?.onVnodeUpated
		const originOnVnodeUnmounted = component.props?.onVnodeUnmounted
		clonedVNode = cloneVNode(component, {
			...props,
			...(setRef
				? {
						onVnodeMounted(vnode: VNode) {
							callVnodeHooks(originOnVnodeMounted, vnode)
							setRef(vnode.el)
						},
						onVnodeUpdated(vnode: VNode, oldVnode) {
							callVnodeHooks(originOnVnodeUpdated, vnode, oldVnode)
							setRef(vnode.el)
						},
						onVnodeUnmounted(vnode: VNode) {
							callVnodeHooks(originOnVnodeUnmounted, vnode)
							setRef(null)
						},
				  }
				: {}),
		})
	} else {
		clonedVNode = h(
			'div',
			{
				...props,
				...(setRef ? { ref: setRef } : {}),
			},
			isArray(vnode) ? vnode : [vnode]
		)
	}
	return clonedVNode
}

export function resolveRootComponent(
	tag: string | ConcreteComponent,
	props: Record<string, unknown>,
	children: VNode[]
) {
	const _component = typeof tag === 'string' ? resolveComponent(tag) : tag
	const component = h(_component, {}, children)
	return cloneVNodeAndSetRef(component, props)
}
