import type { ConnectDropTarget } from '../../types'
import type { DropTargetHookSpec, FactoryOrInstance } from '../types'
import { useRegisteredDropTarget } from './useRegisteredDropTarget'
import { useOptionalFactory } from '../useOptionalFactory'
import { useDropTargetMonitor } from './useDropTargetMonitor'
import { useDropTargetConnector } from './useDropTargetConnector'
import { useCollectedProps } from '../useCollectedProps'
import { useConnectDropTarget } from './connectors'
import { computed, Ref, unref } from 'vue'
import { DropTargetOptions } from '../../types'

/**
 * useDropTarget Hook
 * @param specArg The drop target specification (object or function, function preferred)
 */
export function useDrop<
	DragObject = unknown,
	DropResult = unknown,
	CollectedProps = unknown,
	ConnectDropTargetOptions extends DropTargetOptions = DropTargetOptions
>(
	specArg: FactoryOrInstance<
		DropTargetHookSpec<DragObject, DropResult, CollectedProps>
	>
): [Ref<CollectedProps>, Ref<ConnectDropTarget<ConnectDropTargetOptions>>] {
	const spec = useOptionalFactory(specArg)
	const monitor = useDropTargetMonitor<DragObject, DropResult>()
	const connector = useDropTargetConnector(computed(() => unref(spec).options))
	useRegisteredDropTarget(spec, monitor, connector)

	return [
		useCollectedProps(
			computed(() => unref(spec).collect || (() => ({} as any))),
			monitor,
			connector
		),
		useConnectDropTarget(connector, spec),
	]
}
