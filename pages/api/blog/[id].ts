import type { NextApiRequest, NextApiResponse } from 'next';
const blog = require('../../../contentrain/Blog.json');

export interface BlogPost {
  createdAt: number;
  content: string;
  cover: string;
  title: string;
  ID: string;
  tags: any[];
  excerpt: string;
  updatedAt?: number;
}

type Error = {
  message: string;
};

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<BlogPost | Error>
) {
  const filtered = blog.filter((post: BlogPost) => post.ID === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Post with id: ${id} not found.` });
  }
}
