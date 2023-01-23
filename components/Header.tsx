import { createTheme, AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import { Avatar, Box } from "@mui/material"

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box>
          <Box component="img"></Box>
          <Box component="img"></Box>
          <Box component="img"></Box>
        </Box>
        <Typography>Commendations</Typography>
        <IconButton></IconButton>
        <Avatar></Avatar>
      </Toolbar>
    </AppBar>
  )
}