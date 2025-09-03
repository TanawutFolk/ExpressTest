import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import createDebug from "debug";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url); // file:///D:/test/app.ts
const __dirname = dirname(__filename); // => D:\test\app.ts   (บน Windows)

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(morgan("dev"));

app.use(express.static(join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.send("Hello From app.ts");
});

const debug = createDebug("app");
app.listen(port, () => {
  debug(`Listening on ${chalk.green(String(port))}`);
  console.log(`Listening on ${chalk.green(String(port))}`);
});
