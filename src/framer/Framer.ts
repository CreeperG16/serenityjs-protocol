import type { Buffer } from 'node:buffer';
import { BinaryStream } from 'binarystream.js';

/**
 * A class that can frame and unframe packet buffers.
 */
class Framer {
	public static unframe(buffer: Buffer): Buffer[] {
		const stream = new BinaryStream(buffer);
		const frames: Buffer[] = [];
		// Read all the frames, until the end of the buffer
		do {
			const length = stream.readVarInt();
			const frame = stream.read(length);
			frames.push(frame);
		} while (!stream.cursorAtEnd());

		// Return the frames
		return frames;
	}

	public static frame(...buffers: Buffer[]): Buffer {
		const stream = new BinaryStream();
		// Write all the buffers, with their length
		for (const buffer of buffers) {
			stream.writeVarInt(buffer.length);
			stream.write(buffer);
		}

		// Return the buffer
		return stream.getBuffer();
	}
}

export { Framer };
