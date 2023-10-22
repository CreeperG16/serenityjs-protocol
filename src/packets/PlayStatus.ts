import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { PlayerStatuses } from '../enums';

@Packet(0x02, VarInt)
class playStatus extends Encapsulated {
	// ? not clue if Short is the right type
	@Serialize(Short) public stutus!: PlayerStatuses;
}

export { playStatus };
