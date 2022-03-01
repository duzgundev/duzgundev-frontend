import ReactIcon from '../public/react.svg';
import NextJSIcon from '../public/nextjs.svg';
import TailwindIcon from '../public/tailwindcss.svg';
import ReduxIcon from '../public/redux.svg';

const MyStack = () => {
  return (
    <section className="w-full bg-[#F1F5F9] py-8">
      <div className="site-container">
        <div className="site-section flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">My Stack</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center gap-9">
            <ReactIcon />
            <NextJSIcon />
            <TailwindIcon />
            <ReduxIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
