import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x04, VarInt)
class ClientToServerHandshake extends Encapsulated {}

export { ClientToServerHandshake };
