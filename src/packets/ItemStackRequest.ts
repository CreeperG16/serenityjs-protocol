import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x93, VarInt)
class ItemStackRequest extends Encapsulated {}

export { ItemStackRequest };
