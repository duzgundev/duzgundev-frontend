import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import { BlogPost } from '../pages/api/blog/[id]';
import dayjs from 'dayjs';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Articles = () => {
  const { data, error } = useSWR<BlogPost[]>('api/blog ', fetcher);

  if (error) return <ErrorMessage errorMessage={error.message} />;
  if (!data) return <Loading />;

  return (
    <section className="site-container mt-24">
      <h2 className="col-start-4 col-end-10 text-center text-4xl font-bold">
        My thougts and experiences about development ecosystem
      </h2>
      <div className="col-span-full mt-16 grid grid-cols-3 gap-4">
        {data.map((post) => {
          const publishDate = dayjs(post.createdAt).format('DD MMM YYYY');
          console.log(post.coverImage);

          return (
            <article className="space-y-2" key={post.ID}>
              <Link href={`blog/${post.ID}`}>
                <a>
                  {post.coverImage && (
                    <Image
                      src={require('../public/contentrain/' + post.coverImage)}
                      alt={post.title}
                      width={421}
                      height={237}
                      objectFit="cover"
                    />
                  )}
                  <div className="mt-6 flex items-center gap-4 text-gray-400">
                    <span>{post.author}</span>
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                    <span>{publishDate}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold">{post.title}</h2>
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
