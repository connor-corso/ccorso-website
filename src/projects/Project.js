import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';

import projects from 'data/projects.json';
import ProjectCard from "components/cards/ProjectCard";


function Project(){
  return (
    <Grid>
      <Box margin={4}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Box>
    </Grid>
  ) 
}

export default Project