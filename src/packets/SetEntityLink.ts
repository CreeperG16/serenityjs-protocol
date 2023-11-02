import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, UInt8, VarInt, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x29, VarInt)
class SetEntityLink extends Encapsulated {
	@Serialize(VarLong) public riddenEntityId!: bigint;
	@Serialize(VarLong) public riderEntityId!: bigint;
	@Serialize(UInt8) public type!: number;
	@Serialize(Bool) public immediate!: boolean;
	@Serialize(Bool) public riderInitiated!: boolean;
}

export { SetEntityLink };
