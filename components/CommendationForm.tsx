import { Button, Select, TextField, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"

export const CommendationForm = () => {
    const [member, set_member] = useState("");
    
    const select_member = (event: SelectChangeEvent) => {
        set_member(event.target.value)
    }

    return (
        <Container>
            <Box>
                <form action="api/commendation" method="POST">
                    <Typography color="primary">Create Commendation</Typography>
                    <Select label="To" name="reciever" onChange={select_member} value={member}>
                        <MenuItem value={"Kobe, the RIZZLY bear"}>Kobe, the RIZZLY bear</MenuItem>
                    </Select>
                    <TextField label="Message" variant="filled" name="msg"/>
                    <Button variant="contained" color="secondary" type="submit">SEND</Button>
                </form>
            </Box>
        </Container>
    )
}