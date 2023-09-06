import { Box, Card, Container, Link, Toolbar, Typography } from '@mui/material';
import React from 'react'
import bannerbg from '../images/banner/Bannerbg.png'; 
import bannerdef from '../images/banner/banner-details.png'
import styled from '@emotion/styled';
const Banner = () => {
  return (
        <Box sx={{display:'flex',width:'100%',flexDirection:{xs:"column-reverse",sm:"row"}}} >
        
            <Box sx={{width:{sm:'50%',xs:"100"},position:'relative',padding:'0px 24px'}}> 
            <Toolbar  />       
                <ModalBox>
                <Typography paragraph={true}  sx={{fontSize:'12px',color:' #333E95'}}>WE MAKE IT HAPPEN</Typography>
                <Typography variant='h1'  sx={{fontSize:{lg:'60px',sm:'40px',xs:'30px'},color:' #333E95',marginTop:{xs:'50px',sm:'100px'}}}>Learn Driving.</Typography>
                <Typography variant='h1'  sx={{fontSize:{lg:'60px',sm:'40px',xs:'30px'},color:' #7F829C'}}>The Digital Way.</Typography>
                <Link underline='none' sx={{display:'flex',columnGap:'15px',alignItems:'center',marginTop:{xs:'50px',sm:'150px'},cursor:'pointer'}}>
                    <Typography sx={{fontSize:'14px',color:' #333E95'}}>More projects</Typography>
                    <img src={require('../images/banner/Arrow1.png')} />
                </Link>
                </ModalBox>
            </Box>

            <BannerBox component="main" sx={{ p: 3 }}>
            <BannerSub>
                <img style={{width:'100%'}} src={require('../images/banner/spiral.png')}/>
                <CardOne variant="outlined">
                  <Box sx={{width:{lg:'220px',xs:'100px',sm:'170px'}}}>
                    <img style={{width:'100%'}} src={require('../images/banner/car.png')} />
                  </Box>
                <Line1/>
                <Box sx={{display:'flex',columnGap:'5px'}}>
                    <Eclipse/>
                    <Eclipse/>
                    <Eclipse/>
                </Box>
                <AbsoluteBox>
                    <RelativeBox>
                    <Card11>                     
                          <img style={{width:'100%'}} src={require('../images/banner/card11.png')}/>
                    </Card11>
                    </RelativeBox>
                </AbsoluteBox>
                </CardOne>
                <CardTwo>
                  <Box sx={{width:{lg:'220px',xs:'100px',sm:'170px'}}}>
                     <img style={{width:'100%'}} src={require('../images/banner/user.png')} />
                  </Box>
                <Line1/>
                <Line2/>
                <AbsoluteBox>
                    <RelativeBox>
                    <Card21>
                        <img src={require('../images/banner/card21.png')}/>
                    </Card21>
                    <Card22>
                        <img src={require('../images/banner/card22.png')}/>
                    </Card22>
                    </RelativeBox>
                </AbsoluteBox>
                </CardTwo>
            </BannerSub>

            </BannerBox>

        </Box>
  )
}


export default Banner

const BannerBox = styled(Box)`
  height:700px;
  width:50%;
  background: url(${bannerdef}) no-repeat right bottom ,url(${bannerbg}) no-repeat right bottom;
  background-position:cover;
  background-size: 100% 60%, 100% 100%;
  position:relative;
  @media(max-width:1200px){
    height:600px;
  }
  @media(max-width:600px){
    height:300px;
    width:100%;
  }
`;
const BannerSub = styled(Box)`
  height:400px;
  width:400px;
  position:absolute;
  bottom:0;
  left:-100px;
  @media(max-width:1200px){
    width:300px;
    height:300px;
    left:-50px;
    bottom:50px;
  }
  @media(max-width:600px){
    height:300px;
    width:100%;
    left:unset;
    right:0;
    width:250px;
    bottom:-50px;
  }
  
`;
const CardOne = styled(Card)`
  height:auto;
  position:absolute;
  top:0px;
  left:50px;
  width:auto;
  padding:20px 10px 10px 10px;
  overflow:visible;
  @media(max-width:600px){
    left:0px;
  }
`;
const CardTwo = styled(Card)`
  height:auto;
  position:absolute;
  bottom:-140px;
  right:-70px;
  width:auto;
  padding:10px 10px 10px 10px;
  overflow:visible;
  @media(max-width:1200px){
    right:-50px;
  }
  @media(max-width:600px){
    right:30px;
    bottom:0px;
  }
`;
const Line1= styled('div')`
  height:4px;
  width:70%;
  background: #CED8DE;
  margin-bottom:7px;
  
`
const Line2= styled('div')`
  height:4px;
  width:40%;
  background: #CED8DE;
  
`
const Eclipse=styled('div')`
  width: 17px;
  height: 17px;
  background-color:#CED8DE;
  border-radius:50%;
  margin-right:3px;
`
const AbsoluteBox=styled('div')`
  height: 100%;
  width:100%;
  position:absolute;
  top:0;
`
const RelativeBox=styled('div')`
  height: 100%;
  width:100%;
  position:relative;
`
const Card11=styled('div')`
  border-radius: 4px;
  background: #1A5854;
  padding:10px;
  position:absolute;
  top: -30px;
  left: -40px;
  width:65px;
  height:65px;
  display:flex;
  align-items:center;
  justify-content:center;
  @media(max-width:600px){
    width:45px;
    height:45px;
  }
  
`
const Card21=styled('div')`
  border-radius: 4px;
  background: #59C0BA;
  padding:10px;
  position:absolute;
  top: -30px;
  right: -30px;
  width:65px;
  height:65px;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width: 1200px) {
   right:10px;
   top: -50px;
  }
  @media(max-width:600px){
    width:45px;
    height:45px;
    top:-40px;
  }
  
`
const Card22=styled('div')`
  border-radius: 4px;
  background: #59C0BA;
  padding:10px;
  position:absolute;
  bottom: 40px;
  left: -50px;
  width:65px;
  height:65px;
  display:flex;
  align-items:center;
  justify-content:center;
  @media(max-width:600px){
    width:45px;
    height:45px;
    bottom: 20px;
  }
`
const ModalBox=styled(Box)`
  position:absolute;
  top:35%;
`