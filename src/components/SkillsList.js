import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SkillsList({ title, skills }) {
  return (
    <div>
      <h2>{title}</h2>
      {/* <ul className="two-columns-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul> */}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
        <Grid xs={4} md={3}>
          <Item key={index} elevation={0}>{skill}</Item> 
        </Grid>
        ))}
       
      </Grid>
    </Box>
    </div>
  );
}

export default SkillsList;
