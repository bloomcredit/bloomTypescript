import { InputError } from "./Error";
import { Http } from "./Http";

export class Consumer {
  constructor(
    private http: Http
  ) { }

  register(token: string, consumerInfo: any): Promise<number> {
    const requiredFields = [
      'first_name',
      'last_name',
      'city',
      'line1',
      'state_code',
      'zipcode',
      'address_primary'
    ];

    requiredFields.forEach(k => {
      if (!consumerInfo.hasOwnProperty(k)) {
        throw new InputError(`Required field missing : ${k}`);
      }
    });

    let address: any = {
      city: consumerInfo['city'],
      hash: consumerInfo['hash'],
      line1: consumerInfo['line1'],
      line2: consumerInfo['line2'],
      primary: consumerInfo['address_primary'],
      state_code: consumerInfo['state_code'],
      type: consumerInfo['address_type'],
      zipcode: consumerInfo['zipcode']
    };

    Object.keys(address).forEach((k) => address[k] == null && delete address[k]);

    const addresses = [address];

    let emails: any = {
      email_address: consumerInfo['email_address'],
      primary: consumerInfo['email_primary'],
      type: consumerInfo['email_type']
    };
    Object.keys(emails).forEach((k) => emails[k] == null && delete emails[k]);

    let name: any = {
      first_name: consumerInfo['first_name'],
      middle_name: consumerInfo['middle_name'],
      last_name: consumerInfo['last_name'],
      generation_code: consumerInfo['generation_code']
    };
    Object.keys(name).forEach((k) => name[k] == null && delete name[k]);

    let phones: any = {
      phone_number: consumerInfo['phone_number'],
      primary: consumerInfo['phone_primary'],
      type: consumerInfo['phone_type']
    };
    Object.keys(phones).forEach((k) => phones[k] == null && delete phones[k]);

    let attributes: any = {
      ssn: consumerInfo['ssn'],
      addresses: addresses,
      date_of_birth: consumerInfo['date_of_birth'],
      emails: emails,
      income: consumerInfo['income'],
      ip_address: consumerInfo['ip_address'],
      name: name,
      phones: phones
    };
    Object.keys(attributes).forEach((k) => attributes[k] == null && delete attributes[k]);

    const body = {
      data: {
        type: 'consumers',
        attributes
      }
    };

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

    return this.http.request('POST', '/v2/core/consumers', body, headers)
      .then((response: any) => {
        return response.data.id;
      });
  }
}