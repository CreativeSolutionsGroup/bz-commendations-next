import { Button, Select, TextField, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { Box, Container } from "@mui/system"
import { Member } from "@prisma/client";
import { useState } from "react"

export const CommendationForm = ({ members }: { members: Array<Member> }) => {
    const [data, setData] = useState("");
    return (
        <Container>
            <Box>
                <Typography color="primary">Create Commendation</Typography>
                <Select label="To">
                    <MenuItem>
                        <Select onChange={(e: SelectChangeEvent) => setData(e.target.value)}>
                            {members.map((member: {id: string; name: string}) =>
                                <option value={member.id}>
                                    {member.name}
                                </option>
                            )}
                        </Select>
                    </MenuItem>
                </Select>
                <TextField label="Message" variant="filled" />
                <Button variant="contained" disabled color="secondary">SEND</Button>
            </Box>
        </Container>
    )
}