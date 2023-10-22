import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x75, VarInt)
class ScriptCustomEvent extends Encapsulated {
	@Serialize(LitString) public eventName!: string;
	@Serialize(LitString) public data!: string;
}

export { ScriptCustomEvent };
