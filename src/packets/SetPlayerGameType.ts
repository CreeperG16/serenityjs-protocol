import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3e, VarInt)
class SetPlayerGameType extends Encapsulated {
	@Serialize(VarInt) public gamemode!: number;
}

export { SetPlayerGameType };
