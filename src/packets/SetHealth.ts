import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x2a, VarInt)
class SetHealth extends Encapsulated {
	@Serialize(VarInt) public health!: number;
}

export { SetHealth };
