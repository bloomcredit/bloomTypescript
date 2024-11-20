import { Http } from "./Http";

export class Auth {
  constructor(
    private http: Http,
    private clientId: string,
    private clientSecret: string
  ) { }

  fetchAuthToken() : Promise<string> {
    if (!this.clientId) {
      throw new Error('Make sure clientId is set');
    }

    if (!this.clientSecret) {
      throw new Error('Make sure clientSecret is set');
    }

    let body = {
      'client_id': this.clientId,
      'client_secret': this.clientSecret,
      'audience': 'dev-api',
      'scope': 'data-access:all',
      'grant_type': 'client_credentials'
    }

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.authRequest(
      'POST',
      '/oauth2/token',
      body,
      headers
    ).then((response: any) => {
      return response.data['access_token'];
    });
  }
}