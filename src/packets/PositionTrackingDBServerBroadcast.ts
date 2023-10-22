import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x99, VarInt)
class PositionTrackingDBServerBroadcast extends Encapsulated {}

export { PositionTrackingDBServerBroadcast };
