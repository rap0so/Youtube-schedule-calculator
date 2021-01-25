import { Theme } from 'theme-ui';

const theme: Theme = {
  colors: {
    background: '#e4ebf5',
    text: '#444649',
  },
  fontSizes: [14, 16, 18, 30],
  fontWeights: {
    bold: 600,
    default: 400,
    semibold: 500,
    thin: 300,
  },
  fonts: {
    default: 'Roboto, sans-serif',
  },
  styles: {
    root: {
      '#root': {
        minHeight: '100vh',
      },
      '*': {
        color: 'text',
        transition: 'all .2s ease',
      },
      '.Toastify__toast-body, Toastify__toast-body': {
        color: '#fff',
      },
      fontFamily: 'default',
      fontWeight: 'default',
      minHeight: '100vh',
      outline: 'none',
      textDecoration: 'none',
    },
  },
  text: {
    mainHeader: {
      color: 'text',
      fontSize: '30px',
      fontWeight: 'default',
      letterSpacing: '1px',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    subTitle: {
      color: 'text',
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textAlign: 'center',
    },
  },
};

export default theme;
