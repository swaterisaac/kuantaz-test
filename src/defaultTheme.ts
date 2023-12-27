import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        palette: {
            primary: {
                main: string;
                light: string;
                dark: string;
            }
            secondary: {
                main: string;
                light: string;
                dark: string;
            }
            background: {
                default: string;
            },
        };
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#52B788',
            light: '#B7E4C7',
            dark: '#40916C',
        },
        secondary: {
            main: '#081C15',
            dark: '#081C15',
            light: '#2D6A4F',
        },
        background: {
            default: '#ececec',
        },
    },
});