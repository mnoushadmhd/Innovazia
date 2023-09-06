import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as EclipseSvg } from '../images/Ellipse21.svg';
import styled from '@emotion/styled';
const MainContent = () => {
    const[bool,setBool]=useState(false)
    const handleHover=()=>{
        setBool(true)
    }
    const handleLeave=()=>{
        setBool(false)
    }
  return (
    <Box sx={{marginTop:{xs:"200px",lg:"250px"}}}>
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'row'}}}>
            <Box sx={{width:{xs:'100%',sm:'70%'},paddingRight:"15px"}} >
                <Typography variant='h4' sx={{fontWeight:'300',color:'#344097',fontSize:{xs:'24px',sm:'34px'},textAlign:{xs:"center",sm:"left"}}}>
                    Innovazia is a Digital Experience Agency that <br/> delivers <Typography sx={{position:'relative'}} variant='span'>high performance <UnderText src={require('../images/red_line.png')} /></Typography> digital experiences for <br/> <Typography sx={{color:"#7F829C"}} variant='span'>mid-range and large enterprises as well as startups.</Typography> 
                </Typography>
            </Box>
            <Box sx={{height:'150px',width:{xs:"100%",sm:'30%'},padding:"0px 15px",position:'relative',display:'flex',justifyContent:'center',cursor:'pointer',marginTop:{xs:'30px',sm:'0px'}}}>
                    <EclipseSvg onMouseOver={handleHover} onMouseLeave={handleLeave} className="eclipse_svg"/>
                    <CenterText bool={bool}>
                        Contact Us
                    </CenterText>
            </Box>
        </Box>
    </Box>
  )
}

export default MainContent
const CenterText=styled(Typography)`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#344097;
    ${({ bool }) => (bool ? 'color: #fff;' : '')}
`
const UnderText=styled('img')`
    position:absolute;
    left:0;
    bottom:-10px;
    width:100%;
    
`