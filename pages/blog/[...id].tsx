import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { BlogPost } from '../api/blog/[id]';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const PostDetail: NextPage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<BlogPost>(
    () => query.id && `/api/blog/${query.id}`,
    fetcher
  );
  const [updateDate, updateDateSet] = useState<string | null>(null);

  useEffect(() => {
    if (data?.updatedAt) {
      updateDateSet(new Date(data.updatedAt).toDateString());
    }
  }, [data]);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <article>
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <hr className="text-gray-200 my-6" />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      {updateDate && (
        <div className="text-gray-400 text-right my-6">
          <span>Last Updated: {updateDate}</span>
        </div>
      )}
    </article>
  );
};
export default PostDetail;
