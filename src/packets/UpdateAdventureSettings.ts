import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Bool } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0xbc, VarInt)
class UpdateAdventureSettings extends Encapsulated {
	@Serialize(Bool) public noPvM!: boolean;
	@Serialize(Bool) public noMvP!: boolean;
	@Serialize(Bool) public immutableWorld!: boolean;
	@Serialize(Bool) public showNameTags!: boolean;
	@Serialize(Bool) public autoJump!: boolean;
}

export { UpdateAdventureSettings };
