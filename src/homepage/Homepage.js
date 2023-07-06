import Grid  from '@mui/material/Grid';

import SelfhostedServices from 'selfhostedServices/SelfhostedServices';
import Projects from 'projects/Projects';


function Homepage(){
  return (
      <Grid container 
      spacing ={2} 
      justifyContent="center" 
      alignItems="flex-start" >
        <Grid item xs={12} md={6}>
            <Projects />
        </Grid>

        <Grid item xs={12} md={6}>
            <SelfhostedServices multiplier={2}/>
        </Grid>
      </Grid>
  ) 
}

export default Homepage