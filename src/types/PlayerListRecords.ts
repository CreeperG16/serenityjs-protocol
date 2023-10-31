import type { Buffer } from 'node:buffer';
import type { Endianness } from 'binarystream.js';
import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

enum PlayerListType {
	Add,
	Remove,
}

interface PlayerListRecord {
	buildPlatform?: number;
	isHost?: boolean;
	isTeacher?: boolean;
	platformChatId?: string;
	runtimeId?: bigint;
	skinData?: Buffer;
	username?: string;
	uuid: string;
	xuid?: string;
}

class PlayerListRecords extends DataType {
	public static read(stream: Encapsulated, endian: Endianness, type: PlayerListType): PlayerListRecord[] {
		const playerListRecords: PlayerListRecord[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const uuid = stream.readUuid();
			if (type === PlayerListType.Add) {
				const runtimeId = stream.readZigZong();
				const username = stream.readBigString();
				const xuid = stream.readBigString();
				const platformChatId = stream.readBigString();
				const buildPlatform = stream.readLF32();
				const len = stream.getBuffer().byteLength - stream.getReadOffset() - length - 2;
				const skinData = stream.read(len);
				const isTeacher = stream.readBool();
				const isHost = stream.readBool();
				playerListRecords.push({
					uuid,
					runtimeId,
					username,
					xuid,
					platformChatId,
					buildPlatform,
					skinData,
					isTeacher,
					isHost,
				});
			} else {
				playerListRecords.push({ uuid });
			}
		}

		if (type === PlayerListType.Add) {
			for (const _x of playerListRecords) {
				stream.writeBool(true);
			}
		}

		return playerListRecords;
	}
	public static write(stream: Encapsulated, value: PlayerListRecord[], endian: Endianness, type: PlayerListType): void {
		stream.writeVarInt(value.length);
		for (const playerListRecord of value) {
			stream.writeUuid(playerListRecord.uuid);
			if (type === PlayerListType.Add) {
				stream.writeZigZong(playerListRecord.runtimeId!);
				stream.writeBigString(playerListRecord.username!);
				stream.writeBigString(playerListRecord.xuid!);
				stream.writeBigString(playerListRecord.platformChatId!);
				stream.writeLF32(playerListRecord.buildPlatform!);
				stream.write(playerListRecord.skinData!);
				stream.writeBool(playerListRecord.isTeacher!);
				stream.writeBool(playerListRecord.isHost!);
			}
		}

		if (type === PlayerListType.Add) {
			for (const _x of value) {
				stream.writeBool(true);
			}
		}
	}
}

export { PlayerListRecords, PlayerListType, type PlayerListRecord };
