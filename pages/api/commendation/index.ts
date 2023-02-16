import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createCommendation, emailToId, idToEmail, idToName, idToPhoneNumber, readAllCommendations, sendBzEmail, sendBzText, updateMemberImageURL } from "../../../lib/api/commendations";
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
        return
      }

      if (req.body.recipient == null || req.body.msg == null) {
        console.error("Error: No recipient or no message. ")
        res.redirect("/")
        return
      }

      await updateMemberImageURL(session?.user?.image as string, sender as string)
      await createCommendation(sender as string, recipient, msg);
      sendBzEmail(session?.user?.email as string, await idToEmail(recipient), session?.user?.name as string, msg);
      sendBzText(await idToPhoneNumber(sender), session?.user?.name as string, msg);
      res.redirect("/");
      break;
  }
}