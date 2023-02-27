import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import { CommendationForm } from "../components/CommendationForm";
import { readAllMembers } from '../lib/api/commendations';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("Trying to load serverside session...")
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("Finished")

  const members = await readAllMembers(session?.user?.email ?? "");
  return {
    props: { members }
  }
}

export default function Home({ members }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>BZ Commendations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CommendationForm members={members} />
      </main>
    </>
  )
}
