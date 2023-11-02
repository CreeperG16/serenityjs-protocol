import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Gamemode } from '../enums';

@Packet(0x3e, VarInt)
class SetPlayerGameType extends Encapsulated {
	@Serialize(VarInt) public gamemode!: Gamemode;
}

export { SetPlayerGameType };
