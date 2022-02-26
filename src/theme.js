import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ["Spartan", "sans-serif", "Roboto"].join(","),
        h1: {
            fontFamily: ["Proxima Nova", "Arial"].join(","),
        },
        fontSize: 15,
    },
    palette: {
        //primary for text
        primary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#373838",
        },

        // text: {
        //   light: '#373838',
        //   dark: '#F9f7f1',
        // },
        background: {
            default: "hsl(180, 52%, 96%)",
        },
    },
    breakpoints:{
        values:{
            xs:0,
            sm:600,
            md:750,
            lg:1100
        }
    }
});

export default theme