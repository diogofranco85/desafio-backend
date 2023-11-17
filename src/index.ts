import "dotenv/config";
import { ExpressAdapter } from "./infra/http";

const httpserver = new ExpressAdapter();

httpserver.middlewares();
httpserver.listen(3000);