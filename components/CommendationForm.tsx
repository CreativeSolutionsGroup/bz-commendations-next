import { Button, Select, TextField, Typography, createTheme, MenuItem } from "@mui/material"
import { Box, Container } from "@mui/system"


export const CommendationForm = () => {
    createTheme({
        palette: {
            primary: {
                main: '#f9a825'
            }
        }
    });

    return (
        <Container>
            <Box>
                <Typography>Create Commendation</Typography>
                <Select label="To">
                    <MenuItem>CE Members</MenuItem>
                </Select>
                <TextField label="Message" variant="filled" />
                <Button variant="contained" disabled color="primary">SEND</Button>
            </Box>
        </Container>
    )
}