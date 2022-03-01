import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import data from '../../contentrain/Blog.json';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mert Düzgün | Blog</title>
      </Head>
      <div className="site-container space-y-6">
        <div className="site-section">
          {data.map((post) => {
            const publishDate = new Date(post.createdAt).toDateString();

            return (
              <article className="space-y-2" key={post.ID}>
                <h2 className="text-xl font-bold">
                  <Link href={`/blog/${post.ID}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
                <p>{post.excerpt}</p>
                <div className="text-gray-400">
                  <span>{publishDate}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
