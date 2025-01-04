import { GraphClient } from "./request/request"

export function createContext() {
  /**
   * logger
   * measure performance
   * base url or fetch client
   *  */  
  return {
    graphClient: new GraphClient('https://graph.microsoft.com/v1.0/me/')
  }
}