import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, Long } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x2c, VarInt)
class Animate extends Encapsulated {
	@Serialize(VarInt) public actionID!: number;
	@Serialize(Long) public runtimeEntityID!: number;
}

export { Animate };
