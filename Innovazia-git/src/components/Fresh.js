import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
const Fresh = () => {
  return (
    <Grid container spacing={5} sx={{marginTop:{xs:"30px",lg:"100px"}}}>
        <Grid item xs={12} sm={8}>
            <Box sx={{height:{xs:"300px",sm:"400px",lg:"500px"}}}>
                <img style={{width:"100%",height:"100%"}} src={require('../images/companies/delmonte.png')}/> 
            </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{display:"flex",alignItems:'center',justifyContent:{xs:'center'}}}>
            <Box sx={{paddingLeft:{xs:'0px',lg:"40px"}}}>
                <Box sx={{display:"flex",flexDirection:"column",rowGap:{xs:"30px",sm:"70px",lg:"100px"}}}>
                    <Typography sx={{fontSize:{xs:"16px"},textDecoration:"underline"}}>Delmonte</Typography>
                    <Typography  sx={{fontSize:{xs:"30px",sm:"30px",lg:"40px"},fontWeight:'300'}}>Delivered <br></br> Fresh</Typography>
                    <Box sx={{display:"flex",flexWrap:'wrap',columnGap:{xs:"10px"},width:"200px"}}>
                        <Typography sx={{fontSize:{xs:"14px"}}}>#Delmonte</Typography>
                        <Typography sx={{fontSize:{xs:"14px"}}}>#E-commerce</Typography>
                        <Typography sx={{fontSize:{xs:"14px"}}}>#oOrjit</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Fresh