import type { NextApiRequest, NextApiResponse } from 'next';
const blog = require('../../../contentrain/Blog.json');

export interface BlogPost {
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

export interface ErrorResponse {
  message: string;
}

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<BlogPost | ErrorResponse>
) {
  const filtered = blog.filter((post: BlogPost) => post.ID === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Post with id: ${id} not found.` });
  }
}
