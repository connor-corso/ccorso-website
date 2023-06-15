import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function ProjectSection({section}){
  console.log(section)
  return (
    <>
      <Typography variant="h6" component="h2">
        {section.title}
      </Typography>
      <Typography variant="body" component="p">
        {section.text}
      </Typography>
    </>
  )
}

function ProjectCard({project}){
  
  return (
    <Box>
    
      <Paper elevation={5}>
        <Typography 
        variant="h4" 
        component="h2" 
        marginTop={5}
        ml={3}>

          {project.title} 
        </Typography>
        {project.sections.map((section, index) => (
                <ProjectSection section={section} key={index} />
          ))}
      </Paper>
    </Box>
  )
}

export default ProjectCard