import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

class LittleString extends DataType {
	public static read(stream: Encapsulated): string {
		return stream.readLittleString();
	}
	public static write(stream: Encapsulated, value: string): void {
		stream.writeLittleString(value);
	}
}

export { LittleString };
