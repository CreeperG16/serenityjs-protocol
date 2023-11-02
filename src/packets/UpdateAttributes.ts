import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import type { PlayerAttribute } from '../types';
import { PlayerAttributes } from '../types';

@Packet(0x1d, VarInt)
class UpdateAttributes extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(PlayerAttributes) public attributes!: PlayerAttribute[];
	@Serialize(VarLong) public tick!: bigint;
}

export { UpdateAttributes };
