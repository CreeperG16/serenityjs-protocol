import type { Buffer } from 'node:buffer';
import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';
import { BiomeDefinitions } from '../resources';

class Biomes extends DataType {
	public static read(stream: Encapsulated): Buffer {
		return stream.readRemaining();
	}
	public static write(stream: Encapsulated): void {
		stream.write(BiomeDefinitions);
	}
}

export { Biomes };
