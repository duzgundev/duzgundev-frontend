import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { BlogPost } from '../api/blog/[id]';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

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

  if (error) return <ErrorMessage errorMessage={error.message} />;
  if (!data) return <Loading />;

  return (
    <article>
      {data.cover && (
        <div className="site-4xl-container mb-6">
          <Image
            src={require('../../public/contentrain/' + data.cover)}
            alt={data.title}
          />
        </div>
      )}
      <div className="site-container">
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
      </div>
    </article>
  );
};
export default PostDetail;
