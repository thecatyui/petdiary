import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Head from 'next/head';

import Header from '@/components/header';
import Layout from '@/components/layout';

type Props = {
  children: React.ReactNode;
};

const App: React.FC<Props> = () => {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios
      .get('/api')
      .then((response) => {
        setHello(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Head>
        <title>Pet Diary, Top Page</title>
        <meta name='description' content='Web for Pet, Pet Diary' />
      </Head>
      <Header />
      <Layout>
        <div>Hello, {hello}</div>
      </Layout>
    </>
  );
};
export default App;
