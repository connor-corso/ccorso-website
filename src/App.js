import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Project from './projects/Project'



export default function App() {
  return (
    <Grid container spacing={5}>
      <Container sx={{marginY: 5}}>
        <Project />
      </Container>

    </Grid>
    
  );
}
