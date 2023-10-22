import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x9b, VarInt)
class DebugInfo extends Encapsulated {}

export { DebugInfo };
