import Grid  from '@mui/material/Grid';

import services from 'data/selfhostedservices.json';
import Service from "components/cards/SelfhostedServiceCard";


function SelfhostedServices(){
  return (
      <Grid container 
      spacing ={{xs: 1, md: 4}} 
      justifyContent="space-around" 
      alignItems="baseline" >
        {services.map((service, index) => (
          <Grid item key={index} xs={12} md={2} >
            <Service service={service} key={index} />
          </Grid>
          ))}
      </Grid>
  ) 
}

export default SelfhostedServices