import { DataType, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface Vec2f {
	x: number;
	y: number;
}

class Vector2f extends DataType {
	public static read(stream: Encapsulated): Vec2f {
		const x = stream.readLF32();
		const y = stream.readLF32();

		return { x, y };
	}
	public static write(stream: Encapsulated, value: Vec2f): void {
		stream.writeLF32(value.x);
		stream.writeLF32(value.y);
	}
}

export { Vector2f, type Vec2f };
