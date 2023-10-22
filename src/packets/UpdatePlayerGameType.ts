import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x97, VarInt)
class UpdatePlayerGameType extends Encapsulated {}

export { UpdatePlayerGameType };
