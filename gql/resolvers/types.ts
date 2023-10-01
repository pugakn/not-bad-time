import { NextApiRequest, NextApiResponse } from "next";

export type Context = {
  res: NextApiResponse;
  req: NextApiRequest;
  userId: string | null;
};
