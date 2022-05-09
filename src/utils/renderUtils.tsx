import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { theme } from '../styles/theme';
import { render as testRender } from '@testing-library/react';

export function render(children: ReactNode) {
  return testRender(
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg={true} />
      {children}
    </ThemeProvider>
  );
}
