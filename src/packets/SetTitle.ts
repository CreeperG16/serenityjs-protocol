import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x58, VarInt)
class SetTitle extends Encapsulated {
	@Serialize(VarInt) public type!: number;
	@Serialize(LitString) public text!: string;
	@Serialize(VarInt) public fadeInTime!: number;
	@Serialize(VarInt) public stayTime!: number;
	@Serialize(VarInt) public fadeOutTime!: number;
}

export { SetTitle };
