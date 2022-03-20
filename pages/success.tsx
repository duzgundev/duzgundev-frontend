import Link from 'next/link';

const Success = () => {
  return (
    <section className="site-container">
      <div className="site-section flex h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Form successfully submitted!</h1>
        <Link href="/">
          <a className="mt-4 text-xl font-semibold underline">
            Go back to home page
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Success;
