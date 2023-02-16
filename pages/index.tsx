import Head from 'next/head'
import { CommendationForm } from "../components/CommendationForm"
import { readAllMembers } from '../lib/api/commendations';
import { InferGetServerSidePropsType } from 'next';

export async function getServerSideProps() {
  const members = await readAllMembers();
  return {
    props: { members }
  }
}

export default function Home({ members }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>BZ Commendations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CommendationForm members={members} />
      </main>
    </>
  )
}
