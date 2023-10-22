import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x69, VarInt)
class SetDefaultGameType extends Encapsulated {
	@Serialize(VarInt) public gameMode!: number;
}

export { SetDefaultGameType };
