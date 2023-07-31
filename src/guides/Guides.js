import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import guides from 'data/guides.json';
import ProjectCard from "components/cards/ProjectCard";


function Guides(){
  return (
    <Box>
        <Typography variant="h4" component="h1" p={2}>
            This is where you can find my guides that I have written
        </Typography>
        <Grid container 
        justifyContent="flex-start"
        alignItems="stretch"
        direction="column">


            {guides.map((guide, index) => (
              <Grid item key={index} xs={12} md={12} m={{xs: 1, md: 4}}>
                <ProjectCard project={guide} key={index} />
              </Grid>
            ))}

        </Grid>
    </Box>
  ) 
}

export default Guides