import { Button, Select, TextField, Typography, MenuItem } from "@mui/material"
import { Box, Container } from "@mui/system"
import { useState } from "react"
import { getServerSideProps } from "../pages/api/commendation"

export const CommendationForm = async () => {
    const [data, setData] = useState("");
    const members = await getServerSideProps();
    return (
        <Container>
            <Box>
                <Typography color="primary">Create Commendation</Typography>
                <Select label="To">
                    <MenuItem>
                        <Select onInput={e => setData("hello")}>
                            {members.members.map((member: {id: string; name: string}) =>
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