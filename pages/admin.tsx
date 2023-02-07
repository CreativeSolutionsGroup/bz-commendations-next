import { AppProps } from "next/app";
import { Layout } from "../components/Layout";

export default function Admin({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}