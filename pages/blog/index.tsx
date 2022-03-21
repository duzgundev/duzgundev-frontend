import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../contentrain/Blog.json';
import dayjs from 'dayjs';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mert Düzgün | Blog</title>
      </Head>
      <div className="site-container">
        <div className="site-section">
          {data.map((post) => {
            const publishDate = dayjs(post.createdAt).format('DD MMM YYYY');

            return (
              <Link href={`/blog/${post.ID}`} key={post.ID}>
                <a>
                  <article className="my-6 flex flex-col items-center gap-4 md:flex-row md:items-stretch md:justify-between">
                    <Image
                      src={require('../../public/contentrain/' +
                        post.coverImage)}
                      alt={post.title}
                      width={421}
                      height={237}
                      objectFit="cover"
                      layout="intrinsic"
                      placeholder="blur"
                    />
                    <div className="flex basis-3/5 flex-col">
                      <h2 className="text-3xl font-bold">{post.title}</h2>
                      <p className="mt-4">{post.excerpt}</p>
                      <div className="my-4 flex items-center gap-4 text-gray-400 md:mt-auto md:ml-auto">
                        <span>{post.author}</span>
                        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                        <span>{publishDate}</span>
                      </div>
                    </div>
                  </article>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
