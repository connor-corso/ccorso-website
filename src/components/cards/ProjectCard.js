import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

//This function takes a json array of images that contain the image path (currently only local images) and alternate text and displays them
function ProjectImages({images}){
  // look to see if images is anything or if there are any entries
  if (images == null || images.length == 0){
    return
  }
    
  
  // currently only supports one image...
  return (
    <Box pb={2}>
      <img 
        src={process.env.PUBLIC_URL + '/images/' + images[0].imageLocation} 
        alt={images[0].imageAlternateText} 
        width={images[0].imageWidth} >
      </img></Box>
  )
}

// This function takes a json array of links and link texts and will spit them out in a box
function ProjectLinks({links}){
  // look to see if there are any links or if its just an empty list
  if (links == null || links.length == 0){
    return
  }

  // currently only spits out the first link..
  return (
    <Box pb={2}>
      <Link href={links[0].link}
        pb={2}
        rel="noreferrer">
        {links[0].linkText}
      </Link>
    </Box>
  )
}

// This function takes a section (a json section) and spits out the section title, text, links and images
function ProjectSection({section}){
  return (
    <Box pl={5} pr={5}>
      <Typography variant="h6" component="h2" pb={1}>
        {section.title}
      </Typography>
      <Typography variant="body" component="p" pb={2}>
        {section.text}
      </Typography>
      <ProjectLinks links={section.links}/>
      <ProjectImages images={section.images} />
    </Box>
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
        ml={3}
        pt={2}>
        
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