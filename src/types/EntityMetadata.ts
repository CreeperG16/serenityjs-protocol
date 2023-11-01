import { BinaryStream, DataType, Endianness } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';
import type { EntityDataFlag } from '../enums';
import { EntityDataType, EntityDataKey } from '../enums';
import { BlockCoordinates } from './BlockCoordinates';
import { NBT } from './NBT';
import type { Vec3f } from './Vector3f';
import { Vector3f } from './Vector3f';

interface EntityData {
	key: EntityDataKey;
	type: EntityDataType;
	value: BlockCoordinates | EntityDataFlag | Vec3f | bigint | number | string; // Conditional types?
}

// TODO:
//  - Flags and FlagsTwo
//  - NBT
//  - write()
//  - conditional types on the EntityData interface (or type casting in write()?)

class EntityMetadata extends DataType {
	public static read(stream: Encapsulated): EntityData[] {
		const entries: EntityData[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const dataKey: EntityDataKey = stream.readVarInt();
			const dataType: EntityDataType = stream.readVarInt();
			let value: EntityData['value'];

			if (dataKey === EntityDataKey.Flags || dataKey === EntityDataKey.FlagsTwo) {
				// TODO
				value = 0;
			} else {
				switch (dataType) {
					case EntityDataType.Byte:
						value = stream.readInt8();
						break;
					case EntityDataType.Int16:
						value = stream.readInt16(Endianness.Little);
						break;
					case EntityDataType.Int32:
						value = stream.readZigZag();
						break;
					case EntityDataType.Float32:
						value = stream.readLF32();
						break;
					case EntityDataType.String:
						value = stream.readBigString();
						break;
					case EntityDataType.CompoundTag:
						value = 0; // NBT.read(stream); TODO
						break;
					case EntityDataType.BlockPos:
						value = BlockCoordinates.read(stream);
						break;
					case EntityDataType.Int64:
						value = stream.readZigZong();
						break;
					case EntityDataType.Vec3:
						value = Vector3f.read(stream);
						break;
				}
			}

			entries.push({ key: dataKey, type: dataType, value });
		}

		return entries;
	}
	public static write(stream: Encapsulated, value: EntityData[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const entry of value) {
			buffer.writeVarInt(entry.key);
			buffer.writeVarInt(entry.type);

			if (entry.key === EntityDataKey.Flags || entry.key === EntityDataKey.FlagsTwo) {
				// TODO
			} else {
				switch (entry.type) {
					case EntityDataType.Byte:
						buffer.writeInt8(entry.value);
						break;
					case EntityDataType.Int16:
						buffer.writeInt16(entry.value, Endianness.Little);
						break;
					case EntityDataType.Int32:
						buffer.writeZigZag(entry.value);
						break;
					case EntityDataType.Float32:
						buffer.writeLF32(entry.value);
						break;
					case EntityDataType.String:
						buffer.writeBigString(entry.value);
						break;
					case EntityDataType.CompoundTag:
						// TODO
						break;
					case EntityDataType.BlockPos:
						BlockCoordinates.write(buffer, entry.value);
						break;
					case EntityDataType.Int64:
						buffer.writeZigZong(entry.value);
						break;
					case EntityDataType.Vec3:
						Vector3f.write(buffer, entry.value);
						break;
				}
			}
		}

		stream.write(buffer.getBuffer());
	}
}

export { EntityMetadata, type EntityData };
