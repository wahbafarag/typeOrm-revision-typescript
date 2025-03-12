import * as express from "express";
import { root } from "./routes/root";

const app = express();
const port = 3000;

function setupServer() {
  app.route("/").get(root);
}

function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

setupServer();
startServer();
