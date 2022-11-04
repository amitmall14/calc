import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Matarialui =() => {







return(
    <>

    <Header/>
    
<div className="heding">
    <h1>Hello Matarialui</h1>
   
    </div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
     <Button variant="text">Text</Button>
<Button variant="contained"  color="success">Contained</Button>
<Button variant="outlined"  >Outlined</Button>
<Button variant="contained" disableElevation>Boom Guy</Button>
<Button variant="contained" size="small" disabled>Disabled</Button>
<span style={{ cursor: 'not-allowed' }}>
  <Button disabled>
    disabled
  </Button>
</span>

  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Amit (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell component="th" scope="row">
              hello
              </TableCell>
              <TableCell align="right">8</TableCell>
              <TableCell align="right">oo</TableCell>
              <TableCell align="right">hhh</TableCell>
              <TableCell align="right">pp</TableCell>
            </TableRow>
             <TableRow>
              <TableCell component="th" scope="row">
              hello
              </TableCell>
              <TableCell align="right">8</TableCell>
              <TableCell align="right">oo</TableCell>
              <TableCell align="right">hhh</TableCell>
              <TableCell align="right">pp</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

<Footer/>
</>

    )

}
export default Matarialui;