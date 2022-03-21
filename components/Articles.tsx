import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import data from '../contentrain/Blog.json';

const Articles = () => {
  return (
    <section className="site-container mt-12 sm:mt-24">
      <h2 className="col-span-full text-center text-2xl font-bold sm:text-4xl lg:col-[4/10]">
        My thougts and experiences about development ecosystem
      </h2>
      <div className="col-span-full mt-8 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-4 sm:gap-y-16 md:grid-cols-3">
        {data.map((post) => {
          const publishDate = dayjs(post.createdAt).format('DD MMM YYYY');

          return (
            <article className="space-y-1 sm:space-y-2" key={post.ID}>
              <Link href={`/blog/${post.ID}`}>
                <a>
                  {post.coverImage && (
                    <Image
                      src={require('../public/contentrain/' + post.coverImage)}
                      alt={post.title}
                      width={421}
                      height={237}
                      objectFit="cover"
                      layout="responsive"
                      placeholder="blur"
                    />
                  )}
                  <div className="mt-3 flex items-center gap-4 text-gray-400 sm:mt-6">
                    <span>{post.author}</span>
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                    <span>{publishDate}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold sm:mt-3">
                    {post.title}
                  </h2>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
