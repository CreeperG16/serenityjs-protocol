import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x56, VarInt)
class PlaySound extends Encapsulated {
	@Serialize(LitString) public soundName!: string;
	// add the position type later
	// @Serialize(LitString) public soundPosition!: string;
	@Serialize(Float) public volume!: number;
	@Serialize(Float) public pitch!: number;
}

export { PlaySound };
