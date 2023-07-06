import Grid  from '@mui/material/Grid';

import services from 'data/selfhostedservices.json';
import Service from "components/cards/SelfhostedServiceCard";


function SelfhostedServices({multiplier=1}){
  return (
      <Grid container 
      spacing ={{xs: 1, md: 4}} 
      justifyContent="space-around" 
      alignItems="baseline" >
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6*multiplier} md={4*multiplier} lg={4*multiplier} xl={2*multiplier}>
            <Service service={service} key={index} />
          </Grid>
          ))}
      </Grid>
  ) 
}

export default SelfhostedServices