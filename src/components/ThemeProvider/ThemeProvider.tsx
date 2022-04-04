import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { theme as defaultTheme } from '../../theme';

interface Props {
  theme?: any;
  children: JSX.Element;
}

export default function ThemeProvider({ theme, children }: Props): JSX.Element {
  return (
    <MUIThemeProvider theme={theme || defaultTheme}>
      {children}
    </MUIThemeProvider>
  );
}
