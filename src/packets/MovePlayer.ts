import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, LF32, UInt8, Bool, VarLong, Endianness } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f, MovementCause, MoveMode, TeleportCause } from '../types';

@Packet(0x13, VarInt)
class MovePlayer extends Encapsulated {
	@Serialize(VarInt) public runtimeId!: bigint;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(LF32) public pitch!: number;
	@Serialize(LF32) public yaw!: number;
	@Serialize(LF32) public headYaw!: number;
	@Serialize(UInt8) public mode!: MoveMode;
	@Serialize(Bool) public onGround!: boolean;
	@Serialize(VarInt) public ridingRuntimeId!: bigint;
	@Serialize(MovementCause, Endianness.Little, 'mode') public cause!: TeleportCause;
	@Serialize(VarLong) public tick!: bigint;
}

export { MovePlayer };
