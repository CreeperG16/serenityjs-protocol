import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { BigString } from '../types';

// This packet is necessary to start encryption.
@Packet(0x03, VarInt)
class ServerToClientHandshake extends Encapsulated {
	@Serialize(BigString) public token!: string;
}

export { ServerToClientHandshake };
