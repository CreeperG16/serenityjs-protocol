import { Buffer } from 'node:buffer';
import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, RawBuffer } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x7a, VarInt)
class BiomeDefinitionList extends Encapsulated {
	@Serialize(RawBuffer) public biomes!: Buffer;
}

export { BiomeDefinitionList };
