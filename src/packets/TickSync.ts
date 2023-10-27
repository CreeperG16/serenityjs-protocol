import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Long, Endianness } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x17, VarInt)
class TickSync extends Encapsulated {
	@Serialize(Long, Endianness.Little) public requestTime!: bigint;
	@Serialize(Long, Endianness.Little) public responseTime!: bigint;
}

export { TickSync };
