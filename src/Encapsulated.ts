import { DataPacket } from '@serenityjs/raknet.js';
import type { Packets } from './packets';

abstract class Encapsulated extends DataPacket {
	public static override id: Packets;
}

export { Encapsulated };
