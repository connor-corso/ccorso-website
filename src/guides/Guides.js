import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import guides from 'data/guides.json';
import ProjectCard from "components/cards/ProjectCard";


function Guides() {
  return (
    <Box>

      <Paper elevation={2}  sx={{"m": {md: 4, xs: 1}}}>

        <Typography variant="h5" component="h1" p={2}>
          This is where you can find my guides that I have written. These exist so that I don't have to find that one website that had the guide that I used last time that worked, these processes work for my setup well enough and are easy to find.
        </Typography>
      </Paper>
      <Grid container
        justifyContent="flex-start"
        alignItems="stretch"
        direction="column">


        {guides.map((guide, index) => (
          <Grid item key={index} xs={12} md={12} m={{ xs: 1, md: 4 }}>
            <ProjectCard project={guide} key={index} />
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}

export default Guides