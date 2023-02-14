import { Button, Fab, Select, TextField, Typography, MenuItem, SelectChangeEvent, Stack, InputLabel, FormControl, Avatar, Paper } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { Member, Team } from "@prisma/client";
import SendIcon from "@mui/icons-material/Send"
import GroupsIcon from '@mui/icons-material/Groups';
import { Raleway } from "@next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900" });

export const CommendationForm = ({ members }: { members: Array<Member & { team: Array<Team> }> }) => {
  const [sending, setSending] = useState(false);
  const [memberData, setToMember] = useState("");

  return (
    <Paper sx={{ mt: 4, mx: "auto", maxWidth: "30rem", p: 2 }}>
      <form onSubmit={() => setSending(true)} action="api/commendation" method="POST">
        <Stack spacing={1}>
          <Typography color="primary" className={raleway.className} fontSize={25} fontWeight={900}>Create Commendation</Typography>
          <FormControl required>
            <InputLabel>To</InputLabel>
            <Select label="To" name="recipient" onChange={(e: SelectChangeEvent) => setToMember(e.target.value)} value={memberData} >
              {members.map((member: { id: string; name: string; imageURL: string | null; team: Array<Team> }, i) =>
                <MenuItem key={i} value={member.id}>
                  <Box sx={{ display: "flex", flexDirection: "row" }} width={"100%"}>
                    <Avatar>
                      <Image fill src={member.imageURL ?? "https://via.placeholder.com/25?text="} alt="" />
                    </Avatar>
                    <Typography ml={1.5} mt={1}>{member.name}</Typography>
                    <Box flexGrow={1}></Box>
                    <Typography ml={1.5} mt={1.5} variant="caption" color="CaptionText" align="right" maxWidth='10rem' overflow="hidden">
                      {member.team.map((team) => team.name).join(", ")}
                    </Typography>
                  </Box>
                </MenuItem>
              )}
            </Select>
          </FormControl>
          <TextField required label="Message" variant="filled" name="msg" minRows={8} multiline={true} />
          <Button disabled={sending} variant="contained" color="secondary" type="submit" endIcon={<SendIcon />} sx={{ fontSize: 18, textTransform: "uppercase", minWidth: "fit-content" }}>
            Send
          </Button>
        </Stack>
      </form>
      <Fab color="secondary" aria-label="teams" sx={{ position: "absolute", bottom: 16, right: 16 }}>
        <GroupsIcon />
      </Fab>
    </Paper>
  )
}

// FIXME:
// - tranform Select to AutoComplete
// - right-align CE member teams
// - add avatar images {member.imageURL}
// - disable button (funtionality: neither TextField nor Select can be null)?