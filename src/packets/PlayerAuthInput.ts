import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x90, VarInt)
class PlayerAuthInput extends Encapsulated {}

export { PlayerAuthInput };
