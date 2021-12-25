import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const Blog: NextPage = () => {
  const { data, error } = useSWR('api/blog ', fetcher);

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {data.map((post: any) => {
        const publishDate = new Date(post.createdAt).toDateString();

        return (
          <article key={post.ID}>
            <h2 className="text-xl font-bold">
              <Link href={`blog/${post.ID}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="text-gray-400">
              <span>{publishDate}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Blog;
