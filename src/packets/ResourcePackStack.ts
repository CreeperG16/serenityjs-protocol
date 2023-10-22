import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32, Bool, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x07, VarInt)
class ResourcePackStack extends Encapsulated {
	@Serialize(Bool) public forceAccept!: boolean;
	// TODO: add Resource Pack Entry

	// TODO: add Behavior Pack Entry

	@Serialize(Bool) public experimental!: boolean;
	@Serialize(LitString) public gameVersion!: string;
}

export { ResourcePackStack };
