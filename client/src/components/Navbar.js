// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography } from '@mui/material';

// const Navbar = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//       <Toolbar>
//         <Typography 
//           variant="h6" 
//           component={Link} 
//           to="/" 
//           sx={{ 
//             flexGrow: 1, 
//             color: 'primary.main',
//             textDecoration: 'none',
//             '&:hover': {
//               opacity: 0.8,
//               cursor: 'pointer'
//             }
//           }}
//         >
//           Ticket Management Project
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
// import TrainIcon from '@mui/icons-material/Train'; // You can use this train icon for simplicity or use a custom logo

// const Navbar = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={2} sx={{ width: '100%', bgcolor: '#f3f4f6' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {/* Logo/Icon */}
//           <IconButton component={Link} to="/" sx={{ mr: 2 }}>
//             <TrainIcon sx={{ color: '#1976d2', fontSize: 30 }} />
//           </IconButton>
//           <Typography 
//             variant="h6" 
//             component={Link} 
//             to="/" 
//             sx={{ 
//               textDecoration: 'none', 
//               fontWeight: 600, 
//               color: '#1976d2',
//               '&:hover': {
//                 opacity: 0.8,
//                 cursor: 'pointer'
//               }
//             }}
//           >
//             Train Ticket Reservation
//           </Typography>
//         </Box>
         
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled Logo component with animation
const Logo = styled('img')({
  height: '40px',
  marginRight: '10px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
});

// Styled Navbar Typography for hover animation
const NavbarText = styled(Typography)({
  flexGrow: 1,
  color: '#3f51b5',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease',
  },
});

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Placeholder for Logo, replace with your logo file */}
          <Logo src="https://via.placeholder.com/40" alt="Train Logo" />
          <NavbarText variant="h6" component={Link} to="/">
            Train Ticket Reservation
          </NavbarText>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
