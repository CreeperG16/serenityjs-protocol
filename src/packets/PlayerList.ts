import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3f, VarInt)
class PlayerList extends Encapsulated {
	// add the right type, this is just a placeholder should be PlayerRecords
	// @Serialize(VarInt) public Records!: ;
}

export { PlayerList };
