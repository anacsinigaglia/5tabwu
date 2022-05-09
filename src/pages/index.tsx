import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>5TABWU</title>
      </Head>
      <Header session={session} />
    </>
  );
};

export default Home;
