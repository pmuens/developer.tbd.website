import { test, expect, describe, beforeAll, vi } from 'vitest';
import {
  createIdentityAgent,
  getDwnEndpoints,
  createDidOptions,
  createSocialMediaIdentity,
} from '../../../../code-snippets/web5/build/decentralized-web-nodes/use-identity-agents';
import { IdentityAgent } from '@web5/identity-agent';
import { setupIdentityAgent } from '../../../main-setup';

let agent;
let web5;
describe('create identity agent', () => {
  beforeAll(async () => {
    const result = await setupIdentityAgent();

    agent = result.agent;

    // by time IdentityAgent.create() is executed, Web5.connect() has already run(in setup - web5.js)
    // agent = await createIdentityAgent();
  });
  test('createDidOptions returns an object with cryptographic keys and service endpoints', async () => {
    const didOptions = await getDwnEndpoints();

    expect(didOptions).toHaveProperty('keySet.verificationMethodKeys');
    expect(Array.isArray(didOptions.keySet.verificationMethodKeys)).toBe(true);
    expect(didOptions).toHaveProperty('services');
    expect(Array.isArray(didOptions.services)).toBe(true);
    didOptions.services.forEach((service) => {
      expect(service).toHaveProperty('id');
      expect(service).toHaveProperty('serviceEndpoint');
      expect(service).toHaveProperty('type');
      expect(service.type).toBe('DecentralizedWebNode');
    });
  });
});
