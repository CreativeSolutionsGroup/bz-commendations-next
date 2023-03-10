import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import CommendationForm from "../components/CommendationForm";
import { readAllMembers } from '../lib/api/commendations';

export async function getStaticProps() {
  const members = await readAllMembers();

  return {
    props: { members },
    revalidate: 3600
  }
}

export default function Home({ members }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>BZ Commendations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <CommendationForm members={members} />
      </main>
    </>
  )
}
