import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '../public/arrow.svg';
import profilePicture from '../public/profile-picture.jpeg';

const About = () => {
  return (
    <section className="site-container my-10 sm:my-16">
      <div className="col-span-full flex flex-col items-center  sm:col-[2/7] sm:items-start ">
        <h1 className="text-center text-4xl font-bold sm:text-left">
          Hi! I&apos;m Mert
        </h1>
        <p className="mt-6">
          I&apos;m a frontend developer based in Istanbul, Turkey. Currently
          working as a Lead Frontend Developer at{' '}
          <a
            href="https://www.hubtic.com"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Hubtic
          </a>
          . I define myself as a curious and patient learner. I think everything
          gets better when they&apos;re shared and that&apos;s what I&apos;m
          doing here.
        </p>
        <Link href="/blog">
          <a>
            <button className="mt-8 flex gap-2 bg-gray-800 py-3 px-8 font-semibold text-white">
              <span>Read My Blog</span>
              <ArrowIcon />
            </button>
          </a>
        </Link>
      </div>
      <div className="col-span-full sm:col-[8/12]">
        <Image
          src={profilePicture}
          alt="Mert Düzgün"
          width={422}
          height={500}
          objectFit="cover"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default About;
