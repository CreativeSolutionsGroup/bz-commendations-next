import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import { Avatar, Box } from "@mui/material"

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar color="secondary">
          <Box>
            <Box component="img" alt="Bravo Flag" src=""></Box>
            <Box component="img" alt="Zulu Flag" src=""></Box>
            <Box component="img" alt="BZ Logo" src=""></Box>
          </Box>
          <Typography>Commendations</Typography>
          <IconButton></IconButton>
          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}