import Image from 'next/image';
import { useState, useEffect } from 'react';
import posts from '../../contentrain/Blog.json';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface Post {
  createdAt: number;
  content: string;
  coverImage: string;
  author: string;
  title: string;
  ID: string;
  tags?: string[];
  excerpt: string;
  updatedAt?: number;
}

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  const [updateDate, updateDateSet] = useState<string | null>(null);

  useEffect(() => {
    if (post.updatedAt) {
      updateDateSet(new Date(post.updatedAt).toDateString());
    }
  }, [post]);

  return (
    <article className="site-container">
      {post.coverImage && (
        <div className="col-span-full mb-6 md:col-start-3 md:col-end-11">
          <Image
            src={require('../../public/contentrain/' + post.coverImage)}
            alt={post.title}
            layout="responsive"
          />
        </div>
      )}
      <div className="site-section">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <hr className="my-6 text-gray-200" />
        <div className="prose">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="markdown-body"
          >
            {post.content}
          </ReactMarkdown>
        </div>
        {updateDate && (
          <div className="my-6 text-right text-gray-400">
            <span>Last Updated: {updateDate}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.ID },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post: Post = posts.filter((post) => post.ID === params.id)[0];

  return { props: { post } };
}
export default PostDetail;
