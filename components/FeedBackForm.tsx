const FeedBackForm = () => {
  return (
    <section className="site-container mt-24">
      <div className="col-start-2 col-end-7">
        <h2 className="text-4xl font-bold">Let&apos;s Talk</h2>
        <p className="mt-6">
          Don&apos;t be shy, I&apos;m always open to new ideas and
          collaborations.
        </p>
      </div>
      <form
        data-netlify="true"
        className="col-start-8 col-end-12 border bg-white p-8"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="mt-1 border p-3"
            type="text"
            name="name"
            placeholder="Jack Ellison"
            required
          />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="mt-1 border p-3"
            type="email"
            name="email"
            placeholder="j.ellison@example.com"
            required
          />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="name">Message</label>
          <textarea
            className="mt-1 border p-3"
            name="message"
            placeholder="Need some help"
            required
          />
        </div>
        <button className="mt-8 w-full bg-[#1E293B] py-3 px-6 text-white">
          Send
        </button>
      </form>
    </section>
  );
};

export default FeedBackForm;
