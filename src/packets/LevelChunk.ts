import { Buffer } from 'node:buffer';
import { Packet, Serialize } from '@serenityjs/raknet.js';
import { ZigZag, VarInt, Bool } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { ByteArray } from '../types';

@Packet(0x3a, VarInt)
class LevelChunk extends Encapsulated {
	@Serialize(ZigZag) public x!: number;
	@Serialize(ZigZag) public z!: number;
	@Serialize(VarInt) public subChunkCount!: number;
	@Serialize(Bool) public cacheEnabled!: boolean;
	@Serialize(ByteArray) public data!: Buffer;
}

export { LevelChunk };
