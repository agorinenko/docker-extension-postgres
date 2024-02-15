import React from 'react';
import { Typography } from '@mui/material';


export function App() {
  return (
    <>
      <Typography variant="h3">
          The PostgreSQL object-relational database system provides reliability and data integrity.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        - POSTGRES_PASSWORD=postgres <br/>
        - POSTGRES_USER=postgres<br/>
        - POSTGRES_DB=postgres<br/>
      </Typography>
    </>
  );
}
