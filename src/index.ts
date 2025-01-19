
import { createContext } from "./context";

async function main() {
  const context = createContext();
  const a = await context.graphClient.messagesFrom('notificacion@notificacionesbaccr.com');
  context.logger.info(a); 
}

void main();