import { AppBar, Toolbar, IconButton, Typography, Container, Stack } from "@mui/material"
import { Avatar, Box } from "@mui/material"

import bravo from "../assets/BZ-flag-red.png"
import zulu from "../assets/BZ-flag.png"
import bz from "../assets/BZ-letters.png"

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box>
            <Stack>
              <Box width={35} component="img" alt="Bravo Flag" src={bravo.src} mb={0.5}></Box>
              <Box width={35} component="img" alt="Zulu Flag" src={zulu.src}></Box>
            </Stack>
          </Box>
          <Box width={50} mx={1.5} component="img" alt="BZ Logo" src={bz.src}></Box>
          <Typography ml={0.5} fontFamily={"fantasy"} fontSize={25}>COMMENDATIONS</Typography>
          <IconButton></IconButton>
          <Avatar sx={{ml: 140}}></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}