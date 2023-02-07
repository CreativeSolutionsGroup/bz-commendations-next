import { Button, Fab, Select, TextField, Typography, MenuItem, SelectChangeEvent, Stack, InputLabel, FormControl, Avatar, Paper, Autocomplete } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { Member } from "@prisma/client";
import SendIcon from "@mui/icons-material/Send"
import GroupsIcon from '@mui/icons-material/Groups';

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
                            {members.map((member: {id: string; name: string }, i) =>
                                <MenuItem key={i} value={member.id}>
                                    <Box sx={{ display: "flex", flexDirection: "row" }} width={"100%"}>
                                        <Avatar>{}</Avatar>
                                        <Typography ml={1.5} mt={1}>{member.name}</Typography>
                                        <Box flexGrow={10}></Box>
                                        <Typography ml={1.5} mt={1.5} variant="caption" color="CaptionText" align="right">CE Team</Typography>
                                    </Box>
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField label="Message" variant="filled" name="msg" minRows={8} multiline={true}/>
                    <Button variant="contained" color="secondary" type="submit" endIcon={<SendIcon />} sx={{fontFamily: "fantasy", fontSize: 18, textTransform: "uppercase", minWidth: "fit-content"}}>
                        Send
                    </Button>
                </Stack>
            </form>
            <Fab color="secondary" aria-label="teams" sx={{position: "absolute", bottom: 16, right: 16}}>
                <GroupsIcon />
            </Fab>
        </Paper>
    )
}

// FIXME:
// - tranform Select to AutoComplete?
// - right-align CE member teams
// - add avatar images {member.imageURL}
// - disable button (funtionality: neither TextField nor Select can be null)