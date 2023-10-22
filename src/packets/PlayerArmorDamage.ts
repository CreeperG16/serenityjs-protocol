import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x95, VarInt)
class PlayerArmorDamage extends Encapsulated {}

export { PlayerArmorDamage };
