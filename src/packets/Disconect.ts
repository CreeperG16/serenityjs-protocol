import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, ZigZag, Bool, BigString } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

enum DisconectReason {
	Unknown,
	CantConnectNoInternet,
	NoPermissions,
	UnrecoverableError,
	ThirdPartyBlocked,
	ThirdPartyNoInternet,
	ThirdPartyBadIp,
	ThirdPartyNoServerOrServerLocked,
	VersionMismatch,
	SkinIssue,
	InviteSessionNotFound,
	EduLevelSettingsMissing,
	LocalServerNotFound,
	LegacyDisconnect,
	UserLeaveGameAttempted,
	PlatformLockedSkinsError,
	RealmsWorldUnassigned,
	RealmsServerCantConnect,
	RealmsServerHidden,
	RealmsServerDisabledBeta,
	RealmsServerDisabled,
	CrossPlatformDisallowed,
	CantConnect,
	SessionNotFound,
	ClientSettingsIncompatibleWithServer,
	ServerFull,
	InvalidPlatformSkin,
	EditionVersionMismatch,
	EditionMismatch,
	LevelNewerThanExeVersion,
	NoFailOccurred,
	BannedSkin,
	Timeout,
	ServerNotFound,
	OutdatedServer,
	OutdatedClient,
	NoPremiumPlatform,
	MultiplayerDisabled,
	NoWifi,
	WorldCorruption,
	NoReason,
	Disconnected,
	InvalidPlayer,
	LoggedInOtherLocation,
	ServerIdConflict,
	NotAllowed,
	NotAuthenticated,
	InvalidTenant,
	UnknownPacket,
	UnexpectedPacket,
	InvalidCommandRequestPacket,
	HostSuspended,
	LoginPacketNoRequest,
	LoginPacketNoCert,
	MissingClient,
	Kicked,
	KickedForExploit,
	KickedForIdle,
	ResourcePackProblem,
	IncompatiblePack,
	OutOfStorage,
	InvalidLevel,
	DisconnectPacketDeprecated,
	BlockMismatch,
	InvalidHeights,
	InvalidWidths,
	ConnectionLost,
	ZombieConnection,
	Shutdown,
	ReasonNotSet,
	LoadingStateTimeout,
	ResourcePackLoadingFailed,
	SearchingForSessionLoadingScreenFailed,
	ConnProtocolVersion,
	SubsystemStatusError,
	EmptyAuthFromDiscovery,
	EmptyUrlFromDiscovery,
	ExpiredAuthFromDiscovery,
	UnknownSignalServiceSignInFailure,
	XblJoinLobbyFailure,
	UnspecifiedClientInstanceDisconnection,
	ConnSessionNotFound,
	ConnCreatePeerConnection,
	ConnIce,
	ConnConnectRequest,
	ConnConnectResponse,
	ConnNegotiationTimeout,
	ConnInactivityTimeout,
	StaleConnectionBeingReplaced,
	RealmsSessionNotFound,
	BadPacket,
}

@Packet(0x05, VarInt)
class Disconect extends Encapsulated {
	@Serialize(ZigZag) public reason!: DisconectReason;
	@Serialize(Bool) public hideDisconnectScreen!: boolean;
	@Serialize(BigString) public message!: string;
}

export { Disconect, DisconectReason };
