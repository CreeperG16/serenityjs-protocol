import { BinaryStream, DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface EntityProperty {
	floatProperties: {
		index: number;
		value: number;
	}[];
	intProperties: {
		index: number;
		value: number;
	}[];
}

class EntityProperties extends DataType {
	public static read(stream: Encapsulated): EntityProperty {
		const intProperties: EntityProperty['intProperties'] = [];
		const intPropLength = stream.readVarInt();
		for (let i = 0; i < intPropLength; i++) {
			const index = stream.readVarInt();
			const value = stream.readZigZag();
			intProperties.push({ index, value });
		}

		const floatProperties: EntityProperty['floatProperties'] = [];
		const floatPropLength = stream.readVarInt();
		for (let i = 0; i < floatPropLength; i++) {
			const index = stream.readVarInt();
			const value = stream.readLF32();
			floatProperties.push({ index, value });
		}

		return { intProperties, floatProperties };
	}
	public static write(stream: Encapsulated, value: EntityProperty): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.intProperties.length);
		for (const prop of value.intProperties) {
			buffer.writeVarInt(prop.index);
			buffer.writeZigZag(prop.value);
		}

		buffer.writeVarInt(value.floatProperties.length);
		for (const prop of value.floatProperties) {
			buffer.writeVarInt(prop.index);
			buffer.writeLF32(prop.value);
		}

		stream.write(buffer.getBuffer());
	}
}

export { EntityProperties, type EntityProperty };
