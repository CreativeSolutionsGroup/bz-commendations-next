import { AppBar, Toolbar, IconButton, Typography, Container, Stack, Paper, Link } from "@mui/material"
import { Avatar, Box } from "@mui/material"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"

import bravo from "../assets/BZ-flag-red.png"
import zulu from "../assets/BZ-flag.png"
import bz from "../assets/BZ-letters.png"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link href={"/"} style={{display: "flex", flexDirection: "row", textDecoration: "none", color: "white"}}>
          <Stack>
            <Box><Image width={35} height={20} alt="Bravo Flag" src={bravo.src}></Image></Box>
            <Box><Image width={35} height={20} alt="Zulu Flag" src={zulu.src}></Image></Box>
          </Stack>
          <Box ml={1.5} mt={0.6}><Image width={50} height={35} alt="BZ Logo" src={bz.src} /></Box>
          <Typography ml={0.5} mt={0.6} fontFamily="fantasy" fontSize={25}>COMMENDATIONS</Typography>
        </Link>

        <Box ml="auto" display="flex">

          <IconButton>
            <Link href="/me">
              <ChatBubbleIcon color="secondary" />
            </Link>
          </IconButton>
          <Avatar sx={{ ml: 0.5 }}></Avatar>

        </Box>
      </Toolbar>

    </AppBar>
  )
}

// FIXME:
// - align-content right rather than use ml (margin-left)??
// - add imageURL for logged-in member (avatar)
// - hovering on ChatBubble should read MyCommendations