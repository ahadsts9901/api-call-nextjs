"use client"

import { createTheme } from '@mui/material/styles';
import { extendTheme } from '@mui/material-next/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#009688', // 500
            main: '#00796b', // 700
            dark: '#004d40', // 900
            contrastText: '#fff',
        },
        secondary: {
            light: '#455a64', // 700
            main: '#37474f', // 800
            dark: '#263238', // 900
            contrastText: '#fff',
        },
    },
})

export const md2Theme = createTheme();

export const md3Theme = extendTheme();