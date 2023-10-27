import type { Buffer } from 'node:buffer';
import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

class ByteArray extends DataType {
	public static read(stream: Encapsulated): Buffer {
		const length = stream.readVarInt();
		return stream.read(length);
	}
	public static write(stream: Encapsulated, value: Buffer): void {
		stream.writeVarInt(value.byteLength);
		stream.write(value);
	}
}

export { ByteArray };
