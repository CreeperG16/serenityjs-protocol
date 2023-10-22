import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x94, VarInt)
class ItemStackResponse extends Encapsulated {}

export { ItemStackResponse };
