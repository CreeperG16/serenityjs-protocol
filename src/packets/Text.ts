import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32, Short, Bool, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { chatTypes } from '../enums';

@Packet(0x09, VarInt)
class Text extends Encapsulated {
	@Serialize(Short) public type!: chatTypes;
	@Serialize(Bool) public translate!: boolean;

	// Derived from above; values sent here change depending on that.
	// TODO: add the right packet type and fields cus idk how to do it so when the type is "0, 1, or 2" then "Source Name" will be also sent etc etc

	@Serialize(LitString) public XUID?: string;
	@Serialize(LitString) public PlatformChatID?: string;
}

export { Text };
