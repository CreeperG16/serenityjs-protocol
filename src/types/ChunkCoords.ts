import { DataType, BinaryStream, Endianness } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface ChunkCoord {
	x: number;
	z: number;
}

class ChunkCoords extends DataType {
	public static read(stream: Encapsulated): ChunkCoord[] {
		const coords: ChunkCoord[] = [];
		const length = stream.readUInt32(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const x = stream.readZigZag();
			const z = stream.readZigZag();
			coords.push({ x, z });
		}

		return coords;
	}
	public static write(stream: Encapsulated, value: ChunkCoord[]): void {
		stream.writeUInt32(value.length, Endianness.Little);
		for (const coord of value) {
			stream.writeZigZag(coord.x);
			stream.writeZigZag(coord.z);
		}
	}
}

export { ChunkCoords, type ChunkCoord };
