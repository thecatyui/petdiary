import React, { useEffect, useState } from 'react';

import axios from 'axios';

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
      <Header />
      <Layout>
        <div>Hello, {hello}</div>
      </Layout>
    </>
  );
};
export default App;
