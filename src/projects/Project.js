import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';

import projects from './projects.json';
import ProjectCard from "./ProjectCard";


function Project(){
  return (
    <Grid container spacing={5}>
        <Container sx={{marginY: 5}}>
            {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
          ))}
        </Container>
    </Grid>
  ) 
}

export default Project