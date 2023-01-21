import { Button, Select, TextField, Typography, createTheme, MenuItem } from "@mui/material"
import { Box, Container } from "@mui/system"
import { PropsWithChildren } from "react";
import Member from "../models/Member";


export const MainPageLayout = ({ ce_members }: PropsWithChildren<{ ce_members: Array<Member> }>) => {
    createTheme({
        palette: {
            primary: {
                main: '#f9a825'
            }
        }
    });

    return (
        <Container>
            <Box>
                <Typography>Create Commendation</Typography>
                <Select label="To">
                    {ce_members.map(ce_member => {
                        return (
                            <MenuItem>
                                <Box sx={{flexDirection: "row"}}>
                                    <Typography>{ce_member.image_url}</Typography>
                                    <Typography>{ce_member.name}</Typography>
                                    <Typography>{ce_member.team}</Typography>
                                </Box>                            
                            </MenuItem>
                        )
                    })}
                </Select>
                <TextField label="Message" variant="filled" /*onChange={() => }*//>
                <Button variant="contained" disabled color="primary" /*onClick={() => }*/>SEND</Button>
            </Box>
        </Container>
    )
}