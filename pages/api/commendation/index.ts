import { NextApiRequest, NextApiResponse } from "next";
import { createCommendation, readAllCommendations, readAllMembers } from "../../../lib/api/commendations";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const commendations = await readAllCommendations();
      res.json(commendations);
      break;
      
    case "POST": 
      const sender = "";
      const recipient = req.body.recipient as string;
      const msg = req.body.msg as string;

      const commendation = await createCommendation(sender, recipient, msg);
      res.redirect("/")
      break;
  }
}