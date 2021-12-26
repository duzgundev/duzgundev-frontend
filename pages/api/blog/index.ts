// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from './[id]';
const blog = require('../../../contentrain/Blog.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[]>
) {
  res.status(200).json(blog);
}
