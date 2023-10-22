import { Buffer } from 'node:buffer';
import { DataPacket } from '@serenityjs/raknet.js';
import { Endianness } from 'binarystream.js';

abstract class Encapsulated extends DataPacket {
	public readLittleString(): string {
		const length = this.readUInt32(Endianness.Little);
		return this.read(length).toString('ascii');
	}

	public writeLittleString(value: string): void {
		const buffer = Buffer.from(value, 'ascii');
		this.writeUInt32(buffer.length, Endianness.Little);
		this.write(buffer);
	}

	public readBigString(): string {
		const length = this.readVarInt();
		return this.read(length).toString('utf8');
	}

	public writeBigString(value: string): void {
		const buffer = Buffer.from(value, 'utf8');
		this.writeVarInt(buffer.length);
		this.write(buffer);
	}
}

export { Encapsulated };
