import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import projects from 'data/projects.json';
import ProjectCard from "components/cards/ProjectCard";

function Projects() {
  return (
    <Box>
      <Typography variant="h4" component="h1" p={2}>
        This is where you can find a log of my projects
      </Typography>

      <Grid container
        justifyContent="flex-start"
        alignItems="stretch"
        direction="column">


        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={12} m={{ xs: 1, md: 4 }}>
            <ProjectCard project={project} key={index} />
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}

export default Projects