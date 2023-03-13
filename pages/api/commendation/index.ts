import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createCommendation, emailToId, readAllCommendations, sendBzEmail, sendBzText, updateMemberImageURL } from "../../../lib/api/commendations";
import { getContactInfo } from "../../../lib/api/teams";
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
      const contactInfo = await getContactInfo(recipient);

      const selfIndex = contactInfo.emails.indexOf(session?.user?.email ?? "");
      if (selfIndex != -1) {
        contactInfo.emails.splice(selfIndex, 1);
        contactInfo.phoneNumbers.splice(selfIndex, 1);
      }

      if (sender == null || contactInfo.emails.length < 1) {
        console.log("Error: Bad email");
        res.redirect("/");
        return
      }

      if (req.body.recipient == null || req.body.msg == null) {
        console.error("Error: No recipient or no message. ")
        res.redirect("/")
        return
      }

      const update = await updateMemberImageURL(session?.user?.image as string, sender as string);
      sendBzEmail(session?.user?.email as string, contactInfo.emails, session?.user?.name as string, msg);
      for (let i = 0; i < contactInfo.emails.length; i++) {
        const commendation = await createCommendation(sender as string, await emailToId(contactInfo.emails[i]) ?? "", msg);
        sendBzText(contactInfo.phoneNumbers[i], session?.user?.name as string, msg);
      }
      if (contactInfo.emails.length > 1) {
        res.redirect("/teamCommendation")
      } else {
        res.redirect("/");
      }
      break;
  }
}