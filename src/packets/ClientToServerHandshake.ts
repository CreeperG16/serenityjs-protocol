import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32, Short } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x04, VarInt)
class ClientToServerHandshake extends Encapsulated {
	// packet has no data
}

export { ClientToServerHandshake };
