import { Button, Select, TextField, Typography, MenuItem, SelectChangeEvent, Stack, Grid, InputLabel, FormControl, Avatar } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useState } from "react"
import { Member } from "@prisma/client";
import SendIcon from "@mui/icons-material/Send"

export const CommendationForm = ({ members }: { members: Array<Member> }) => {
    const [memberData, setToMember] = useState("");

    return (
        <Box sx={{ mt: 2, mx: 63 }}>
            <form action="api/commendation" method="POST">
                <Stack spacing={1}>
                    <Typography color="primary" fontFamily={"fantasy"} fontSize={25}>Create Commendation</Typography>
                    <FormControl>
                        <InputLabel>To</InputLabel>
                        <Select label="To" name="recipient" onChange={(e: SelectChangeEvent) => setToMember(e.target.value)} value={memberData}>
                            {members.map((member: {id: string; name: string}) =>
                                <MenuItem value={member.id}>
                                    <Box sx={{ display: "flex", flexDirection: "row"}}>
                                        <Avatar></Avatar>
                                        <Typography ml={1.5} mt={1}>{member.name}</Typography>
                                        <Typography fontFamily={"fantasy"} mt={1} ml={2}>Team</Typography>
                                    </Box>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField label="Message" variant="filled" name="msg"/>
                    <Button variant="contained" color="secondary" type="submit">
                        <Typography mr={0.5} fontFamily={"fantasy"} fontSize={18}>SEND</Typography>
                        <SendIcon></SendIcon>
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}