import { Button, Select, TextField, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { Box, Container } from "@mui/system"
import { prisma } from "@prisma/client";
import React, { useState } from "react"
import post from "../pages/api/commendation";

export const CommendationForm = () => {
    const [msg, set_message] = useState("");
    const [recipient, set_recipient] = useState("");

    const update_message = (event: any) => {
       set_message(event.target.value)
    }

    const update_recipient = (event: SelectChangeEvent) => {
        set_recipient(event.target.value)
    }

    const send_commendation = () => {
        post("POST", );
    }

    return (
        <Container>
            <Box>
                <form onSubmit={send_commendation} action="/lib/api/commendation" method="POST">
                    <Typography color="primary">Create Commendation</Typography>
                    <Select label="To" onChange={update_recipient}>
                        <MenuItem>CE Members</MenuItem>
                    </Select>
                    <TextField label="Message" variant="filled" onChange={update_message}/>
                    <Button variant="contained" color="secondary" type="submit">SEND</Button>
                </form>
            </Box>
        </Container>
    )
}