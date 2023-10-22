import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x92, VarInt)
class PlayerEnchantOptions extends Encapsulated {}

export { PlayerEnchantOptions };
