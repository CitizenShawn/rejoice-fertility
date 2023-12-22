/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Seo } from '../components/Seo';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Seo />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);
export default NotFoundPage;
