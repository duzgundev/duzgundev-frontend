import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '../public/arrow.svg';

const About = () => {
  return (
    <section className="site-container my-16">
      <div className="col-start-2 col-end-7">
        <h1 className="text-4xl font-bold">Hi! I&apos;m Mert</h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
          vitae blandit arcu mattis malesuada faucibus mi platea euismod. Et
          lorem enim blandit in dui cum est dictumst. Et ut magna eget montes,
          et et convallis. Fringilla facilisis vitae vitae massa. Fermentum
          vulputate sagittis senectus eget aliquam.
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
      <div className="col-start-8 col-end-12">
        <Image
          src="/profile-picture.png"
          alt="Mert Düzgün"
          width={422}
          height={500}
        />
      </div>
    </section>
  );
};

export default About;
