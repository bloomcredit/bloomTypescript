import { Auth } from "./Auth";
import { Consumer } from "./Consumer";
import { Credit } from "./Credit";
import { Http } from "./Http";

export class BloomrApi {
  private http: Http;
  public auth: Auth;
  public consumer: Consumer;
  public credit: Credit;

  constructor(
    private apiUrlBase: string,
    private authUrlBase: string,
    private clientId: string,
    private clientSecret: string
  ) {
    this.http = new Http(
      this.apiUrlBase, this.authUrlBase
    );

    this.auth = new Auth(this.http, this.clientId, this.clientSecret);
    this.consumer = new Consumer(this.http);
    this.credit = new Credit(this.http);
  }
}