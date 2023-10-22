import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Long } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x43, VarInt)
class MapItemData extends Encapsulated {
	@Serialize(Long) public mapId!: number;
}

export { MapItemData };
