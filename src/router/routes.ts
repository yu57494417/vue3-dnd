import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
	{
		path: '/example',
		name: 'Example',
		component: () => import('../views/Example.vue'),
	},
	{
		path: '/dustbin/single-target',
		name: 'Single Target',
		component: () => import('@vitepress/examples/01-dustbin/single-target'),
	},
	{
		path: '/dustbin/iframe',
		name: 'Within an Iframe',
		component: () =>
			import('@vitepress/examples/01-dustbin/single-target-in-iframe'),
	},
	{
		path: '/dustbin/copy-or-move',
		name: 'Copy Or Move',
		component: () => import('@vitepress/examples/01-dustbin/copy-or-move'),
	},
	{
		path: '/dustbin/multiple-targets',
		name: 'Multiple Targets',
		component: () => import('@vitepress/examples/01-dustbin/multiple-targets'),
	},
	{
		path: '/dustbin/stress-test',
		name: 'Dustbin Stress Test',
		component: () => import('@vitepress/examples/01-dustbin/stress-test'),
	},
	{
		path: '/drag-around/naive',
		name: 'Naive',
		component: () => import('@vitepress/examples/02-drag-around/naive'),
	},
	{
		path: '/drag-around/custom-drag-layer',
		name: 'Custom Drag Layer',
		component: () =>
			import('@vitepress/examples/02-drag-around/custom-drag-layer'),
	},
	{
		path: '/nesting/drag-sources',
		name: 'Drag Sources',
		component: () => import('@vitepress/examples/03-nesting/drag-sources'),
	},
	{
		path: '/nesting/drop-targets',
		name: 'Drop Targets',
		component: () => import('@vitepress/examples/03-nesting/drop-targets'),
	},
	{
		path: '/sortable/simple',
		name: 'Simple',
		component: () => import('@vitepress/examples/04-sortable/simple'),
	},
	{
		path: '/sortable/cancel-on-drop-outside',
		name: 'Cancel On Drop Outside',
		component: () =>
			import('@vitepress/examples/04-sortable/cancel-on-drop-outside'),
	},
	{
		path: '/sortable/stress-test',
		name: 'Stress Test',
		component: () => import('@vitepress/examples/04-sortable/stress-test'),
	},
	{
		path: '/customize/handles-and-previews',
		name: 'Handles and Previews',
		component: () =>
			import('@vitepress/examples/05-customize/handles-and-previews'),
	},
	{
		path: '/customize/drop-effects',
		name: 'Drop Effects',
		component: () => import('@vitepress/examples/05-customize/drop-effects'),
	},
	{
		path: '/other/native-files',
		name: 'Native Files',
		component: () => import('@vitepress/examples/06-other/native-files'),
	},
	{
		path: '/other/native-html',
		name: 'Native HTML',
		component: () => import('@vitepress/examples/06-other/native-html'),
	},
]

interface MenuItem {
	name: string
	children: RouteRecordRaw[]
}

export const menus = routes.reduce((result, current) => {
	const paths = current.path.split('/').filter(Boolean)
	const name = paths[0].replace(/(^\w)|(-\w)/g, (_, $1, $2) => {
		if ($1) {
			return $1.toUpperCase()
		}
		if ($2) {
			return ' ' + $2.slice(1).toUpperCase()
		}
		return ''
	})
	let menuItem = result[result.length - 1]
	if (!menuItem || menuItem.name !== name) {
		result.push(
			(menuItem = {
				name,
				children: [],
			})
		)
	}
	menuItem.children.push(current)
	return result
}, [] as MenuItem[])
