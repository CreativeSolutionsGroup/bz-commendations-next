import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import { Avatar, Box } from "@mui/material"

import bravo from "../assets/BZ-flag-red.png"
import zulu from "../assets/BZ-flag.png"
import bz from "../assets/BZ-letters.png"

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Box width={50} component="img" alt="Bravo Flag" src={bravo.src}></Box>
            <Box width={50} component="img" alt="Zulu Flag" src={zulu.src}></Box>
            <Box width={50} ml={1} component="img" alt="BZ Logo" src={bz.src}></Box>
          </Box>
          <Typography>Commendations</Typography>
          <IconButton></IconButton>
          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}