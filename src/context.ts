import { GraphClient } from "./graph"
import pino from "pino"

export function createContext() {
  const logger = pino();
  /**
   * logger
   * measure performance // make it a decorator
   * base url or fetch client
   *  */  
  return {
    graphClient: new GraphClient('https://graph.microsoft.com/v1.0/me/', logger),
    logger: logger
  }
}