import type { Buffer } from 'node:buffer';
import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { BigString, LF32, VarInt, VarLong, ZigZong } from 'binarystream.js';
import {
	Vec3f,
	Vector3f,
	EntityAttribute,
	EntityAttributes,
	EntityProperties,
	EntityProperty,
	EntityLinks,
	EntityLink,
} from '../types';

@Packet(0x0d, VarInt)
class AddEntity extends Encapsulated {
	@Serialize(ZigZong) public uniqueEntityId!: bigint;
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(BigString) public entityType!: string;

	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Vector3f) public motion!: Vec3f;

	@Serialize(LF32) public pitch!: number;
	@Serialize(LF32) public yaw!: number;
	@Serialize(LF32) public headYaw!: number;
	@Serialize(LF32) public bodyYaw!: number;

	@Serialize(EntityAttributes) public attributes!: EntityAttribute[];

	// todo?? Need to look into how metadata is serialized
	@Serialize(VarInt) public metadata!: 0;
	//	this.writeVarInt(0);

	@Serialize(EntityProperties) public properties!: EntityProperty;
	@Serialize(EntityLinks) public links!: EntityLink[];
}

export { AddEntity };
