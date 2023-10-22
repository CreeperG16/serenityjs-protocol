import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x40, VarInt)
class SimpleEvent extends Encapsulated {
	@Serialize(Short) public evenType!: number;
}

export { SimpleEvent };
