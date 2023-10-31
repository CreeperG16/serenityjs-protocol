import type { Buffer } from 'node:buffer';
import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, Endianness } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x0c, VarInt)
class AddPlayer extends Encapsulated {
	public uuid!: string;
	public username!: string;
	public runtimeId!: bigint;
	public platformChatId!: string;

	public x!: number;
	public y!: number;
	public z!: number;

	public motionX!: number;
	public motionY!: number;
	public motionZ!: number;

	public pitch!: number;
	public yaw!: number;
	public headYaw!: number;

	public override serialize(): Buffer {
		this.writeVarInt(this.getId());
		this.writeUuid(this.uuid);
		this.writeBigString(this.username);
		this.writeVarLong(this.runtimeId);
		this.writeBigString(this.platformChatId);
		this.writeLF32(this.x);
		this.writeLF32(this.y);
		this.writeLF32(this.z);
		this.writeLF32(this.motionX);
		this.writeLF32(this.motionY);
		this.writeLF32(this.motionZ);
		this.writeLF32(this.pitch);
		this.writeLF32(this.yaw);
		this.writeLF32(this.headYaw);

		this.writeZigZag(0);
		this.writeZigZag(0);
		this.writeVarInt(0);
		this.writeVarInt(0);
		this.writeVarInt(0);

		this.writeInt64(0n, Endianness.Little);
		this.writeUInt8(0);
		this.writeUInt8(0);
		this.writeUInt8(0);
		this.writeVarInt(0);
		this.writeBigString('Win10');
		this.writeInt32(7, Endianness.Little);

		return this.getBuffer();
	}
}

export { AddPlayer };
