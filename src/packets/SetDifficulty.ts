import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3c, VarInt)
class SetDifficulty extends Encapsulated {
	@Serialize(VarInt) public dificulty!: number;
}

export { SetDifficulty };
