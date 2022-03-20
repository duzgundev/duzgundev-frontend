import ReactIcon from '../public/react.svg';
import NextJSIcon from '../public/nextjs.svg';
import TailwindIcon from '../public/tailwindcss.svg';
import ReduxIcon from '../public/redux.svg';
import Link from 'next/link';

const MyStack = () => {
  return (
    <section className="w-full bg-[#F1F5F9] py-8">
      <div className="site-container">
        <div className="site-section flex flex-col items-center justify-between text-center sm:flex-row sm:text-left">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold">My Stack</h2>
            <p className="mt-2">
              I mostly use these technologies to build awesome stuff.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9">
            <Link href="https://reactjs.org/">
              <a target="_blank">
                <ReactIcon />
              </a>
            </Link>
            <Link href="https://nextjs.org/">
              <a target="_blank">
                <NextJSIcon />
              </a>
            </Link>
            <Link href="https://tailwindcss.com/">
              <a target="_blank">
                <TailwindIcon />
              </a>
            </Link>
            <Link href="https://redux.js.org/">
              <a target="_blank">
                <ReduxIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
