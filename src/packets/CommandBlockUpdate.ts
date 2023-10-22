import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x45, VarInt)
class CommandBlockUpdate extends Encapsulated {
	@Serialize(Bool) public isBlock!: boolean;
}

export { CommandBlockUpdate };
