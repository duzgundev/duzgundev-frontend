const Subscribe = () => {
  return (
    <section className="my-16 w-full bg-[#F1F5F9]">
      <div className="site-container">
        <div className="site-section flex items-start justify-between">
          <div className="mt-10">
            <h2 className="text-3xl font-semibold">Subscribe your mail!</h2>
            <p className="pt-2">
              If you want to read my all blog posts, join my newsletter for
              latest articles.
            </p>
          </div>
          <iframe src="https://duzgun.substack.com/embed" width="400px" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
