import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int64, Endianness, UInt8 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { PermissionLevel } from '../enums';
import type { AbilityLayer } from '../types';
import { AbilityLayers } from '../types';

@Packet(0xbb, VarInt)
class UpdateAbilities extends Encapsulated {
	@Serialize(Int64, Endianness.Little) public uniqueId!: bigint;
	@Serialize(UInt8) public permissionLevel!: PermissionLevel;
	@Serialize(UInt8) public commandsPermission!: number;
	@Serialize(AbilityLayers) public abilities!: AbilityLayer[];
}

export { UpdateAbilities };
