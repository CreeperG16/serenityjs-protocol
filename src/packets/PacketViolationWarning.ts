import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x9c, VarInt)
class PacketViolationWarning extends Encapsulated {}

export { PacketViolationWarning };
