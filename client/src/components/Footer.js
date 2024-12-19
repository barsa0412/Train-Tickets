// // src/components/Footer.js
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Footer = () => (
//   <Box 
//     component="footer" 
//     sx={{
//       bgcolor: 'background.paper',
//       color: 'text.secondary',
//       py: 4,
//       width: '100%',
//       textAlign: 'center',
//       borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
//     }}
//   >
//     <Typography variant="h6" gutterBottom>
//       Built with ❤️ by Barsa
//     </Typography>
//     <Typography variant="body2" sx={{ mt: 2 }}>
//       © {new Date().getFullYear()} Barsa | All Rights Reserved
//     </Typography>
//   </Box>
// );

// export default Footer;
// src/components/Footer.js
// src/components/Footer.js

// src/components/Footer.js
// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bgcolor: 'primary.main',
      color: 'common.white',
      py: 4,
      px: 2,
      textAlign: 'center',
      borderTop: `4px solid ${theme => theme.palette.secondary.main}`,
    }}
  >
    <IconButton 
      sx={{ 
        color: 'secondary.main', 
        fontSize: 40, 
        mb: 1 
      }}
      disableRipple
    >
      <TrainIcon fontSize="inherit" />
    </IconButton>

    <Typography variant="h6" gutterBottom>
      Built with Train Ticket ❤️ by Barsa
    </Typography>
    

    <Typography variant="body2" sx={{ mb: 2 }}>
      Reserve your journey with ease and convenience.
    </Typography>

    <Typography variant="body2" sx={{ fontSize: 12 }}>
      © {new Date().getFullYear()} Barsa | All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;
