import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createCommendation, emailToId, idsToEmails, idToName, idToPhoneNumber, readAllCommendations, send_bz_email, send_bz_text, updateMemberImageURL } from "../../../lib/api/commendations";
import { getTeamOfMember } from "../../../lib/api/teams";
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
      const recipientsString = req.body.recipient as string;
      const recipients = recipientsString.split(",");
      const msg = req.body.msg as string;

      const spliceIndex = recipients.indexOf((session?.user?.email) as string);
      if (spliceIndex > -1) {
        recipients.splice(spliceIndex, 1);
      }

      if (sender == null || recipients.length < 1) {
        console.log("Error: Bad email");
        res.redirect("/teamCommendation");
        return
      }

      if (req.body.recipient == null || req.body.msg == null) {
        console.error("Error: No recipient or no message. ")
        res.redirect("/teamCommendation")
        return
      }

      console.log(recipients);

      const update = await updateMemberImageURL(session?.user?.image as string, sender as string)

      if (recipients.length > 1) {
        const teamReceiving = await getTeamOfMember(recipients[0]);
        send_bz_email(
          session?.user?.email as string,
          recipients,
          session?.user?.name as string,
          msg,
          {
            isTeam: true,
            teamName: teamReceiving?.name ?? ""
          }
        );
      } else {
        send_bz_email(
          session?.user?.email as string,
          recipients,
          session?.user?.name as string,
          msg
        );
      }

      recipients.forEach(async (recipient) => {
        const commendation = await createCommendation(sender as string, await emailToId(recipient) ?? "", msg);
        send_bz_text(await idToPhoneNumber(recipient), session?.user?.name as string, msg);
      })
      res.redirect("/teamCommendation");
      break;
  }
}