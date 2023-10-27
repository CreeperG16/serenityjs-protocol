import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import type { Item } from '../types';
import { Items } from '../types';

@Packet(0x91, VarInt)
class CreativeContent extends Encapsulated {
	@Serialize(Items) public items!: Item[];
}

export { CreativeContent };
