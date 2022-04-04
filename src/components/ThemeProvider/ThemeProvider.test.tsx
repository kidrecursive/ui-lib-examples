import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ThemeProvider from './ThemeProvider';

describe('ThemeProvider', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <></>
      </ThemeProvider>
    );
  });
});
