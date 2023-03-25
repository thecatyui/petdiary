import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import Head from 'next/head';

import { fetchUsers } from '@/apis/user';
import Header from '@/components/header';
import Layout from '@/components/layout';

type Props = {
  children: React.ReactNode;
};

type User = { id: number; name: string; username: string; email: string; address: [] };

const App: React.FC<Props> = () => {
  const [hello, setHello] = useState('');
  const result = useQuery('users', fetchUsers);
  console.log(result);

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
        <ul>
          {result.data?.map((data: User, index: number) => (
            <li key={index}>{data.name}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
};
export default App;
