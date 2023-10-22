import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, LitString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x6b, VarInt)
class ModelFormRequest extends Encapsulated {
	@Serialize(LitString) public displaySlot!: string;
	@Serialize(LitString) public objectiveId!: string;
	@Serialize(LitString) public displayName!: string;
	@Serialize(LitString) public criteria!: string;
	@Serialize(VarInt) public sortOrder!: number;
}

export { ModelFormRequest };
