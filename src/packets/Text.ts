import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, UInt8, Bool, Endianness, BigString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { ChatTypes } from '../enums';
import { TextSource, TextParameters } from '../types';

@Packet(0x09, VarInt)
class Text extends Encapsulated {
	@Serialize(UInt8) public type!: ChatTypes;
	@Serialize(Bool) public needsTranslation!: boolean;
	@Serialize(TextSource, Endianness.Big, 'type') public source!: string;
	@Serialize(BigString) public message!: string;
	@Serialize(TextParameters, Endianness.Big, 'type') public params!: string[];
	@Serialize(BigString) public xuid!: string;
	@Serialize(BigString) public platformChatId!: string;
}

export { Text };
