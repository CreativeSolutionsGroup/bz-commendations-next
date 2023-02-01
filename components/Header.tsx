import { AppBar, Toolbar, IconButton, Typography, Container, Stack, Paper } from "@mui/material"
import { Avatar, Box } from "@mui/material"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"

import bravo from "../assets/BZ-flag-red.png"
import zulu from "../assets/BZ-flag.png"
import bz from "../assets/BZ-letters.png"

export const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Stack>
          <Box width={35} component="img" alt="Bravo Flag" src={bravo.src} mb={0.5}></Box>
          <Box width={35} component="img" alt="Zulu Flag" src={zulu.src}></Box>
        </Stack>
        <Box width={50} mx={1.5} component="img" alt="BZ Logo" src={bz.src}></Box>
        <Typography ml={0.5} fontFamily="fantasy" fontSize={25}>COMMENDATIONS</Typography>
          <IconButton>
            <ChatBubbleIcon color="secondary" sx={{ ml: 138 }}></ChatBubbleIcon>
          </IconButton>
          <Avatar sx={{ml: 0.5}}></Avatar>
      </Toolbar>
    </AppBar>
  )
}

// FIXME: 
// - align-content right rather than use ml (margin-left)
// - add imageURL for logged-in member (avatar)
// - remove spacing around App/Toolbar