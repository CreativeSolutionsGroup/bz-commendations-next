import { Button, Fab, Select, TextField, Typography, MenuItem, SelectChangeEvent, Stack, InputLabel, FormControl, Avatar, Paper, Autocomplete, AutocompleteChangeReason, InputAdornment } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { Member, Team } from "@prisma/client";
import SendIcon from "@mui/icons-material/Send"
import GroupsIcon from '@mui/icons-material/Groups';
import { Raleway } from "@next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900" });

export const TeamCommendationForm = ({ teams }: { teams: Array<Team & { members: Array<Member> }> }) => {
  const [sending, setSending] = useState(false);
  const [teamData, setToTeam] = useState("");

  const getTeam = (teamId: string): Team & { members: Array<Member> } | null => {
    return teams.find((currentTeam) => {
      if (currentTeam.id === teamId) {
        return true;
      }
      return false;
    })!;
  };

  return (
    <Paper sx={{ mt: 4, mx: "auto", maxWidth: "30rem", p: 2 }}>
      <form onSubmit={() => setSending(true)} action="api/commendation" method="POST">
        <Stack spacing={1}>
          <Typography color="primary" className={raleway.className} fontSize={25} fontWeight={900}>Create Commendation</Typography>
          <TextField sx={{ display: "none" }} hidden name="recipient"
            value={getTeam(teamData)?.members.map((currentTeam) => {
              return currentTeam.email;
            }).join(",")}
          />
          <Autocomplete
            onChange={(_e, v) => setToTeam(v?.id ?? "")}
            renderOption={(props, team, state) =>
              <MenuItem key={state.index} {...props} sx={{ width: "100%" }}>
                <Box display="flex" flexDirection="row" width="100%">
                  <Avatar>
                    <Image fill src={team.imageURL ?? "https://via.placeholder.com/25?text=" + encodeURI(team.name)} alt="" style={{ objectFit: "contain" }} />
                  </Avatar>
                  <Typography ml={1.5} mt={1}>{team.name}</Typography>
                </Box>
              </MenuItem>}
            getOptionLabel={(team) => team.name}
            options={teams} groupBy={(team) => team.name.charAt(0)}
            renderInput={(params) => <TextField {...params}
              label="To"
              required />} />
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
