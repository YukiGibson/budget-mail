import { createContext } from "./context";

async function main() {
  console.log('Hello world!');
  console.log('Something else');
  const context = createContext();

  //https://graph.microsoft.com/v1.0/me/messages?$filter=emailAddress eq 'notificacion@notificacionesbaccr.com'
  //https://graph.microsoft.com/v1.0/me/messages?$select=sender/emailAddress/address
  //https://graph.microsoft.com/v1.0/me/messages?$select=sender/emailAddress/address eq 'notificacion@notificacionesbaccr.com'
  const params = {
    eq: ['sender/emailAddress/address', 'notification@notificationesbaccr.com']
  }
  const a = await context.graphClient.get('https://graph.microsoft.com/v1.0/me', params);
  /**
   * Use the Outlook mail api instead
   * https://developer.microsoft.com/en-us/graph/graph-explorer
   */
}

void main();