import { AppProps } from "next/app";
import { Layout } from "../components/Layout";

export default function MyCommendations({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// TO DO:
// 1. get all commendations specific to user ("me"); BLOCKED
// 2. map all commendations in return statement to paper component (MUI)
// 3. inside paper component, implement 3 typographies & an avatar component (within in a BOX component)
// 3a. sender (commendation.from.name)
// 3b. date (commendation.createdAt.toLocateDataString{})
// 3c. message (commendation.message)
// 4. update typographies to match theme (3a, fontWeight="bold"; 3b, variant="caption")
// 5. center paper component and implement typgraphy header: YOUR COMMENDATIONS (fontFamily="fantasy")

// QUESTION(S):
// should the function be named "me" since that is what the MyCommendations button is linked to: "/me"??