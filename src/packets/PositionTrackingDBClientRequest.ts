import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x9a, VarInt)
class PositionTrackingDBClientRequest extends Encapsulated {}

export { PositionTrackingDBClientRequest };
