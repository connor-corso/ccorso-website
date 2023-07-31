import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import services from 'data/selfhostedservices.json';
import Service from "components/cards/SelfhostedServiceCard";

function SelfhostedServices({ multiplier = 1 }) {
  return (
    <Box>

      <Typography variant="h4" component="h1" p={2}>
        This is where you can find a list of all my selfhosted services
      </Typography>
      <Grid container
        spacing={{ xs: 1, md: 4 }}
        justifyContent="space-around"
        alignItems="baseline" >
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6 * multiplier} md={4 * multiplier} lg={4 * multiplier} xl={2 * multiplier}>
            <Service service={service} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SelfhostedServices