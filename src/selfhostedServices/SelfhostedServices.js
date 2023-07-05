import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import services from 'data/selfhostedservices.json';
import Service from "components/cards/SelfhostedServiceCard";


function SelfhostedServices(){
  return (
    <Grid container spacing ={2} >
      <Grid item xs={12} md={8}>
        <Grid container justifyContent="center" spacing={2} >
          {services.map((service, index) => (
            <Grid key={index} p={1}>
              <Service service={service} key={index} />
            </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  ) 
}

export default SelfhostedServices