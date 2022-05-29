import React from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../../molecules/Navbar/Navbar';
import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLElement> {}

const Layout = (props: Props) => {
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default Layout;
