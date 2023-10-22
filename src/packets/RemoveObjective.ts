import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x6a, VarInt)
class RemoveObjective extends Encapsulated {
	@Serialize(LitString) public objectiveId!: string;
}

export { RemoveObjective };
