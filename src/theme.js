import { createTheme } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: grey[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

export default theme;