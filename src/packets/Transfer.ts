import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x55, VarInt)
class Transfer extends Encapsulated {
	@Serialize(LitString) public adress!: string;
	@Serialize(Short) public port!: number;
}

export { Transfer };
