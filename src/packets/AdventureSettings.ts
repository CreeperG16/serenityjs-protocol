import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x37, VarInt)
class AdventureSettings extends Encapsulated {
	@Serialize(VarInt) public flags!: number;
	@Serialize(VarInt) public commandPermission!: number;
	@Serialize(VarInt) public actionPermission!: number;
	@Serialize(VarInt) public permissionLevel!: number;
	@Serialize(VarInt) public customStoredPermissions!: number;
	@Serialize(Bool) public userId!: boolean;
}

export { AdventureSettings };
