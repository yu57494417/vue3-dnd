import { defineComponent, h, PropType, ref, VNode, watchEffect } from 'vue'
import { isArray } from '../common/utils'
import { ConcreteComponent } from '@vue/runtime-core'
import { TargetType } from 'dnd-core'
import { useDrop } from '../../hooks'
import { getItemKey, resolveRootComponent } from '../common/helper'
import { HANDLER_TYPE } from '../common/enums'
import { DragItem, DropResult } from '../common/types'

export const DndSortable = defineComponent({
	name: 'DndSortable',
	props: {
		modelValue: {
			type: Array as PropType<Record<string, unknown>[]>,
			required: true,
		},
		accept: {
			type: [String, Array] as PropType<TargetType>,
			required: true,
		},
		itemKey: {
			type: String as PropType<string>,
			required: true,
		},
		tag: {
			type: [String, Object] as PropType<string | ConcreteComponent>,
			default: 'div',
		},
		componentData: {
			type: Object as PropType<Record<string, unknown>>,
			default: () => ({}),
		},
		dropEffect: {
			type: String as PropType<'move' | 'copy'>,
		},
		canDrop: {
			type: Function as PropType<(item: DragItem) => boolean>,
		},
		sort: {
			type: Boolean,
			default: true,
		},
		canDrag: {
			type: Function,
		},
		clone: {
			type: Function,
			default: (item: any) => item,
		},
		onHover: {
			type: Function,
		},
		onDragStart: {
			type: Function,
		},
		onDragEnd: {
			type: Function,
		},
		onChange: {
			type: Function,
		},
		onAdded: {
			type: Function,
		},
		onRemoved: {
			type: Function,
		},
		onMoved: {
			type: Function,
		},
	},
	emits: ['update:modelValue'],
	slots: ['item', 'header', 'footer'],
	setup(props, { slots, attrs, emit }) {
		const list = ref<any[]>([])

		watchEffect(() => {
			if (!isArray(props.modelValue)) {
				throw new Error('modelValue must be an array')
			}
			list.value = props.modelValue.slice(0)
		})

		const [, drop] = useDrop<DragItem, DropResult>(() => ({
			accept: props.accept,
			canDrop: props.canDrop,
			hover(item, monitor) {
				if (!monitor.canDrop()) {
					return
				}
				props.onHover?.(item)
			},
			drop(item, monitor) {
				if (monitor.didDrop()) {
					return
				}

				return {
					handler: dragItem => handlerDrop(dragItem, list.value.length),
					canceler: cancelDrop,
				}
			},
		}))

		const setRef = (el: HTMLElement) => {
			drop.value(el)
		}

		const findOriginalIndex = (dragItem: DragItem) => {
			const itemKey = props.itemKey
			return props.modelValue.findIndex(item => {
				return getItemKey(item, itemKey) === getItemKey(dragItem, itemKey)
			})
		}

		const cancelDrop = () => {
			list.value = props.modelValue.slice(0)
		}

		const handlerDrop = (dragItem: DragItem, newIndex: number) => {
			const itemKey = props.itemKey
			const oldIndex = list.value.findIndex(
				item => getItemKey(item, itemKey) === getItemKey(dragItem, itemKey)
			)
			const isMove = oldIndex > -1
			const copyList = list.value.slice(0)
			isMove && copyList.splice(oldIndex, 1)
			copyList.splice(newIndex, 0, dragItem)
			emit('update:modelValue', copyList)
			const params = {
				item: dragItem,
				oldIndex: isMove ? oldIndex : undefined,
				newIndex,
				to: copyList,
			}
			props.onChange?.(params)
			if (isMove) {
				props.onMoved?.(params)
			} else {
				props.onAdded?.(params)
			}
			return isMove ? HANDLER_TYPE.MOVE : HANDLER_TYPE.ADD
		}

		const onRemove = (index: number) => {
			const copyList = list.value.slice(0)
			copyList.splice(index, 1)
			emit('update:modelValue', copyList)
		}

		return () => {
			const { item: itemSlot } = slots

			if (!itemSlot) {
				throw new Error('slot item is required')
			}

			const children = list.value.map((element, index) => {
				return itemSlot({ element, index })[0]
			})

			return resolveRootComponent(
				props.tag,
				{ ...attrs, ref: setRef },
				children
			)
		}
	},
})
