import { DataType, Endianness, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface BehaviorPack {
	contentIdentity: string;
	contentKey: string;
	hasScripts: boolean;
	size: number;
	subPackName: string;
	uuid: string;
	version: string;
}

class BehaviorPackInfo extends DataType {
	public static read(stream: Encapsulated): BehaviorPack[] {
		const packs: BehaviorPack[] = [];
		const length = stream.readUShort(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const uuid = stream.readBigString();
			const version = stream.readBigString();
			const size = stream.readUInt32(Endianness.Little);
			const contentKey = stream.readBigString();
			const subPackName = stream.readBigString();
			const contentIdentity = stream.readBigString();
			const hasScripts = stream.readBool();
			packs.push({ contentIdentity, contentKey, hasScripts, size, subPackName, uuid, version });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: BehaviorPack[]): void {
		const buffer = new BinaryStream();
		buffer.writeUShort(value.length, Endianness.Little);
		for (const pack of value) {
			buffer.writeBigString(pack.uuid);
			buffer.writeBigString(pack.version);
			buffer.writeUInt32(pack.size, Endianness.Little);
			buffer.writeBigString(pack.contentKey);
			buffer.writeBigString(pack.subPackName);
			buffer.writeBigString(pack.contentIdentity);
			buffer.writeBool(pack.hasScripts);
		}

		stream.write(buffer.getBuffer());
	}
}

export { BehaviorPackInfo, type BehaviorPack };
