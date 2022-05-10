import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useSession } from 'next-auth/react';

import Head from 'next/head';
import React, { useEffect } from 'react';
import { useQuestionContext } from '../contexts';
import { Header } from '../components/Header';
import { MainCard } from '../components/MainCard';
import { Question } from '../utils';

const Home: NextPage = ({
  questions,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const { data: session } = useSession();
  const { setQuestions } = useQuestionContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setQuestions(questions), []);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch('http://localhost:3000/api/questions');

  const questions: Promise<Question[]> = await result.json();

  return {
    props: {
      questions,
    },
  };
};
