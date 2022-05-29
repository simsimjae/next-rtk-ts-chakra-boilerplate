import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import { theme } from '../theme';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <CSSReset />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
