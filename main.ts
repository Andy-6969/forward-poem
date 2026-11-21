// the-poem-about-permission-20261121-0235 entry (Node 22, standard library only).
// Writes one original short poem about permission to /output/entry.txt,
// byte for byte the same on every run (at most 280 characters).
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Spare Key',
  '',
  'For thirty years my neighbour',
  'kept my key on a nail by her door',
  'and never once used it.',
  '',
  "Tuesday I didn't answer.",
  'She did.',
  '',
  'I woke in the ambulance,',
  'her coat across my legs.',
  '',
  'That was the whole arrangement:',
  'I gave her the power,',
  "she waited until I couldn't ask.",
].join('\n') + '\n';

const length = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`poem is ${length} characters; the limit is 280`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
