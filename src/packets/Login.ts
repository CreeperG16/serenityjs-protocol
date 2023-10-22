import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { CompressionMethod } from '../enums';

@Packet(0x01, VarInt)
class Login extends Encapsulated {
	@Serialize(Int32) public protocol!: number;
	// TODO: well need to make JWT string
	// @Serialize(Short) public chainData!: unknown;
	// @Serialize(Bool) public skinData!: unknown;
}

export { Login };
