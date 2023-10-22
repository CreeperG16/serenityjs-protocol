import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x98, VarInt)
class EmoteList extends Encapsulated {}

export { EmoteList };
