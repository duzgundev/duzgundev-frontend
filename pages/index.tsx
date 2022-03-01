import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../modules/About';
import Articles from '../modules/Articles';
import MyStack from '../modules/MyStack';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mert Düzgün | Homepage</title>
      </Head>
      <About />
      <MyStack />
      <Articles />
    </>
  );
};

export default Home;
