// src/theme/trainTicketTheme.js
import { createTheme } from '@mui/material/styles';

const trainTicketTheme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8', // Bright blue for primary actions
    },
    secondary: {
      main: '#ff9100', // Orange for secondary actions
    },
    background: {
      default: '#f4f6f8', // Light gray for page background
      paper: '#ffffff', // White for cards and dialogs
    },
    text: {
      primary: '#212121', // Dark gray for primary text
      secondary: '#757575', // Light gray for secondary text
    },
    success: {
      main: '#4caf50', // Green for success indicators
    },
    error: {
      main: '#f44336', // Red for error indicators
    },
    info: {
      main: '#0288d1', // Blue for informational highlights
    },
    warning: {
      main: '#ffa000', // Amber for warnings
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a73e8',
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default trainTicketTheme;
