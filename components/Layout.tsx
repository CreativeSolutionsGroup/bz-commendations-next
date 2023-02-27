import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { PropsWithChildren } from "react"
import { Header } from "./Header";

import { Roboto } from '@next/font/google'
import theme from "../config/theme";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const Layout = ({ children }: PropsWithChildren<{ children: any }>) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={roboto.className}>
        <Header image="" isAdmin />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}