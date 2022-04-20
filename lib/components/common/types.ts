import { HANDLER_TYPE } from './enums'

export type DragItem = Record<string, any>
export type DropResult = {
	handler: (dragItem: DragItem) => HANDLER_TYPE
	canceler: () => void
}
