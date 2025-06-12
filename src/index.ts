import { createContext } from "./context";

async function main() {
  //https://graph.microsoft.com/v1.0/me/messages?$filter=emailAddress eq 'notificacion@notificacionesbaccr.com'
  //https://graph.microsoft.com/v1.0/me/messages?$select=sender/emailAddress/address
  //https://graph.microsoft.com/v1.0/me/messages?$select=sender/emailAddress/address eq 'notificacion@notificacionesbaccr.com'
  const context = createContext();
  const a = await context.graphClient.messagesFrom('notificacion@notificacionesbaccr.com');
  context.logger.info(a); 
}

void main();