import equal from 'fast-deep-equal'
import { MaybeRef } from '../types/utils'
import { Ref, ref, unref, watchEffect } from 'vue'

/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */
export function useCollector<T, S>(
	monitor: MaybeRef<T>,
	collect: MaybeRef<(monitor: T) => S>,
	onUpdate?: () => void
): [Ref<S>, () => void] {
	const collected = ref(unref(collect)(unref(monitor))) as Ref<S>

	const updateCollected = () => {
		const nextValue = unref(collect)(unref(monitor))
		// This needs to be a deep-equality check because some monitor-collected values
		// include XYCoord objects that may be equivalent, but do not have instance equality.
		if (!equal(collected, nextValue)) {
			collected.value = nextValue
			if (onUpdate) {
				onUpdate()
			}
		}
	}

	// update the collected properties after react renders.
	// Note that the "Dustbin Stress Test" fails if this is not
	// done when the component updates
	watchEffect(updateCollected)

	return [collected, updateCollected]
}
