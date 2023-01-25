import { Button, Select, TextField, Typography, MenuItem } from "@mui/material"
import { Box, Container } from "@mui/system"

export const CommendationForm = () => {
    return (
        <Container>
            <Box>
                <Typography color="secondary">Create Commendation</Typography>
                <Select label="To">
                    <MenuItem>CE Members</MenuItem>
                </Select>
                <TextField label="Message" variant="filled" />
                <Button variant="contained" disabled color="primary">SEND</Button>
            </Box>
        </Container>
    )
}