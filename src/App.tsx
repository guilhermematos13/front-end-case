import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: defaultTheme['primary-500'],
          },
        }}
      />
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
