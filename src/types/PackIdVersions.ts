import { DataType, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface PackIdVersion {
	name: string;
	uuid: string;
	version: string;
}

class PackIdVersions extends DataType {
	public static read(stream: Encapsulated): PackIdVersion[] {
		const packs: PackIdVersion[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const uuid = stream.readBigString();
			const version = stream.readBigString();
			const name = stream.readBigString();
			packs.push({ name, uuid, version });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: PackIdVersion[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const pack of value) {
			stream.writeBigString(pack.uuid);
			stream.writeBigString(pack.version);
			stream.writeBigString(pack.name);
		}

		stream.write(buffer.getBuffer());
	}
}

export { PackIdVersions, type PackIdVersion };
