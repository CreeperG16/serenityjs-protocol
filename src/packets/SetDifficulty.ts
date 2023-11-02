import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Difficulty } from '../enums';

@Packet(0x3c, VarInt)
class SetDifficulty extends Encapsulated {
	@Serialize(VarInt) public difficulty!: Difficulty;
}

export { SetDifficulty };
