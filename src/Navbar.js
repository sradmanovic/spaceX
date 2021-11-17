import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';




const Navbar = () => {
    return (
        <Box className="navbar" sx={{ flexGrow: 1 }}>
            <AppBar position="static"  >
                <Toolbar>
                    <FormControlLabel color="inherit" control={<Switch defaultChecked color="default" />} label="" />

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;