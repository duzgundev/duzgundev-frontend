import type { NextPage } from 'next';
import About from '../modules/About';
import MyStack from '../modules/MyStack';

const Home: NextPage = () => {
  return (
    <>
      <About />
      <MyStack />
    </>
  );
};

export default Home;
