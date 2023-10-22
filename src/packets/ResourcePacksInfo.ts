import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Bool } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import type { BehaviorPack, ResourcePack, PackLink } from '../types';
import { BehaviorPackInfo, ResourcePackInfo, PackLinks } from '../types';

@Packet(0x06, VarInt)
class ResourcePacksInfo extends Encapsulated {
	@Serialize(Bool) public forceAccept!: boolean;
	@Serialize(Bool) public scriptingEnabled!: boolean;
	@Serialize(BehaviorPackInfo) public behahaviorPacks!: BehaviorPack[];
	@Serialize(ResourcePackInfo) public resourcePacks!: ResourcePack[];
	@Serialize(PackLinks) public packLinks!: PackLink[];
}

export { ResourcePacksInfo };
