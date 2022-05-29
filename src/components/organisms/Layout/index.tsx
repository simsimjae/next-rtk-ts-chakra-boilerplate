import React from 'react';
import { Box } from '@chakra-ui/react';
import NavbarWithShell from '../../molecules/NavbarWithShell';
import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLElement> {}

const Layout = (props: Props) => {
  return (
    <Box>
      <NavbarWithShell />
    </Box>
  );
};

export default Layout;
