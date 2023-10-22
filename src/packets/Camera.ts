import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Long } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x49, VarInt)
class Camera extends Encapsulated {
	@Serialize(Long) public cameraUniqueEntityId!: number;
	@Serialize(Long) public playerUniqueEntityId!: number;
}

export { Camera };
