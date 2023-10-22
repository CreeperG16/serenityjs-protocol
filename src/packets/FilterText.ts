import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0xa3, VarInt)
class ShowProfile extends Encapsulated {
	@Serialize(LitString) public text!: string;
	@Serialize(Bool) public fromServer!: boolean;
}

export { ShowProfile };
