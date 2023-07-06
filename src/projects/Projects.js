import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';

import projects from 'data/projects.json';
import ProjectCard from "components/cards/ProjectCard";


function Projects(){
  return (
    <Grid container 
    justifyContent="flex-start"
    alignItems="stretch"
    direction="column">

      
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={12} m={{xs: 1, md: 4}}>
            <ProjectCard project={project} key={index} />
          </Grid>
        ))}
      
    </Grid>
  ) 
}

export default Projects