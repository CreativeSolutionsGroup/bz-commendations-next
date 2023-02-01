import { Button, Select, TextField, Typography, MenuItem, SelectChangeEvent, Stack, InputLabel, FormControl, Avatar, Paper, Autocomplete } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { Member } from "@prisma/client";
import SendIcon from "@mui/icons-material/Send"

export const CommendationForm = ({ members }: { members: Array<Member> }) => {
    const [memberData, setToMember] = useState("");

    return (
        <Paper sx={{ mt: 4, mx: 63, p: 2 }}>
            <form action="api/commendation" method="POST">
                <Stack spacing={1}>
                    <Typography color="primary" fontFamily="fantasy" fontSize={25}>Create Commendation</Typography>
                    <FormControl>
                        <InputLabel>To</InputLabel>
                        <Select label="To" name="recipient" onChange={(e: SelectChangeEvent) => setToMember(e.target.value)} value={memberData} >
                            {members.map((member: {id: string; name: string }) =>
                                <MenuItem value={member.id}>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Avatar>{}</Avatar>
                                        <Typography ml={1.5} mt={1}>{member.name}</Typography>
                                        <Typography ml={1.5} mt={1.5} variant="caption" color="CaptionText">CE Team</Typography>
                                    </Box>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField label="Message" variant="filled" name="msg" minRows={8} multiline={true}/>
                    <Button variant="contained" color="secondary" type="submit">
                        <Typography mr={0.5} mt={0.25} fontFamily="fantasy" fontSize={18}>SEND</Typography>
                        <SendIcon fontSize="small"></SendIcon>
                    </Button>
                </Stack>
            </form>
        </Paper>
    )
}

// FIXME:
// - tranform Select to AutoComplete?
// - right-align CE member teams
// - add avatar images {member.imageURL}
// - disable button (funtionality: neither TextField nor Select can be null)