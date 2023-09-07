import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#b3a092',
    backgroundOpacity: '#e6dfdb',
    textTitle: '#252c2c',
    text: '#384343',
    border: '#4d3a2c',
    hover: '#ec7523',
  },
  spacing: value => `${value * 8}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
