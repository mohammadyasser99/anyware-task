import { Box, Typography ,Grid,Paper, Stack, Divider,Avatar,Toolbar} from "@mui/material";
import { useEffect, useState } from "react";





export default function Announcement() {
   const [announcement, setAnnouncement] = useState<any>([]);
    useEffect(() => {
        fetch('http://localhost:3000/announcement',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            setAnnouncement(data);
        }
        )
        }
        ,[])
    return(
 
        <Box  sx={{
             background:'white',
             marginTop:5,
            padding:2,
                borderRadius:2
        }}>
     

<Box sx={{display:'inline-flex',width:'100%' }}>
<Typography style={{
    width:'50%',
    textAlign:'left'
}}>Announcement</Typography>
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

{announcement.map((item:any) => { 
    return(
        <Stack spacing={2} direction='row' divider ={<Divider orientation="vertical"  flexItem />}>
        <Box sx={{

            display:'inline-flex'
        }}>
        <Avatar>{item.user.charAt(0)}</Avatar> 
        <Box sx={{
         
           paddingLeft:2
        }}>
            <Typography>{item.user}</Typography>
            <Typography>{item.course}</Typography>
           
        </Box>
        </Box>
        <Box>
           {item.summary}
        </Box>
        </Stack>
    )
}
)}
    {/* // <Stack spacing={2} direction='row' divider ={<Divider orientation="vertical"  flexItem />}>
    //     <Box sx={{
    //         display:'inline-flex'
    //     }}>
    //     <Avatar>H</Avatar> 
    //     <Box sx={{
         
    //        paddingLeft:2
    //     }}>
    //         <Typography>hagten</Typography>
    //         <Typography>hagten</Typography>
           
    //     </Box>
    //     </Box>
    //     <Box>
    //        hey my name is hagten , i am a developer, 
    //     </Box>
    //     </Stack> */}



</Box>
    )

}