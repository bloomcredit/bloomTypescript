import 'mocha';
import { expect } from 'chai';
import { BloomrApi } from '../src';

describe('Bloomr Api test', () => {

    it('should return auth token', async () => {
      const api = new BloomrApi(
        'https://sandbox.bloom.dev',
        'https://authn.bloom.dev',
        'aYQCelzANDoHsjj6ByqTqyPl05T9c8FR',
        'KZGA0g8-aWQUVvD91WB_iV29q8xK4Ytm9f_5YGfnkyEgEuZ5-M8I_qIs9LJI0sji'
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
