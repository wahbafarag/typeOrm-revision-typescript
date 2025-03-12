import { Request, Response } from "express";

export const root = (req: Request, res: Response) => {
  console.log("Server is up and running.");
  res.status(200).send("Server is up and running.");
};
