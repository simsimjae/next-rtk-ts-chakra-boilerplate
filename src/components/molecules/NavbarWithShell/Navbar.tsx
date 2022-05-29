import { Avatar, Box, Button, ButtonGroup, Container, Drawer, DrawerContent, DrawerOverlay, Flex, HStack, IconButton, useBreakpointValue, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import isMobile from 'is-mobile';
import Link from 'next/link';
import * as React from 'react';
import { FiHelpCircle, FiSearch, FiSettings } from 'react-icons/fi';
import NavLink from '../../atoms/NavLink';
import { Logo } from './Logo';
import { Sidebar } from './Sidebar';
import { ToggleButton } from './ToggleButton';

export const Navbar = () => {
  const isDesktop = !isMobile();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <Container py={{ base: '3', lg: '4' }}>
        <Flex justify="space-between">
          <HStack spacing="8">
            <NavLink href="/" component={<Logo />} />
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="6">
                <Button aria-current="page" fontSize="lg">
                  웃긴 썰
                </Button>
                <Button fontSize="lg">황당 썰</Button>
                <Button fontSize="lg">19금 썰</Button>
                <Button fontSize="lg">자유 썰</Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost" spacing="1">
                <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
              </ButtonGroup>
              <Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
            </HStack>
          ) : (
            <>
              <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
