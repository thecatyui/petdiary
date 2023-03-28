import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { fetchUsers } from '@/apis/user';
import Header from '@/components/header';
import Layout from '@/components/layout';
import SideMenu from '@/components/side-menu';
import SubMenu from '@/components/sub-menu';

type Props = {
  children: React.ReactNode;
};

type User = { id: number; name: string; username: string; email: string; address: [] };

const App: React.FC<Props> = () => {
  const [hello, setHello] = useState('');
  const result = useQuery('users', fetchUsers);
  const { t } = useTranslation('login');
  const { locale, locales, defaultLocale } = useRouter();

  useEffect(() => {
    axios
      .get('/api')
      .then((response) => {
        setHello(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Pet Diary, Top Page</title>
        <meta name='description' content='Web for Pet, Pet Diary' />
      </Head>
      <Header />
      <Layout leftSidebar={<SideMenu></SideMenu>} rightSidebar={<SubMenu></SubMenu>}>
        <div>Hello, {hello}</div>
        <div>locale: {locale}</div>
        <div>locales: {locales}</div>
        <div>defaultLocale: {defaultLocale}</div>
        <div>{t('LOGIN')}</div>
        <ul>
          {result.data?.map((data: User, index: number) => (
            <li key={index}>{data.name}</li>
          ))}
        </ul>
      </Layout>
    </React.Fragment>
  );
};
export default App;

export const getStaticProps: GetStaticProps = async ({ locale = 'ja' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});
