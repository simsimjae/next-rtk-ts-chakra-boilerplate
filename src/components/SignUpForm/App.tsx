import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { GoogleIcon } from './ProviderIcons'

export const App = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Stack spacing="3" textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>Create an account</Heading>
          <Text color="muted">Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
            <FormHelperText color="muted">At least 8 characters long</FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Button variant="primary">Create account</Button>
          <Button variant="secondary" leftIcon={<GoogleIcon boxSize="5" />} iconSpacing="3">
            Sign up with Google
          </Button>
        </Stack>
      </Stack>
      <HStack justify="center" spacing="1">
        <Text fontSize="sm" color="muted">
          Already have an account?
        </Text>
        <Button variant="link" colorScheme="teal" size="sm">
          Log in
        </Button>
      </HStack>
    </Stack>
  </Container>
)
