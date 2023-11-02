import { DataType, Endianness } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface PlayerAttribute {
	current: number;
	default: number;
	max: number;
	min: number;
	modifiers: {
		amount: number;
		id: string;
		name: string;
		operand: number;
		operation: number;
		serializable: boolean;
	}[];
	name: string;
}

class PlayerAttributes extends DataType {
	public static read(stream: Encapsulated): PlayerAttribute[] {
		const attributes: PlayerAttribute[] = [];
		const length = stream.readVarInt();

		for (let i = 0; i < length; i++) {
			const min = stream.readLF32();
			const max = stream.readLF32();
			const current = stream.readLF32();
			const Default = stream.readLF32();
			const name = stream.readBigString();

			const modifiers: PlayerAttribute['modifiers'] = [];
			const modsLength = stream.readVarInt();

			for (let j = 0; j < modsLength; j++) {
				const modId = stream.readBigString();
				const modName = stream.readBigString();
				const modAmount = stream.readLF32();
				const modOperation = stream.readInt32(Endianness.Little);
				const modOperand = stream.readInt32(Endianness.Little);
				const modSerializable = stream.readBool();

				modifiers.push({
					id: modId,
					name: modName,
					amount: modAmount,
					operation: modOperation,
					operand: modOperand,
					serializable: modSerializable,
				});
			}

			attributes.push({ min, max, current, default: Default, name, modifiers });
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

export { PlayerAttributes, type PlayerAttribute };
