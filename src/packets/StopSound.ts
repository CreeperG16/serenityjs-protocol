import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x57, VarInt)
class StopSound extends Encapsulated {
	@Serialize(LitString) public soundName!: string;
	@Serialize(Bool) public stoppingAllSounds!: boolean;
}

export { StopSound };
