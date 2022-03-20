import { format } from 'path';

const FeedBackForm = () => {
  return (
    <section className="site-container md:mt-24" id="contact">
      <div className="col-span-full text-center md:col-start-2 md:col-end-7 md:text-left">
        <h2 className="text-4xl font-bold">Let&apos;s Talk</h2>
        <p className="mt-6">
          Don&apos;t be shy, I&apos;m always open to new ideas and
          collaborations.
        </p>
      </div>
      <form
        name="contact"
        data-netlify="true"
        method="POST"
        action="/success"
        className="col-span-full mt-6 border bg-white p-8 sm:col-start-3 sm:col-end-11 md:col-start-8 md:col-end-12 md:mt-0"
      >
        <input type="hidden" name="form-name" value="contact" />
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
        <button
          type="submit"
          className="mt-8 w-full bg-[#1E293B] py-3 px-6 text-white"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default FeedBackForm;
