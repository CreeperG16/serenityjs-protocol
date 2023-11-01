import { DataType, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface EntityAttribute {
	max: number;
	min: number;
	name: string;
	value: number;
}

class EntityAttributes extends DataType {
	public static read(stream: Encapsulated): EntityAttribute[] {
		const attributes: EntityAttribute[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const name = stream.readBigString();
			const min = stream.readLF32();
			const value = stream.readLF32();
			const max = stream.readLF32();
			attributes.push({ name, min, value, max });
		}

		return attributes;
	}
	public static write(stream: Encapsulated, value: EntityAttribute[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const attribute of value) {
			buffer.writeBigString(attribute.name);
			buffer.writeLF32(attribute.min);
			buffer.writeLF32(attribute.value);
			buffer.writeLF32(attribute.max);
		}

		stream.write(buffer.getBuffer());
	}
}

export { EntityAttributes, type EntityAttribute };
