import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x81, VarInt)
class ClientCacheStatus extends Encapsulated {
	@Serialize(Bool) public enabled!: boolean;
}

export { ClientCacheStatus };
