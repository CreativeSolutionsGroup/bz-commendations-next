import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createCommendation, emailToId, readAllCommendations, updateMemberImageURL } from "../../../lib/api/commendations";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (session == null || session.user == null) {
    res.redirect("/api/auth/signin")
  }

  switch (req.method) {
    case "GET":
      const commendations = await readAllCommendations();
      res.json(commendations);
      break;

    case "POST":
      const sender = await emailToId((session?.user?.email) as string);
      const recipient = req.body.recipient as string;
      const msg = req.body.msg as string;

      if (sender == null) {
        console.log("Error: Bad email");
        res.redirect("/");
      }

      const update = await updateMemberImageURL(session?.user?.image as string, sender as string)
      const commendation = await createCommendation(sender as string, recipient, msg);
      res.redirect("/");
      break;
  }
}