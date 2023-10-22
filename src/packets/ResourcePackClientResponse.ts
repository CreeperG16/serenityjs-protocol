import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { resourceStatusDefinitions } from '../enums';

@Packet(0x08, VarInt)
class Disconect extends Encapsulated {
	@Serialize(Short) public status!: resourceStatusDefinitions;
	// TODO: make the field type a ResourcePackIds type
	// @Serialize(LitString) public packIDS!: string;
}

export { Disconect };
