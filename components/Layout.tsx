import { createTheme } from "@mui/material";
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren<{ children: any }>) => {
    createTheme({
        palette: {
            primary: {
                main: '#f9a825'
            },
            secondary: {
                main: '#0d47a1'
            }
        }
    });
    
    return (
        <>
            <main>{children}</main>
        </>
    )
}