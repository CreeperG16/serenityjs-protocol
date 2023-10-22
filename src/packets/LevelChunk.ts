import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3a, VarInt)
class LevelChunk extends Encapsulated {
	@Serialize(VarInt) public chunkx!: number;
	@Serialize(VarInt) public chunkz!: number;
	@Serialize(VarInt) public subchunkcount!: number;
	@Serialize(Bool) public cacheenabled!: boolean;
	// TODO: Figure out how to serialize this cus i am not sure what this is supposed to be
	// @Serialize(???) public chunkData!: ????;
}

export { LevelChunk };
