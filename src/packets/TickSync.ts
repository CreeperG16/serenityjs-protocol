import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, Long } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x17, VarInt)
class TickSync extends Encapsulated {
	@Serialize(Long) public requestTimestamp!: number;
	@Serialize(Long) public responseTimestamp!: number;
}

export { TickSync };
