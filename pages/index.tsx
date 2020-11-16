import { Button, Code, Heading, VStack } from '@chakra-ui/core';
import React, { useRef } from 'react';
import useStore from '../src/hooks/useStore';
import { incrementAsync } from '../src/store/slices/test/testActions';
import { increment, decrement, bookAdded, bookUpdated, booksReceived } from '../src/store/slices/test/testSlice';
import { booksSelectors } from '../src/store/store';

interface Props {}

const MainPage = (props: Props) => {
  const store = useStore();
  const id = useRef(0);

  return (
    <div>
      <VStack spacing="4">
        <Heading>Count : {store.rootState.test.count}</Heading>
        <Button onClick={() => store.dispatch(increment(3))}>Increment +3</Button>
        <Button onClick={() => store.dispatch(decrement(3))}>Decrement -3</Button>
        <Button onClick={() => store.dispatch(incrementAsync(3))}>Increment +3 After 1 second</Button>
        <Heading>Books</Heading>
        <Code>{JSON.stringify(booksSelectors.selectEntities(store.rootState))}</Code>
        <Button onClick={() => store.dispatch(bookAdded({ id: id.current++, title: 'New Book' }))}>Add New Book</Button>
        <Button onClick={() => store.dispatch(bookUpdated({ id: id.current - 1, changes: { title: 'Updated Book' } }))}>Update Last Book</Button>
        <Button
          onClick={() =>
            store.dispatch(
              booksReceived([
                { id: id.current++, title: 'New Book 1' },
                { id: id.current++, title: 'New Book 2' },
                { id: id.current++, title: 'New Book 3' },
              ]),
            )
          }
        >
          set books from api response
        </Button>
      </VStack>
    </div>
  );
};

export default MainPage;
