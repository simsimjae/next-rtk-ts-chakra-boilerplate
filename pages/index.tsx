import { Button, Heading, VStack } from '@chakra-ui/core';
import React from 'react';
import useStore from '../src/hooks/useStore';
import { decrement, increment, incrementAsync } from '../src/store/slices/testSlice';

interface Props {}

const MainPage = (props: Props) => {
  const store = useStore();

  return (
    <div>
      <VStack spacing="4">
        <Heading>Count : {store.rootState.test.count}</Heading>
        <Button onClick={() => store.dispatch(increment(3))}>Increment +3</Button>
        <Button onClick={() => store.dispatch(decrement(3))}>Decrement -3</Button>
        <Button onClick={() => store.dispatch(incrementAsync(3))}>Increment +3 After 1 second</Button>
      </VStack>
    </div>
  );
};

export default MainPage;
