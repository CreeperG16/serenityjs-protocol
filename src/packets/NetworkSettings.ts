import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { CompressionMethod } from '../enums';

@Packet(0x8f, VarInt)
class NetworkSettings extends Encapsulated {
	@Serialize(Short) public compressionThreshold!: number;
	@Serialize(Short) public compressionMethod!: CompressionMethod;
	@Serialize(Bool) public clientThrottle!: boolean;
	@Serialize(UInt8) public clientThreshold!: number;
	@Serialize(Float) public clientScalar!: number;
}

export { NetworkSettings };
