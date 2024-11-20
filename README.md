# Bloomr

## Installation

    $ npm install 'bloomr'

## Usage

```
const api = new BloomrApi(
    'https://sandbox.bloom.dev',
    'https://authn.bloom.dev',
    'CLIENT_ID',
    'CLIENT_SECRET'
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
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/bloomr.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
