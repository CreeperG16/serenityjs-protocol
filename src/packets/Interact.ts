import { Packet, Serialize } from '@serenityjs/raknet.js';
import { UInt8, VarInt, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f } from '../types';

@Packet(0x21, VarInt)
class Interact extends Encapsulated {
	@Serialize(UInt8) public actionId!: number; // enum? 3 = LeaveVehicle, 4 = MouseOverEntity, 5 = NpcOpen, 6 = OpenInventory
	@Serialize(VarLong) public targetEntityId!: bigint;

	// TODO: position ONLY IF action is 3 or 4
	// @Serialize(Vector3f) public position!: Vec3f;
}

export { Interact };
