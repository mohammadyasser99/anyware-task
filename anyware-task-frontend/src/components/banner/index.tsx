import { Box, Paper, Typography,Grid ,Button ,Toolbar} from "@mui/material";


 export default function Banner() {
     return (
      
      // <Box component="main" sx={{ flexGrow: 3, p: 8 ,height:'auto'
      // }}>
  
   
        <Grid  container
        direction="row"
   
        spacing={4} 
        sx={{
         width:'100%',
          p:4,
          height:'auto',
          flexGrow: 3,
          background:'white',
    marginTop:'50px',
    borderRadius:'10px',
    marginLeft:'5px',
   
        }} >
       
          <Grid item xs={8} >
            <Typography variant="h5" sx={{
                 background: 'linear-gradient(to right, rgb(32,101,130), rgb(255,0,0))',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                fontWeight:'bold',
                fontSize:'2rem',
                paddingTop:'10px',
               
                marginTop:'10px'
            }} noWrap>EXAMS TIME</Typography>
            <Typography variant="body1" sx={{
               
            }} >
                here we are , are you ready to fight ? Don't worry , we prepared some tips to be ready for your exams
                </Typography>
                <Typography variant="body1" sx={{
                    fontStyle:'italic',
                   color:'gray',
                     paddingTop:'10px',
                    
                

                }} >
                    "Nothing happens until something moves." - Albert Einstein
                    </Typography>
                    <Button variant="contained" sx={{
                        background: 'rgb(65 ,144 , 145)',
                        color:'white',
                        fontWeight:'bold',
                      
                      //  margin:'20px 20px 30px 40px',
                       
                    
                    }}>view exams tips</Button>
          </Grid>

          <Grid item xs="auto" >
            <img src="../pic1.png" alt="description"  style={{
               height:'100%',
             maxWidth:'300px',
               
            }}
             />
          </Grid>
        </Grid>
       
     
     )
 }