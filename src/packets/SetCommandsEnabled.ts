import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3b, VarInt)
class SetCommandsEnabled extends Encapsulated {
	@Serialize(Bool) public commandsEnabled!: boolean;
}

export { SetCommandsEnabled };
