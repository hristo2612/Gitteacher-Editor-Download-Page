import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
  return (
    <Container textAlign={"right"}>
      <Divider />      
      {children}
      <Divider />
    </Container>
  );
};

export default Layout;