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
  'Forward',
  '',
  'At the curb I said forward.',
  "She didn't move.",
  'I said it again, harder,',
  'the harness tight in my fist.',
  'She leaned her weight against my knees.',
  'A truck I never heard',
  "took the corner where I'd have been.",
  '',
  'I asked for eyes.',
  'They gave me someone',
  'who could tell me no.',
].join('\n') + '\n';

const length = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`poem is ${length} characters; the limit is 280`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
