import { teams } from "data/teams";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddGameButton from "components/AddGameButton";


export default function GameSubmissionForm() {
    const [team, setTeam] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTeam(event.target.value);
    };
    return(
        <>
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Team 1</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={team}
                    label="Team"
                    onChange={handleChange}
                >
                    {/* filling the dropdown with the teams */}
                    {teams.map((team, idx) => (
                        <MenuItem value={idx}> {team} </MenuItem>
                    ))}
    
                </Select>
                <FormHelperText>Select a team</FormHelperText>
                </FormControl>
                <h1> VS. </h1>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Team 2</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={team}
                    label="Team"
                    onChange={handleChange}
                >
                    {teams.map((team,idx) => (
                        <MenuItem value={idx}> {team} </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Select a team</FormHelperText>
                </FormControl>
                
            </div>
            <AddGameButton />
        </>
    )
}