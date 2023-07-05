import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CardMedia from  '@mui/material/CardMedia';
import section from 'data/sections.json';
import websitebanner from 'images/website_banner.png'

function Navbar(){
    return (
        <Box>
            <Toolbar>
                <CardMedia
                    component="img"
                    sx={{ display: {xs: 'none', sm: 'block'} }}
                    image={websitebanner}
                    alt=""
                />
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'center', overflowX: 'auto' }}
            >
                {section.map((section) =>(
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{p:2, flexShrink: 0}}
                    >
                        {section.title}
                    </Link>
                ))}

            </Toolbar>
        </Box>
        
    )
}

export default Navbar