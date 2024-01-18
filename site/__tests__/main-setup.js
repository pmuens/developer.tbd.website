import { beforeAll, beforeEach } from 'vitest';
import { Web5 } from '@web5/api';
import { IdentityAgent } from '@web5/identity-agent';
import { webcrypto } from 'node:crypto';

// node.js 18 and earlier, needs globalThis.crypto polyfill
// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

export async function setupIdentityAgent() {
  const agent = await IdentityAgent.create();

  return { agent };
}

export async function setupWeb5() {
  const testDwnUrl = import.meta.env.VITE_APP_TEST_DWN_URL;
  const dwnOptions = testDwnUrl
    ? {
        techPreview: {
          dwnEndpoints: ['http://localhost:3000'],
        },
      }
    : undefined;

  console.info('Setting up Web5 >>>', { dwnOptions });

  const { web5, did } = await Web5.connect(dwnOptions);

  console.info('Web5 setup complete!');

  return { web5, did };
}

// Wrap the setup logic in beforeAll
// beforeAll(async () => {
//   await setupIdentityAgent();
//   await setupWeb5();
// });
