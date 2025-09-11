import {BroadcastChannel} from 'broadcast-channel';
export function useBroadcastChannel(channelName: string= "default", options?: BroadcastChannelOptions): BroadcastChannel {
    return new BroadcastChannel(channelName, options);
}