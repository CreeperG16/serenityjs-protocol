import { AddEntity } from './AddEntity';
import { AddItemEntity } from './AddItemEntity';
import { AddPainting } from './AddPainting';
import { AddPlayer } from './AddPlayer';
import { Animate } from './Animate';
import { BiomeDefinitionList } from './BiomeDefinitionList';
import { BlockEvent } from './BlockEvent';
import { BlockPickRequest } from './BlockPickRequest';
import { ChunkRadiusUpdate } from './ChunkRadiusUpdate';
import { ClientCacheStatus } from './ClientCacheStatus';
import { ClientToServerHandshake } from './ClientToServerHandshake';
import { ContainerClose } from './ContainerClose';
import { ContainerOpen } from './ContainerOpen';
import { ContainerSetData } from './ContainerSetData';
import { CraftingData } from './CraftingData';
import { CreativeContent } from './CreativeContent';
import { Disconect } from './Disconect';
import { EntityEvent } from './EntityEvent';
import { EntityPickRequest } from './EntityPickRequest';
import { HurtArmor } from './HurtArmor';
import { Interact } from './Interact';
import { LevelChunk } from './LevelChunk';
import { LevelEvent } from './LevelEvent';
import { LevelSoundEventOld } from './LevelSoundEventOld';
import { Login } from './Login';
import { MobEffect } from './MobEffect';
import { MoveEntity } from './MoveEntity';
import { MovePlayer } from './MovePlayer';
import { NetworkChunkPublisherUpdate } from './NetworkChunkPublisherUpdate';
import { NetworkSettings } from './NetworkSettings';
import { PlayStatus } from './PlayStatus';
import { PlayerAction } from './PlayerAction';
import { PlayerAuthInput } from './PlayerAuthInput';
import { PlayerHotbar } from './PlayerHotbar';
import { PlayerList } from './PlayerList';
import { RemoveEntity } from './RemoveEntity';
import { RequestChunkRadius } from './RequestChunkRadius';
import { RequestNetworkSettings } from './RequestNetworkSettings';
import { ResourcePackClientResponse } from './ResourcePackClientResponse';
import { ResourcePackStack } from './ResourcePackStack';
import { ResourcePacksInfo } from './ResourcePacksInfo';
import { Respawn } from './Respawn';
import { RiderJump } from './RiderJump';
import { ServerToClientHandshake } from './ServerToClientHandshake';
import { SetEntityLink } from './SetEntityLink';
import { SetEntityMotion } from './SetEntityMotion';
import { SetHealth } from './SetHealth';
import { SetLocalPlayerAsInitialized } from './SetLocalPlayerAsInitialized';
import { SetSpawnPosition } from './SetSpawnPosition';
import { SetTime } from './SetTime';
import { StartGame } from './StartGame';
import { TakeItemEntity } from './TakeItemEntity';
import { Text } from './Text';
import { TickSync } from './TickSync';
import { UpdateAttributes } from './UpdateAttributes';
import { UpdateBlock } from './UpdateBlock';

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
	Text = 0x09, // 9
	SetTime = 0x0a, // 10
	StartGame = 0x0b, // 11
	AddPlayer = 0x0c, // 12
	AddEntity = 0x0d, // 13
	RemoveEntity = 0x0e, // 14
	AddItemEntity = 0x0f, // 15
	// Gap
	TakeItemEntity = 0x11, // 17
	MoveEntity = 0x12, // 18
	MovePlayer = 0x13, // 19
	RiderJump = 0x14, // 20
	UpdateBlock = 0x15, // 21
	AddPainting = 0x16, // 22
	TickSync = 0x17, // 23
	LevelSoundEventOld = 0x18, // 24
	LevelEvent = 0x19, // 25
	BlockEvent = 0x1a, // 26
	EntityEvent = 0x1b, // 27
	MobEffect = 0x1c, // 28
	UpdateAttributes = 0x1d, // 29
	// Gap
	Interact = 0x21, // 33
	BlockPickRequest = 0x22, // 34
	EntityPickRequest = 0x23, // 35
	PlayerAction = 0x24, // 36
	// Gap
	HurtArmor = 0x26, // 38
	// Gap
	SetEntityMotion = 0x28, // 40
	SetEntityLink = 0x29, // 41
	SetHealth = 0x2a, // 42
	SetSpawnPosition = 0x2b, // 43
	Animate = 0x2c, // 44
	Respawn = 0x2d, // 45
	ContainerOpen = 0x2e, // 46
	ContainerClose = 0x2f, // 47
	PlayerHotbar = 0x30, // 48
	// Gap
	ContainerSetData = 0x33, // 51
	CraftingData = 0x34, // 52
	// Gap
	LevelChunk = 0x3a, // 58
	// Gap
	PlayerList = 0x3f, // 63
	// Gap
	RequestChunkRadius = 0x45, // 69
	ChunkRadiusUpdate = 0x46, // 70
	// Gap
	SetLocalPlayerAsInitialized = 0x71, // 113
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
	[Packets.Text]: Text,
	[Packets.SetTime]: SetTime,
	[Packets.StartGame]: StartGame,
	[Packets.AddPlayer]: AddPlayer,
	[Packets.AddEntity]: AddEntity,
	[Packets.RemoveEntity]: RemoveEntity,
	[Packets.AddItemEntity]: AddItemEntity,
	// Gap
	[Packets.TakeItemEntity]: TakeItemEntity,
	[Packets.MoveEntity]: MoveEntity,
	[Packets.MovePlayer]: MovePlayer,
	[Packets.RiderJump]: RiderJump,
	[Packets.UpdateBlock]: UpdateBlock,
	[Packets.AddPainting]: AddPainting,
	[Packets.TickSync]: TickSync,
	[Packets.LevelSoundEventOld]: LevelSoundEventOld,
	[Packets.LevelEvent]: LevelEvent,
	[Packets.BlockEvent]: BlockEvent,
	[Packets.EntityEvent]: EntityEvent,
	[Packets.MobEffect]: MobEffect,
	[Packets.UpdateAttributes]: UpdateAttributes,
	// Gap
	[Packets.Interact]: Interact,
	[Packets.BlockPickRequest]: BlockPickRequest,
	[Packets.EntityPickRequest]: EntityPickRequest,
	[Packets.PlayerAction]: PlayerAction,
	// Gap
	[Packets.HurtArmor]: HurtArmor,
	// Gap
	[Packets.SetEntityMotion]: SetEntityMotion,
	[Packets.SetEntityLink]: SetEntityLink,
	[Packets.SetHealth]: SetHealth,
	[Packets.SetSpawnPosition]: SetSpawnPosition,
	[Packets.Animate]: Animate,
	[Packets.Respawn]: Respawn,
	[Packets.ContainerOpen]: ContainerOpen,
	[Packets.ContainerClose]: ContainerClose,
	[Packets.PlayerHotbar]: PlayerHotbar,
	// Gap
	[Packets.ContainerSetData]: ContainerSetData,
	[Packets.CraftingData]: CraftingData,
	// Gap
	[Packets.LevelChunk]: LevelChunk,
	// Gap
	[Packets.PlayerList]: PlayerList,
	// Gap
	[Packets.RequestChunkRadius]: RequestChunkRadius,
	[Packets.ChunkRadiusUpdate]: ChunkRadiusUpdate,
	// Gap
	[Packets.SetLocalPlayerAsInitialized]: SetLocalPlayerAsInitialized,
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
