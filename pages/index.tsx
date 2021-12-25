import type { NextPage } from 'next';
import useSWR from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data: userData, error: userError } = useSWR('api/hello ', fetcher);
  const { data, error } = useSWR('api/blog ', fetcher);

  if (error || userError) return <div>Failed to load user</div>;
  if (!data || !userData) return <div>Loading...</div>;

  return (
    <div>
      <div>{userData.name}</div>
      {data.map((post: any) => {
        return (
          <div key={post.ID}>
            <h1>{post.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
