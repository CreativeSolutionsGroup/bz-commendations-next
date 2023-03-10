
import { withAuth } from "next-auth/middleware"

export default withAuth(
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname, searchParams } = req.nextUrl;
        if (pathname === "/admin") {
          return token?.isAdmin ?? false;
        }

        if (pathname.includes("/me")) {
          return searchParams.get("email") === token?.email
        }

        // otherwise, if you were allowed to login, you're good.
        return !!token;
      },
    },
  }
)

export const config = { matcher: ["/", "/teamCommendation", "/admin", "/me/(.*)"] }