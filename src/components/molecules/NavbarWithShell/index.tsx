import { Box, Container } from '@chakra-ui/react';
import * as React from 'react';
import { Content } from './Content';
import { Navbar } from './Navbar';

const NavbarWithShell = () => (
  <Box as="section" height="100vh" overflowY="auto">
    <Navbar />
    <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
      <Content />
    </Container>
  </Box>
);

export default NavbarWithShell;
