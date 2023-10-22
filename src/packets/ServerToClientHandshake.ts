import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32, Short } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x03, VarInt)
class ServerToClientHandshake extends Encapsulated {
	// TODO: make it the right type cus its a JWT string it contains the salt to complete the Diffie-Hellman key exchange
	@Serialize(Short) public token!: string;
}

export { ServerToClientHandshake };
