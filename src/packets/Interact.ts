import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Endianness, UInt8, VarInt, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { InteractActions } from '../enums';
import { Vec3f, InteractPosition } from '../types';

@Packet(0x21, VarInt)
class Interact extends Encapsulated {
	@Serialize(UInt8) public action!: InteractActions;
	@Serialize(VarLong) public targetRuntimeId!: bigint;
	@Serialize(InteractPosition, Endianness.Big, 'action') public position!: Vec3f;
}

export { Interact };
