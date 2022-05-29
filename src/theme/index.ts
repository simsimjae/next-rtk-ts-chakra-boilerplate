import { extendTheme } from '@chakra-ui/core';

export const theme = extendTheme({
  fonts: {
    body: 'Noto Sans KR, Roboto, sans-serif',
    heading: 'Do Hyeon, Roboto, sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    kakao: '#f7e600',
    myBlue: '#1c53f4',
    myGray: '#f2f5fa',
  },
  shadows: {
    box: '0 1px 6px rgba(0,0,0,0.05), 0 1px 6px rgba(0,0,0,0.12);',
  },
  sizes: {
    xs: '1.7rem',
  },
  styles: {
    global: {
      'html, body, #__next': {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
    },
  },
});
