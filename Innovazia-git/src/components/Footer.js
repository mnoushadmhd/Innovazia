import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Grid container spacing={2} sx={{marginTop:{xs:"80px",lg:"100px"},borderTop:'1px solid rgba(0, 0, 0, 0.12)'}}>
        <Grid item xs={12} sm={4}>
            <Box sx={{textAlign:{xs:"center",sm:"unset"}}}>
                <Typography sx={{fontSize:{sm:'24px',xs:"24px",lg:'30px'},fontWeight:"300"}}>info@innovazia.com</Typography>
                <Box sx={{display:"flex",columnGap:"10px",flexDirection:{xs:"column",lg:"row"},alignItems:{xs:"center",sm:"flex-start"}}}>
                    <Box sx={{display:"flex"}}>
                        <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",color:"#808080"}}>Tel :</Typography>
                        <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",color:"#263D4D"}}>+971 43966233</Typography>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",color:"#808080"}}>Fax :</Typography>
                        <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",color:"#263D4D"}}>+971 43966233</Typography>
                    </Box>
                </Box>  
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",color:"#7F829C",textAlign:"center"}}>
                    Innovazia Technologies LLC,<br></br>
                    Office Number #415, Hamsah Comples, Karama<br></br>
                    Opposite: Ministry of External Affairs,<br></br>
                    P O Box 28023 - Dubai, UAE <br></br>
                    Internet city, Dubai, UAE<br></br>
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:{xs:"center",sm:"flex-end"}}}>
                <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",textAlign:{xs:"center",sm:"right"}}}>
                    Privacy Policy
                </Typography>
                <Typography sx={{fontSize:{lg:"16px",sm:'14px',xs:"12px"},fontWeight:"300",color:"#7F829C",textAlign:{xs:"center",sm:"right"}}}>
                    &#169;2021 Innovazia Technologies LLC.
                </Typography>
            </Box>
        </Grid>

    </Grid>
  )
}

export default Footer