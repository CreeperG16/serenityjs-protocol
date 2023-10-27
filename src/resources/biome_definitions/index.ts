import { Buffer } from 'node:buffer';
import definitions from './biome_definitions.json';

const BiomeDefinitions = Buffer.from(definitions);

export { BiomeDefinitions };
