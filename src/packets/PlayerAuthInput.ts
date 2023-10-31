import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, LF32, ZigZong, ZigZag, VarLong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { Vec3f, Vector3f, Vec2f, Vector2f } from '../types';

enum InputMode {
	Unknown,
	KeyboardMouse,
	Touch,
	Gamepad,
	MotionController,
}

enum PlayMode {
	Normal,
	Teaser,
	Screen,
	Viewer,
	Reality,
	Placement,
	LivingRoom,
	ExitLevel,
	ExitLevelLivingRoom,
	NumModes,
}

@Packet(0x90, VarInt)
class PlayerAuthInput extends Encapsulated {
	@Serialize(LF32) public pitch!: number;
	@Serialize(LF32) public yaw!: number;
	@Serialize(Vector3f) public position!: Vec3f;
	@Serialize(Vector2f) public motion!: Vec2f;
	@Serialize(LF32) public head!: number;
	@Serialize(VarLong) public data!: number;
	@Serialize(VarInt) public inputMode!: InputMode;
	@Serialize(VarInt) public playMode!: PlayMode;
	@Serialize(ZigZag) public interactionModel!: number;
	// gaze_direction: if pl_mode is reality, this is the direction the player is looking
	@Serialize(VarLong) public tick!: bigint;
}

export { PlayerAuthInput };
