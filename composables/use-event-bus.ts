import emitter from 'mitt';

export function useEventBus() {
    return emitter();
}