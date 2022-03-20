import ReactIcon from '../public/react.svg';
import NextJSIcon from '../public/nextjs.svg';
import TailwindIcon from '../public/tailwindcss.svg';
import ReduxIcon from '../public/redux.svg';

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
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
              <ReactIcon />
            </a>
            <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
              <NextJSIcon />
            </a>
            <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
              <TailwindIcon />
            </a>
            <a href="https://redux.js.org/" rel="noreferrer" target="_blank">
              <ReduxIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
