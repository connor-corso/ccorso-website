import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import section from 'data/sections.json'
function Navbar(){
    return (
        <Box mr={4} ml={4}>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-around', overflowX: 'auto' }}
            >
                {section.map((section) =>(
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{p:1, flexShrink: 0}}
                    >
                        {section.title}
                    </Link>
                ))}

            </Toolbar>
        </Box>
        
    )
}

export default Navbar