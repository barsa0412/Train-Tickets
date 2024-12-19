// src/theme/vibrantSunset.js
import { createTheme } from '@mui/material/styles';

const vibrantSunsetColors = {
  base: '#FFEDD5',
  surface: '#FFD1A9',
  overlay: '#FFAB76',
  muted: '#FF826E',
  subtle: '#FFD9C0',
  text: '#3D3D3D',
  love: '#E63946',
  gold: '#FFB703',
  rose: '#FB8500',
  dusk: '#8D0801',
  twilight: '#FF5A36',
  ember: '#D72638',
  highlightLow: '#FFADAD',
  highlightMed: '#FF7B54',
  highlightHigh: '#D61C4E',
};

const vibrantSunsetTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Raleway:wght@300;500;700&display=swap');
    `,
  },
  palette: {
    mode: 'light',
    background: {
      default: vibrantSunsetColors.base,
      paper: vibrantSunsetColors.surface,
    },
    primary: {
      main: vibrantSunsetColors.twilight,
    },
    secondary: {
      main: vibrantSunsetColors.rose,
    },
    error: {
      main: vibrantSunsetColors.love,
    },
    warning: {
      main: vibrantSunsetColors.gold,
    },
    info: {
      main: vibrantSunsetColors.dusk,
    },
    success: {
      main: vibrantSunsetColors.highlightMed,
    },
    text: {
      primary: vibrantSunsetColors.text,
      secondary: vibrantSunsetColors.muted,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
    h1: {
      fontFamily: '"Raleway", serif',
    },
    h2: {
      fontFamily: '"Raleway", serif',
    },
    h3: {
      fontFamily: '"Raleway", serif',
    },
    h4: {
      fontFamily: '"Raleway", serif',
    },
    h5: {
      fontFamily: '"Raleway", serif',
    },
    h6: {
      fontFamily: '"Raleway", serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: vibrantSunsetColors.overlay,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: '12px',
          fontWeight: 'bold',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: vibrantSunsetColors.muted,
          borderRadius: '16px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: vibrantSunsetColors.text,
        },
      },
    },
  },
});

export default vibrantSunsetTheme;
