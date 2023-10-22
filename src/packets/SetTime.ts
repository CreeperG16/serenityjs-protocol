import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x0a, VarInt)
class SetTime extends Encapsulated {
	@Serialize(VarInt) public time!: number;
}

export { SetTime };
