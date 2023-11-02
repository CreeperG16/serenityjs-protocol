import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface EntityProperty {
	floats: EntityPropertyChunk[];
	ints: EntityPropertyChunk[];
}

interface EntityPropertyChunk {
	index: number;
	value: number;
}

class EntityProperties extends DataType {
	public static read(stream: Encapsulated): EntityProperty {
		const props: EntityProperty = { floats: [], ints: [] };

		const intsLength = stream.readVarInt();
		for (let i = 0; i < intsLength; i++) {
			const index = stream.readVarInt();
			const value = stream.readZigZag();

			props.ints.push({ index, value });
		}

		const floatsLength = stream.readVarInt();
		for (let i = 0; i < floatsLength; i++) {
			const index = stream.readVarInt();
			const value = stream.readLF32();

			props.floats.push({ index, value });
		}

		return props;
	}
	public static write(stream: Encapsulated, value: EntityProperty): void {
		stream.writeVarInt(value.ints.length);
		for (const prop of value.ints) {
			stream.writeVarInt(prop.index);
			stream.writeZigZag(prop.value);
		}

		stream.writeVarInt(value.floats.length);
		for (const prop of value.floats) {
			stream.writeVarInt(prop.index);
			stream.writeLF32(prop.value);
		}
	}
}

export { EntityProperties, type EntityProperty };
