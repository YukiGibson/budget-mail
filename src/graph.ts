import {Logger} from "pino";
import { get } from "./request";


export class GraphClient {
  readonly #baseUrl: string;
  readonly #logger: Logger;
  constructor(baseUrl: string, logger: Logger) {
    this.#baseUrl = baseUrl;
    this.#logger = logger;
    /**

     * - deal with rate limits
     */
  }

  /**
   * 
   * @param {string} email 
   * @returns {Promise<Record<string, unknown>>}
   */
  async messagesFrom(email: string): Promise<Record<string, unknown>> {
    this.#logger.info(`Searching with email "${email}"`);
    const url = new URL('/messages', this.#baseUrl);
    let result: any; // TODO: change for actual object type
    try {
      result = await get(url, {select: `sender/emailAddress/address eq '${email}'`});
    } catch (error) {
      this.#logger.error((error as Error).message); 
    }
    return result;
  }
}