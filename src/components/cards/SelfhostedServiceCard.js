import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import {Link as ExternalLink } from 'react-router-dom';

function Service({service}){
    return (
        <Paper elevation={5}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
            }}>

                <Typography 
                variant="h4" 
                component="h2"
                pb={2}
                > 
                    {service.title} 
                </Typography>

                <Typography> 
                    {service.description} 
                </Typography>

                <a href={`https://${service.link}`} target="_blank" rel="noreferrer">

                
                    <img 
                      src={process.env.PUBLIC_URL + '/images/' + service.imageSource} 
                      alt="link to service" 
                      width={120} >
                    </img>
                
                </a>
            </Container>
        </Paper>
    )
}

export default Service