import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x05, VarInt)
class Disconect extends Encapsulated {
	@Serialize(Bool) public hideDisconnectScreen!: boolean;
	@Serialize(LitString) public message!: string;
}

export { Disconect };
