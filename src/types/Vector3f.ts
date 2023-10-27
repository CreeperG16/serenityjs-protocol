import { DataType, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface Vec3f {
	x: number;
	y: number;
	z: number;
}

class Vector3f extends DataType {
	public static read(stream: Encapsulated): Vec3f {
		const x = stream.readLF32();
		const y = stream.readLF32();
		const z = stream.readLF32();

		return { x, y, z };
	}
	public static write(stream: Encapsulated, value: Vec3f): void {
		stream.writeLF32(value.x);
		stream.writeLF32(value.y);
		stream.writeLF32(value.z);
	}
}

export { Vector3f, type Vec3f };
