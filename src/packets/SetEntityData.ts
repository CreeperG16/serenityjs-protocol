import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Endianness, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import type { Metadata } from '../types';
import { MetadataDictionary, EntityProperties, EntityProperty } from '../types';

@Packet(0x27, VarInt)
class SetEntityData extends Encapsulated {
	@Serialize(VarLong, Endianness.Little) public runtimeId!: bigint;
	@Serialize(MetadataDictionary) public metadata!: Metadata[];
	@Serialize(EntityProperties) public properties!: EntityProperty;
	@Serialize(VarLong) public tick!: bigint;
}

export { SetEntityData };
