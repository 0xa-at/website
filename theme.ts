import {createTheme} from '@mui/material/styles';
import {grey, orange} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: grey[900],
        },
        secondary: {
            main: orange[800],
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});

export default theme;