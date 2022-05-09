import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { MainCard } from '../components/MainCard';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>5TABWU</title>
      </Head>

      <Header session={session} />
      <MainCard session={session} />
    </>
  );
};

export default Home;
