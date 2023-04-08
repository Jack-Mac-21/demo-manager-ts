import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Team } from '../types/Team';

function createTeam(
  name: string,
  wins: number,
  losses: number,
) : Team {
  return  {name, wins, losses};
}

const rows = [
  createTeam('Northwestern', 11, 2),
  createTeam('Illinois', 8, 7),
  createTeam('Wisconsin', 9, 3)

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>University</TableCell>
            <TableCell align="right"> Wins</TableCell>
            <TableCell align="right">Losses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.wins}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.wins}</TableCell>
              <TableCell align="right">{row.losses}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}