import { extendTheme, theme as baseTheme } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import * as components from './components';
import * as foundations from './foundations';
import { theme as chakraProTheme } from '@chakra-ui/pro-theme';
import '@fontsource/inter/variable.css';

export const theme: Record<string, any> = extendTheme(
  {
    ...foundations,
    components: { ...components },
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  chakraProTheme,
);
