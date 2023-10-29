import type { Buffer } from 'node:buffer';
import { Packet, Serialize } from '@serenityjs/raknet.js';
import { ZigZag, VarInt, Bool, Endianness } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { ByteArray } from '../types';

@Packet(0x3a, VarInt)
class LevelChunk extends Encapsulated {
	public x!: number;
	public z!: number;
	public subChunkCount!: number;
	public cacheEnabled!: boolean;
	public blobs!: any[];
	public data!: Buffer;

	public override serialize(): Buffer {
		this.writeVarInt(this.getId());
		this.writeZigZag(this.x);
		this.writeZigZag(this.z);
		if (this.cacheEnabled) {
			this.writeVarInt(-2);
			this.writeUInt16(this.subChunkCount, Endianness.Little);
		} else {
			this.writeVarInt(this.subChunkCount);
		}

		this.writeBool(this.cacheEnabled);
		if (this.blobs) {
			this.writeVarInt(this.blobs.length);
			for (const hash of this.blobs) {
				this.writeUInt64(hash, Endianness.Little);
			}
		}

		this.writeVarInt(this.data.byteLength);
		this.write(this.data);

		return this.getBuffer();
	}

	public override deserialize(): this {
		this.readVarInt();
		this.x = this.readZigZag();
		this.z = this.readZigZag();
		this.subChunkCount = this.readVarInt();
		if (this.subChunkCount === -2) {
			this.subChunkCount = this.readUInt16(Endianness.Little);
		}

		this.cacheEnabled = this.readBool();
		if (this.cacheEnabled) {
			const blobCount = this.readVarInt();
			this.blobs = [];
			for (let i = 0; i < blobCount; i++) {
				this.blobs.push(this.readUInt64(Endianness.Little));
			}
		}

		const length = this.readVarInt();
		this.data = this.read(length);

		return this;
	}
}

export { LevelChunk };
