import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, Int8, VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { WindowID } from '../enums';

@Packet(0x30, VarInt)
class PlayerHotbar extends Encapsulated {
	@Serialize(VarInt) public selectedSlot!: number;
	@Serialize(Int8) public windowId!: WindowID;
	@Serialize(Bool) public selectSlot!: boolean;
}

export { PlayerHotbar };
