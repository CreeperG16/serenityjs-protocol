// All the packet ids with the corresponding packet class
export * from './Packets';

// NOTE: Please try to put the packets in the order according to their id. Thx!
// All the exports below are from src/packets/index.ts
export * from './Login';
export * from './PlayStatus';
export * from './ServerToClientHandshake';
export * from './ClientToServerHandshake';
export * from './Disconect';
export * from './ResourcePacksInfo';
export * from './ResourcePackStack';
export * from './ResourcePackClientResponse';
export * from './Text';
export * from './SetTime';
export * from './StartGame';
export * from './AddPlayer';
export * from './AddEntity';
export * from './RemoveEntity';
export * from './AddItemEntity';
// Gap
export * from './TakeItemEntity';
export * from './MoveEntity';
export * from './MovePlayer';
export * from './RiderJump';
export * from './UpdateBlock';
export * from './AddPainting';
export * from './TickSync';
export * from './LevelSoundEventOld';
export * from './LevelEvent';
export * from './BlockEvent';
export * from './EntityEvent';
export * from './MobEffect';
export * from './UpdateAttributes';
// Gap
export * from './Interact';
export * from './BlockPickRequest';
export * from './EntityPickRequest';
export * from './PlayerAction';
// Gap
export * from './HurtArmor';
// Gap
export * from './SetEntityMotion';
export * from './SetEntityLink';
export * from './SetHealth';
export * from './SetSpawnPosition';
export * from './Animate';
export * from './Respawn';
export * from './ContainerOpen';
export * from './ContainerClose';
export * from './PlayerHotbar';
// Gap
export * from './ContainerSetData';
export * from './CraftingData';
// Gap
export * from './LevelChunk';
// Gap
export * from './PlayerList';
// Gap
export * from './RequestChunkRadius';
export * from './ChunkRadiusUpdate';
// Gap
export * from './SetLocalPlayerAsInitialized';
// Gap
export * from './NetworkChunkPublisherUpdate';
export * from './BiomeDefinitionList';
// Gap
export * from './ClientCacheStatus';
// Gap
export * from './NetworkSettings';
export * from './PlayerAuthInput';
export * from './CreativeContent';
// Gap
export * from './RequestNetworkSettings';
