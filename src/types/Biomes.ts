import type { Buffer } from 'node:buffer';
import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

class Biomes extends DataType {
	public static read(stream: Encapsulated): Buffer {
		return stream.readRemaining();
	}
	public static write(stream: Encapsulated, value: Buffer): void {
		stream.write(value);
	}
}

export { Biomes };
