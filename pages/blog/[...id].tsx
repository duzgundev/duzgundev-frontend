import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const PostDetail: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  return <div>Post ID: {query.id} </div>;
};
export default PostDetail;
