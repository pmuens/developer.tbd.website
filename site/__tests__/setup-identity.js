import { beforeAll } from 'vitest';
import { Web5 } from '@web5/api';
import { IdentityAgent } from '@web5/identity-agent';

// node.js 18 and earlier,  needs globalThis.crypto polyfill
import { webcrypto } from 'node:crypto';
// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

let agent;

beforeAll(async () => {
  if (globalThis.web5 || globalThis.did) {
    return;
  }

  console.log('does this actually run?');

  agent = await IdentityAgent.create();

  globalThis.agent = agent;
});
