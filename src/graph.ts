import { get } from "./request";

interface FetchClient {
  get: Promise;
  post: Promise<Body>;
  put: Promise<boolean>;
  deletem: Promise<boolean>;
}

export class GraphClient implements FetchClient {
  readonly #baseUrl;
  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
    /**
     * implement:
     * - retries
     * - abort controller
     * - deal with rate limits
     */
  }

  async messagesFrom(email: string) {
    const select = {eq: ['sender/emailAddress/address', email]};
    const [b] = Object.keys(select)
    const c = select[b].join(` ${b} `);
    const url = new URL('/messages', this.#baseUrl);
    const a = await get(url);
  //https://graph.microsoft.com/v1.0/me/messages?$select=sender/emailAddress/address eq 'notificacion@notificacionesbaccr.com'
  }
  put: Promise<boolean>;
  deletem: Promise<boolean>;
}