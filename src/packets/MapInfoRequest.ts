import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Long } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x44, VarInt)
class MapInfoRequest extends Encapsulated {
	@Serialize(Long) public uniqueMapId!: number;
}

export { MapInfoRequest };
