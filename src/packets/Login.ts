import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { LoginTokens, Tokens } from '../types';

@Packet(0x01, VarInt)
class Login extends Encapsulated {
	@Serialize(Int32) public protocol!: number;
	@Serialize(LoginTokens) public tokens!: Tokens;
}

export { Login };
