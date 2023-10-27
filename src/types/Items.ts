import { DataType, Endianness, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface Item {
	entryId: number;
	item: ItemLagacy;
}

interface ItemLagacy {
	blockRuntimeId: number; // if 0, then it's has no info
	count: number;
	metaData: number;
	networtId: number;
}
// TODO: implement this
class Items extends DataType {
	public static read(stream: Encapsulated): Item[] {
		const packs: Item[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {}

		return packs;
	}
	public static write(stream: Encapsulated, value: Item[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);

		stream.write(buffer.getBuffer());
	}
}

export { Items, type Item };
