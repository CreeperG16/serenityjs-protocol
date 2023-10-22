import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Int32, Bool } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x06, VarInt)
class ResourcePacksInfo extends Encapsulated {
	@Serialize(Bool) public forceAccept!: boolean;
	@Serialize(Bool) public scriptingEnabled!: boolean;
	// TODO: add the custom type: ResourcePackInfos
	// @Serialize(Bool) public BehahaviorPackInfos!: boolean;
	// @Serialize(Bool) public ResourcePackInfos!: boolean;
}

export { ResourcePacksInfo };
