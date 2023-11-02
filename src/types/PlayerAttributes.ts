import { DataType, Endianness } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';
import type { Attributes } from '../enums';

interface PlayerAttribute {
	current: number;
	default: number;
	max: number;
	min: number;
	modifiers: PlayerAttributeModifier[];
	name: Attributes;
}

interface PlayerAttributeModifier {
	amount: number;
	id: string;
	name: string;
	operand: number;
	operation: number;
	serializable: boolean;
}

class PlayerAttributes extends DataType {
	public static read(stream: Encapsulated): PlayerAttribute[] {
		const attributes: PlayerAttribute[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const min = stream.readLF32();
			const max = stream.readLF32();
			const current = stream.readLF32();
			const default_ = stream.readLF32();
			const name = stream.readBigString();
			const modifiers: PlayerAttributeModifier[] = [];
			const modifierLenght = stream.readVarInt();
			for (let i = 0; i < modifierLenght; i++) {
				const id = stream.readBigString();
				const name = stream.readBigString();
				const amount = stream.readLF32();
				const operation = stream.readInt32(Endianness.Little);
				const operand = stream.readInt32(Endianness.Little);
				const serializable = stream.readBool();
				modifiers.push({ id, name, amount, operation, operand, serializable });
			}

			attributes.push({ min, max, current, default: default_, name: name as Attributes, modifiers });
		}

		return attributes;
	}
	public static write(stream: Encapsulated, value: PlayerAttribute[]): void {
		stream.writeVarInt(value.length);
		for (const attribute of value) {
			stream.writeLF32(attribute.min);
			stream.writeLF32(attribute.max);
			stream.writeLF32(attribute.current);
			stream.writeLF32(attribute.default);
			stream.writeBigString(attribute.name);
			stream.writeVarInt(attribute.modifiers.length);
			for (const modifier of attribute.modifiers) {
				stream.writeBigString(modifier.id);
				stream.writeBigString(modifier.name);
				stream.writeLF32(modifier.amount);
				stream.writeInt32(modifier.operation, Endianness.Little);
				stream.writeInt32(modifier.operand, Endianness.Little);
				stream.writeBool(modifier.serializable);
			}
		}
	}
}

export { PlayerAttributes, type PlayerAttribute, type PlayerAttributeModifier };
