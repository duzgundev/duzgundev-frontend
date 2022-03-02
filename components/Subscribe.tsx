const Subscribe = () => {
  return (
    <section className="my-8 w-full bg-[#F1F5F9] sm:my-16">
      <div className="site-container">
        <div className="site-section flex flex-col items-center justify-between text-center md:flex-row md:items-start md:gap-4 md:text-left">
          <div className="mt-10">
            <h2 className="text-3xl font-semibold">Subscribe your mail!</h2>
            <p className="pt-2">
              If you want to read my all blog posts, join my newsletter for
              latest articles.
            </p>
          </div>
          <iframe src="https://duzgun.substack.com/embed" width="350px" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
