import { Button, Text } from '@chakra-ui/core';
import React from 'react';
import useStore from '../src/hooks/useStore';
import { decrement, increment } from '../src/store/slices/testSlice';

interface Props {}

const MainPage = (props: Props) => {
  const store = useStore();

  return (
    <div>
      <Text>Count : {store.rootState.test.count}</Text>
      <Button onClick={() => store.dispatch(increment(3))}>Increment +3</Button>
      <Button onClick={() => store.dispatch(decrement(3))}>Decrement -3</Button>
    </div>
  );
};

export default MainPage;
