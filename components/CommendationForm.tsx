import { Button, Select, TextField, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"
import { Member } from "@prisma/client";

export const CommendationForm = ({ members }: { members: Array<Member> }) => {
    const [memberData, setToMember] = useState("");

    return (
        <Container>
            <Box>
                <form action="api/commendation" method="POST">
                    <Typography color="primary">Create Commendation</Typography>
                    <Select label="To" onChange={(e: SelectChangeEvent) => setToMember(e.target.value)}>
                        {members.map((member: {id: string; name: string}) =>
                            <MenuItem value={member.id}>
                                {member.name}
                            </MenuItem>
                        )}
                    </Select>
                    <TextField label="Message" variant="filled" name="msg"/>
                    <Button variant="contained" color="secondary" type="submit">SEND</Button>
                </form>
            </Box>
        </Container>
    )
}