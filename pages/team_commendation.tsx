import { AppProps } from "next/app";
import { Layout } from "../components/Layout";

export default function TeamCommendation({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}