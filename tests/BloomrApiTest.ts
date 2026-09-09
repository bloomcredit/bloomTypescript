import 'mocha';
import { expect } from 'chai';
import { BloomrApi } from '../src';

describe('Bloomr Api test', () => {

    it('should return auth token', async function () {
      const clientId = process.env.BLOOM_CLIENT_ID;
      const clientSecret = process.env.BLOOM_CLIENT_SECRET;

      if (!clientId || !clientSecret) {
        this.skip();
      }

      const api = new BloomrApi(
        process.env.BLOOM_API_URL || 'https://sandbox.bloom.dev',
        process.env.BLOOM_AUTH_URL || 'https://authn.bloomcredit.dev',
        clientId,
        clientSecret
      );

      try {
        const token = await api.auth.fetchAuthToken();
        const id = await api.consumer.register(token, {
          'first_name': 'Michael',
          'last_name': 'Scott',
          'city': 'Scranton',
          'line1': '1725 Slough Avenue',
          'state_code': 'PA',
          'zipcode': '18503',
          "address_primary": true,
          'date_of_birth': '1964-03-15',
          "ssn": "123456789"
        });
        const data = api.credit.getCreditData(token, '1');
        console.log(data)
      } catch (e) {
        console.log(e);
      }
    });
});
