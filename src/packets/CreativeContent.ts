import { Packet } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x91, VarInt)
class CreativeContent extends Encapsulated {}

export { CreativeContent };
