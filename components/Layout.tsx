import { createTheme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren<{ children: any }>) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#005288'
            },
            secondary: {
                main: '#fdb913'
            }
        },
        /*
        typography: {
            fontFamily: "Raleway"
        }
        */
    });
    
    return (
        <ThemeProvider theme={theme}>
            <main>{children}</main>
        </ThemeProvider>
    )
}