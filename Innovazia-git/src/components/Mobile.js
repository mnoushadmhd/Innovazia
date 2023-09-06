import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
const Mobile = () => {
  return (
    <Grid container spacing={5} sx={{marginTop:{xs:"30px",lg:"100px"}}}>
    <Grid item xs={12} sm={8}>
        <Box sx={{position:'relative',height:{xs:"300px",sm:"400px",lg:"500px"},backgroundColor:"#028080",padding:{xs:"60px 40px"}}}>
            <img style={{width:"100%",position:'absolute',bottom:'0',left:'0'}} src={require('../images/companies/mob-bg.png')}/> 
            <Box sx={{width:{xs:"120px",sm:"200px"},position:'absolute',bottom:'-6px',left:'50%',transform:'translate(-50%)'}}>
                <img style={{width:"100%"}}  src={require('../images/companies/mob.png')}/>
            </Box>
             
        </Box>
    </Grid>
    <Grid item xs={12} sm={4} sx={{display:"flex",alignItems:'center',justifyContent:{xs:'center'}}}>
        <Box sx={{paddingLeft:{xs:'0px',lg:"40px"}}}>
            <Box sx={{display:"flex",flexDirection:"column",rowGap:{xs:"30px",sm:"50px",lg:"80px"}}}>
                <Typography sx={{fontSize:{xs:"16px"},textDecoration:"underline"}}>Excellence Driving</Typography>
                <Typography  sx={{fontSize:{xs:"30px",sm:"30px",lg:"40px"},fontWeight:'300'}}>Learn Driving. <br></br>The Digital <br></br>Way.</Typography>
                <Box sx={{display:"flex",flexWrap:'wrap',columnGap:{xs:"10px"},width:"200px"}}>
                    <Typography sx={{fontSize:{xs:"14px"}}}>#NMC</Typography>
                    <Typography sx={{fontSize:{xs:"14px"}}}>#Healthcare</Typography>
                    <Typography sx={{fontSize:{xs:"14px"}}}>#ollco</Typography>
                </Box>
            </Box>
        </Box>
    </Grid>
</Grid>
  )
}

export default Mobile