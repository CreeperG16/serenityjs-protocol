import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Int8, VarInt, ZigZong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { WindowID, WindowType } from '../enums';
import { BlockCoordinate, BlockCoordinates } from '../types';

@Packet(0x2e, VarInt)
class ContainerOpen extends Encapsulated {
	@Serialize(Int8) public windowId!: WindowID;
	@Serialize(Int8) public windowType!: WindowType;
	@Serialize(BlockCoordinates) public position!: BlockCoordinate;
	@Serialize(ZigZong) public runtimeId!: bigint;
}

export { ContainerOpen };
