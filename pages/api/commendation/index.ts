import { NextApiRequest, NextApiResponse } from "next";
import { createCommendation, readAllCommendations } from "../../../lib/api/commendations";

/*
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const commendations = await readAllCommendations();
      res.json(commendations);
      break;
      
    case "POST": 
      //const message = req.body.message as string;
      const body = req.body;
      const commendation = await createCommendation(body);
      res.json(commendation)
      break;
  }
}
*/

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First name or message not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.message}` })
}