import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { PlayerStatus } from '../enums';

@Packet(0x02, VarInt)
class playStatus extends Encapsulated {
	@Serialize(Int32) public stutus!: PlayerStatus;
}

export { playStatus };
