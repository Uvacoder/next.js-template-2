import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/layout';

interface PostProps {}

const Post: NextPage<PostProps> = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Layout>
      <h1>Post: {postId}</h1>
    </Layout>
  );
};

export default Post;
