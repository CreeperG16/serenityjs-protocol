import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x46, VarInt)
class ChunkRadiusUpdated extends Encapsulated {
	@Serialize(VarInt) public chunkRadius!: number;
}

export { ChunkRadiusUpdated };
