import * as dotenv from "dotenv";
dotenv.config();

import * as express from "express";
import { root } from "./routes/root";
import { isInteger } from "./utils/is-integer";
import { logger } from "./utils/logger";

const app = express();

function setupServer() {
  app.route("/").get(root);
}

function startServer() {
  let port: number;
  const portEnv = process.env.PORT,
    portArg = process.argv[2];

  if (isInteger(portEnv)) {
    port = parseInt(portEnv);
  } else if (isInteger(portArg)) {
    port = parseInt(portArg);
  } else {
    port = 8080;
  }

  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
}

setupServer();
startServer();
