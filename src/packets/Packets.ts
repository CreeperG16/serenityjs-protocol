import { BiomeDefinitionList } from './BiomeDefinitionList';
import { ChunkRadiusUpdate } from './ChunkRadiusUpdate';
import { ClientCacheStatus } from './ClientCacheStatus';
import { ClientToServerHandshake } from './ClientToServerHandshake';
import { CreativeContent } from './CreativeContent';
import { Disconect } from './Disconect';
import { LevelChunk } from './LevelChunk';
import { Login } from './Login';
import { NetworkChunkPublisherUpdate } from './NetworkChunkPublisherUpdate';
import { NetworkSettings } from './NetworkSettings';
import { PlayStatus } from './PlayStatus';
import { PlayerAuthInput } from './PlayerAuthInput';
import { RequestChunkRadius } from './RequestChunkRadius';
import { RequestNetworkSettings } from './RequestNetworkSettings';
import { ResourcePackClientResponse } from './ResourcePackClientResponse';
import { ResourcePackStack } from './ResourcePackStack';
import { ResourcePacksInfo } from './ResourcePacksInfo';
import { ServerToClientHandshake } from './ServerToClientHandshake';
import { SetSpawnPosition } from './SetSpawnPosition';
import { StartGame } from './StartGame';
import { TickSync } from './TickSync';

// Packet IDs
enum Packets {
	Login = 0x01, // 1
	PlayStatus = 0x02, // 2
	ServerToClientHandshake = 0x03, // 3
	ClientToServerHandshake = 0x04, // 4
	Disconect = 0x05, // 5
	ResourcePacksInfo = 0x06, // 6
	ResourcePackStack = 0x07, // 7
	ResourcePackClientResponse = 0x08, // 8
	// Gap
	StartGame = 0x0b, // 11
	// Gap
	TickSync = 0x17, // 23
	// Gap
	SetSpawnPosition = 0x2b, // 43
	Respawn = 0x2d, // 45
	// Gap
	LevelChunk = 0x3a, // 58
	// Gap
	RequestChunkRadius = 0x45, // 69
	ChunkRadiusUpdate = 0x46, // 70
	// Gap
	NetworkChunkPublisherUpdate = 0x79, // 121
	BiomeDefinitionList = 0x7a, // 122
	// Gap
	ClientCacheStatus = 0x81, // 129
	// Gap
	NetworkSettings = 0x8f, // 143
	PlayerAuthInput = 0x90, // 144
	CreativeContent = 0x91, // 145
	// Gap
	RequestNetworkSettings = 0xc1, // 193
}

// Packets
const Packet = {
	[Packets.Login]: Login,
	[Packets.PlayStatus]: PlayStatus,
	[Packets.ServerToClientHandshake]: ServerToClientHandshake,
	[Packets.ClientToServerHandshake]: ClientToServerHandshake,
	[Packets.Disconect]: Disconect,
	[Packets.ResourcePacksInfo]: ResourcePacksInfo,
	[Packets.ResourcePackStack]: ResourcePackStack,
	[Packets.ResourcePackClientResponse]: ResourcePackClientResponse,
	// Gap
	[Packets.StartGame]: StartGame,
	// Gap
	[Packets.TickSync]: TickSync,
	// Gap
	[Packets.SetSpawnPosition]: SetSpawnPosition,
	[Packets.Respawn]: SetSpawnPosition,
	// Gap
	[Packets.LevelChunk]: LevelChunk,
	// Gap
	[Packets.RequestChunkRadius]: RequestChunkRadius,
	[Packets.ChunkRadiusUpdate]: ChunkRadiusUpdate,
	// Gap
	[Packets.NetworkChunkPublisherUpdate]: NetworkChunkPublisherUpdate,
	[Packets.BiomeDefinitionList]: BiomeDefinitionList,
	// Gap
	[Packets.ClientCacheStatus]: ClientCacheStatus,
	// Gap
	[Packets.NetworkSettings]: NetworkSettings,
	[Packets.PlayerAuthInput]: PlayerAuthInput,
	[Packets.CreativeContent]: CreativeContent,
	// Gap
	[Packets.RequestNetworkSettings]: RequestNetworkSettings,
};

export { Packets, Packet };
