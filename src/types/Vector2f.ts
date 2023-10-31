import { DataType, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface Vec2f {
	x: number;
	z: number;
}

class Vector2f extends DataType {
	public static read(stream: Encapsulated): Vec2f {
		const x = stream.readLF32();
		const z = stream.readLF32();

		return { x, z };
	}
	public static write(stream: Encapsulated, value: Vec2f): void {
		stream.writeLF32(value.x);
		stream.writeLF32(value.z);
	}
}

export { Vector2f, type Vec2f };
