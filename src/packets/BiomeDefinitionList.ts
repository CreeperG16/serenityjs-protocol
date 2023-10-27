import { Buffer } from 'node:buffer';
import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Biomes } from '../types';

@Packet(0x7a, VarInt)
class BiomeDefinitionList extends Encapsulated {
	/**
	 * You do not need to add data to this packet. We send a pre-defined list of biomes.
	 *
	 * @param biomes - The biome definitions.
	 */
	@Serialize(Biomes) public biomes!: Buffer;
}

export { BiomeDefinitionList };
