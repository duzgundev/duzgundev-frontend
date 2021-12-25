import type { NextPage } from 'next';
import useSWR from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Blog: NextPage = () => {
  const { data, error } = useSWR('api/blog ', fetcher);

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((post: any) => {
        return (
          <article className="prose" key={post.ID}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        );
      })}
    </div>
  );
};

export default Blog;
