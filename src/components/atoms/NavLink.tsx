import NextLink, { LinkProps } from 'next/link';
import { Link } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props extends LinkProps {
  component: ReactNode;
}

const NavLink = (props: Props) => {
  return (
    <NextLink href={props.href} passHref>
      <Link>{props.component}</Link>
    </NextLink>
  );
};

export default NavLink;
