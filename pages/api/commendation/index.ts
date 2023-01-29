import { NextApiRequest, NextApiResponse } from "next";
import { createCommendation, readAllCommendations } from "../../../lib/api/commendations";

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const commendations = await readAllCommendations();
      res.json(commendations);
      break;
      
    case "POST": 
      const message = req.body.message as string;
      const commendation = await createCommendation(message);
      res.json(commendation)
      break;
  }
}