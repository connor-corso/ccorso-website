import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CardMedia from  '@mui/material/CardMedia';
import pages from 'data/pages.json';


// The Navbar will have a banner
function Navbar(){
    return (
        <Box>
            
            <CardMedia //we need to put the cardmedia outside of a toolbar so that it covers the whole viewport
                component="img" 
                sx={{ display: {xs: 'none', sm: 'block'} }}
                image ={process.env.PUBLIC_URL + '/images/website_banner.png'}
                alt=""/>

            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'center', overflowX: 'auto' }}
            >
                {pages.map((page) =>(
                    <Link
                        color="inherit"
                        noWrap
                        key={page.title}
                        variant="body2"
                        href={page.url}
                        sx={{p:2, flexShrink: 0}}
                    >
                        {page.title}
                    </Link>
                ))}

            </Toolbar>
        </Box>
        
    )
}

export default Navbar