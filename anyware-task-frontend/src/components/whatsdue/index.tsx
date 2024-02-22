import React, { useEffect ,useState} from 'react';
import { Box, Stack, Typography ,Divider, Grid} from '@mui/material';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function WhatsDue() {
const [quiz, setQuiz] = useState<any>([]);

const convertdate = (date:any) => {
  const dateObject = new Date(date);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return new Intl.DateTimeFormat('en-US', options).format(dateObject);
}

  useEffect(() => {
    fetch('http://localhost:3000/quiz',{
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
  }).then(res => res.json()).then(data => {
      console.log(data);
      setQuiz(data);
  }
  )
  }
  ,[])
return(

 <Box sx={{
      background:'white',
      marginTop:5,
     padding:2,
      borderRadius:2
 }}>

<Box sx={{display:'inline-flex',width:'100%' }}>
<Typography style={{
    width:'50%',
    textAlign:'left',
    fontWeight:'bold',
    fontSize:'1.5rem'

}}>What's due</Typography>
<Typography style={{
  width:'50%',
    textAlign:'right',
    color:'green'
}}>ALL</Typography>
</Box>


<Typography style={{
  color:'gray',
    textAlign:'left'
}}>some text below announcement</Typography>


{quiz.map((item:any) => {
  return(
    <Box sx={{
      marginTop:2
  }} >
  
  
  
          <Stack spacing={2}  >
          <Box sx={{
              display:'inline-flex',
             
          }}>
          <HourglassTopTwoToneIcon sx={{
              color:'green'
          }}/>
          <Box sx={{
           
             paddingLeft:2
          }}>
              <Typography>Unit 2 quiz</Typography>
              
             
          </Box>
          </Box>
        
          </Stack>
          <Typography>Course : {item.course}</Typography>
  
          <Typography>Topic :{item.topic}</Typography>
          
  { convertdate(item.time) }
          {/* Due to : 20 Dec 2017 - 12:00 PM */}
        <Divider orientation="horizontal"  flexItem />

        <Box sx={{
      marginTop:2
  }} >
  
  
  
          <Stack spacing={2}  >
          <Box sx={{
              display:'inline-flex',
             
          }}>
          <AssignmentIcon sx={{
              color:'green'
          }}/>
          <Box sx={{
           
             paddingLeft:2
          }}>
              <Typography>assignment 12-12</Typography>
              
             
          </Box>
          </Box>
        
          </Stack>
          <Typography>Course : arabic R12</Typography>
  
          <Typography>Topic :الوحدة الثانية</Typography>
          
  { convertdate(item.time) }
          {/* Due to : 20 Dec 2017 - 12:00 PM */}
        <Divider orientation="horizontal"  flexItem />


        
  
          </Box>
        
  
          </Box>
          
          




  )
}
)}




        </Box>
)
}

