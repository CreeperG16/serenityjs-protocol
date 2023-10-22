import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

class BigString extends DataType {
	public static read(stream: Encapsulated): string {
		return stream.readBigString();
	}
	public static write(stream: Encapsulated, value: string): void {
		stream.writeBigString(value);
	}
}

export { BigString };
