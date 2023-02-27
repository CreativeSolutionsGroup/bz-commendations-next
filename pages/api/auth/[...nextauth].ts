import { Role } from "@prisma/client";
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "../../../lib/api/db";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id_token: unknown,
    roles: Array<Role>,
    isAdmin: boolean
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
    }),
  ],
  callbacks: {
    async signIn({ user: { email } }) {
      console.log("signIn")
      return !!await prisma.member.count({
        where: { email: email ?? "" }
      });
    },
    async jwt({ token, account }) {
      console.log("jwt")

      // Persist the id_token to the token
      if (account) {
        token.id_token = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {

      console.log("sess")
      let member = await prisma.member.findFirst({ where: { email: token.email ?? "" }, include: { roles: true } });

      // Send send the id_token to the client
      session.id_token = token.id_token;
      // we think that member here is not undefined because `singIn` should have caught anyone not in the database.
      session.roles = member!.roles;
      session.isAdmin = member!.roles.find(r => r.name === "admin") != undefined;

      return session;
    },
  },
}

export default NextAuth(authOptions);