import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32 } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3d, VarInt)
class ChangeDimension extends Encapsulated {
	@Serialize(VarInt) public dimension!: number;
	@Serialize(Float) public x!: number;
	@Serialize(Float) public y!: number;
	@Serialize(Float) public z!: number;
	@Serialize(Bool) public respawn!: boolean;
}

export { ChangeDimension };
