import React from 'react';
import { NextPage } from 'next';

import Layout from '@components/layout';

interface AboutProps {}

const About: NextPage<AboutProps> = () => {
  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
};

export default About;
