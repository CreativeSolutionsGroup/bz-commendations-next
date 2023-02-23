import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createCommendation, emailToId, idToEmail, idToName, idToPhoneNumber, readAllCommendations, send_bz_email, send_bz_text, updateMemberImageURL } from "../../../lib/api/commendations";
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
      const recipientEmail = await idToEmail(recipient);

      if (sender == null || session?.user?.email === recipientEmail) {
        console.log("Error: Bad email");
        res.redirect("/");
        return
      }

      if (req.body.recipient == null || req.body.msg == null) {
        console.error("Error: No recipient or no message. ")
        res.redirect("/")
        return
      }

      const update = await updateMemberImageURL(session?.user?.image as string, sender as string)
      const commendation = await createCommendation(sender as string, recipient, msg);
      send_bz_email(session?.user?.email as string, recipientEmail, session?.user?.name as string, msg);
      send_bz_text(await idToPhoneNumber(recipient), session?.user?.name as string, msg);
      res.redirect("/");
      break;
  }
}