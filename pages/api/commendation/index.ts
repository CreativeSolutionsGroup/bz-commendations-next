import { NextApiRequest, NextApiResponse } from "next";
import { createCommendation, readAllCommendations, readAllMembers } from "../../../lib/api/commendations";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const commendations = await readAllCommendations();
      res.json(commendations);
      break;
      
    case "POST": 
      console.log('body: ', req.body);

      if (!req.body.reciever || !req.body.msg) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Recipient or message not found' })
      }

      const msg = req.body.msg as string;
      const reciever = req.body.recipient as string;
      const commendation = await createCommendation(msg);

      res.status(200).json({ data: `${reciever} ${msg}` })
      res.json(commendation)
      break;
  }
}