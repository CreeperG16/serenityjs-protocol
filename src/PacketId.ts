import type { Buffer } from 'node:buffer';
import { BinaryStream } from 'binarystream.js';

/**
 * Get the packet ID from a buffer. ( VarInt )
 *
 * @param buffer
 * @returns {number}
 */
function getPacketId(buffer: Buffer): number {
	const stream = new BinaryStream(buffer);
	return stream.readVarInt();
}

export { getPacketId };
