import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/", (req, res) => {
      return res.json(`bleh`);
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
