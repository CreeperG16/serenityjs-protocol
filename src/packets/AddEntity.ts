import type { Buffer } from 'node:buffer';
import { Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { VarInt } from 'binarystream.js';

@Packet(0x0d, VarInt)
class AddEntity extends Encapsulated {
	public uniqueEntityId!: bigint;
	public runtimeId!: bigint;
	public entityType!: string;

	public x!: number;
	public y!: number;
	public z!: number;

	public motionX!: number;
	public motionY!: number;
	public motionZ!: number;

	public pitch!: number;
	public yaw!: number;
	public headYaw!: number;
	public bodyYaw!: number;

	public override serialize(): Buffer {
		this.writeVarInt(this.getId());
		this.writeZigZong(this.uniqueEntityId);
		this.writeVarLong(this.runtimeId);
		this.writeBigString(this.entityType);
		this.writeLF32(this.x);
		this.writeLF32(this.y);
		this.writeLF32(this.z);
		this.writeLF32(this.motionX);
		this.writeLF32(this.motionY);
		this.writeLF32(this.motionZ);
		this.writeLF32(this.pitch);
		this.writeLF32(this.yaw);
		this.writeLF32(this.headYaw);
		this.writeLF32(this.bodyYaw);

		this.writeVarInt(0); // EntityAttributes
		this.writeVarInt(0); // MetadataDictionary
		this.writeVarInt(0); // EntityProperties
		this.writeVarInt(0); // -
		this.writeVarInt(0); // Links

		return this.getBuffer();
	}
}

export { AddEntity };
