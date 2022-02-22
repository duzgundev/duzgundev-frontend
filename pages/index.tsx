import type { NextPage } from 'next';
import About from '../modules/About';
import Articles from '../modules/Articles';
import MyStack from '../modules/MyStack';

const Home: NextPage = () => {
  return (
    <>
      <About />
      <MyStack />
      <Articles />
    </>
  );
};

export default Home;
