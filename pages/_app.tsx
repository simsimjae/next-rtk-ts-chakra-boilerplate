import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import { theme } from '../src/theme';
import { Provider } from 'react-redux';
import store from '../src/store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CSSReset />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
