<script lang="ts" setup>
import { DndSortable } from 'vue3-dnd'
import { ref } from 'vue'

const list = ref([
	{
		name: '张三',
		age: 25,
	},
	{
		name: '李四',
		age: 30,
	},
	{
		name: '王五',
		age: 35,
	},
	{
		name: '赵六',
		age: 40,
	},
])
</script>

<template>
	<DndSortable v-model="list" class="sort-draggable" accept="box">
		<template #item="{ element, index }">
			<div>{{ element.name }}{{ index }}</div>
		</template>
	</DndSortable>
</template>

<style lang="less" scoped></style>
