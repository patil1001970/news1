import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Mycard from './mycard';

import MyJson from './mysample.json';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedColumns() {


  const updateNews= async ()=>{

  }

  const {articles}=MyJson;
  return (
    <Box sx={{  minHeight: 253 }}>
    <Grid container sx={{p:5}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {articles.map((height, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <Mycard key={index} article={height}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
