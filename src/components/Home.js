import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <Header as="h2">
        <a href="/gitteacher-editor-installer.exe" download={true}>Download Editor</a>
      </Header>
    </Layout>
  );
};

export default Home;