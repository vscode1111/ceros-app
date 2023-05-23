import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import BigNumber from 'bignumber.js';
import packageJSON from '../package.json';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'modules/common';
import { store } from 'store';
import { useInitializeLocale } from './modules/common';
import { Routes } from './Routes';
import { Layout } from 'modules/layout';

BigNumber.config({ EXPONENTIAL_AT: [-100, 100], DECIMAL_PLACES: 18 });

export function App(): JSX.Element {
  useInitializeLocale();
  return (
    <Provider store={store}>
      <Router basename={packageJSON.homepage}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
