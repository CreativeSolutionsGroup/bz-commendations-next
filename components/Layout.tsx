import { createTheme, ThemeProvider } from "@mui/material";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react"
import { Header } from "./Header";

import { Raleway, Roboto } from '@next/font/google'

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

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
    });
    
    return (
        <ThemeProvider theme={theme}>
            <div className={roboto.className}>

            <Header />
            <main>{children}</main>
            </div>
        </ThemeProvider>
    )
}