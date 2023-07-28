import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';

import guides from 'data/guides.json';
import ProjectCard from "components/cards/ProjectCard";


function Guides(){
  return (
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
  ) 
}

export default Guides