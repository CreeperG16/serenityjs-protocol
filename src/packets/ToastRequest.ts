import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, BigString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0xba, VarInt)
class ToastRequest extends Encapsulated {
	@Serialize(BigString) public title!: string;
	@Serialize(BigString) public message!: string;
}

export { ToastRequest };
