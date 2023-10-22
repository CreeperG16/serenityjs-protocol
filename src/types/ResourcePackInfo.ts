import { DataType, Endianness, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface ResourcePack {
	contentIdentity: string;
	contentKey: string;
	hasScripts: boolean;
	rtxEnabled: boolean;
	size: number;
	subPackName: string;
	uuid: string;
	version: string;
}

class ResourcePackInfo extends DataType {
	public static read(stream: Encapsulated): ResourcePack[] {
		const packs: ResourcePack[] = [];
		const length = stream.readUShort(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const uuid = stream.readBigString();
			const version = stream.readBigString();
			const size = stream.readUInt32(Endianness.Little);
			const contentKey = stream.readBigString();
			const subPackName = stream.readBigString();
			const contentIdentity = stream.readBigString();
			const hasScripts = stream.readBool();
			const rtxEnabled = stream.readBool();
			packs.push({ contentIdentity, contentKey, hasScripts, size, subPackName, uuid, version, rtxEnabled });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: ResourcePack[]): void {
		const buffer = new BinaryStream();
		buffer.writeUShort(value.length, Endianness.Little);
		for (const pack of value) {
			stream.writeBigString(pack.uuid);
			stream.writeBigString(pack.version);
			buffer.writeUInt32(pack.size, Endianness.Little);
			stream.writeBigString(pack.contentKey);
			stream.writeBigString(pack.subPackName);
			stream.writeBigString(pack.contentIdentity);
			buffer.writeBool(pack.hasScripts);
			buffer.writeBool(pack.rtxEnabled);
		}

		stream.write(buffer.getBuffer());
	}
}

export { ResourcePackInfo, type ResourcePack };
