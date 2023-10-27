import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, BigString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x12d, VarInt)
class CompressedBiomeDefinitions extends Encapsulated {
	@Serialize(BigString) public raw_payload!: string;
}

export { CompressedBiomeDefinitions };
