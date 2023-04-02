import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Header from '@/components/header';
import Image from '@/components/image';
import Layout from '@/components/layout';
import Login from '@/components/login';

const LoginPage: React.FC = () => {
  const { t } = useTranslation('login');
  return (
    <>
      <Head>
        <title>Pet Diary, Top Page</title>
        <meta name='description' content='Web for Pet, Pet Diary' />
      </Head>
      <Header />
      <Layout leftSidebar={undefined} rightSidebar={undefined}>
        <Login
          logo={<Image src={'/logos/dummy-logo.png'} alt={''} />}
          submitText={t('submit')}
          cancelText={t('cancel')}
          idText={t('placeHolderId')}
          pwText={t('placeHolderPw')}
        />
      </Layout>
    </>
  );
};

export default LoginPage;

export const getStaticProps: GetStaticProps = async ({ locale = 'ja' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});
