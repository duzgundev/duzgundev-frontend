import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Articles from '../components/Articles';
import MyStack from '../components/MyStack';

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
