import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

class NBT extends DataType {
	public static read(stream: Encapsulated): void {
		stream.readUInt8();
		stream.readUInt8();
		stream.readUInt8();
	}
	public static write(stream: Encapsulated): void {
		stream.writeUInt8(0x0a);
		stream.writeUInt8(0x00);
		stream.writeUInt8(0x00);
	}
}

export { NBT };
