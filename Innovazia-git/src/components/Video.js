import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as EclipseSvg } from '../images/Ellipse21.svg';
import { styled } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'90%',sm:'600px'},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Video() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[bool,setBool]= React.useState(false)
  const handleHover=()=>{
      setBool(true)
  }
  const handleLeave=()=>{
      setBool(false)
  }

  return (
    <div>
      <Box  sx={{marginTop:{xs:"80px",lg:"100px"}}}>
            <Box sx={{height:{xs:"250px",sm:"550px"},position:'relative'}}>
                <img style={{height:"100%",width:"100%"}} src={require('../images/Video.png')}/>
                <Box sx={{position:'absolute',left:"20px",bottom:"20px"}}>
                    <Box sx={{display:"flex",columnGap:"20px",alignItems:"center"}}>
                        <Box>
                            <img style={{cursor:"pointer"}} onClick={handleOpen} src={require('../images/play.png')}/>
                        </Box>
                        <Box>
                            <Typography sx={{color:"#fff",fontSize:{sm:"30px"}}}>
                                See what<br></br>
                                Delmonte saying<br></br>
                                about us<br></br>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

      </Box>
      <Box sx={{marginTop:{xs:"50px",lg:"100px"}}}>
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'row'}}}>
            <Box sx={{width:{xs:'100%',sm:'70%'},paddingRight:"15px"}} >
                <Typography variant='h4' sx={{fontWeight:'300',color:'#344097',fontSize:{xs:'30px',sm:'45px',lg:'60px'},textAlign:{xs:"center",sm:"left"}}}>
                     Realize Your Digital Vision.
                </Typography>
                <Typography variant='h4' sx={{fontWeight:'300',color:'#7F829C',fontSize:{xs:'30px',sm:'45px',lg:'60px'},textAlign:{xs:"center",sm:"left"}}}>
                     Let's Talk
                </Typography>
            </Box>
            <Box sx={{height:'150px',width:{xs:"100%",sm:'30%'},position:'relative',display:'flex',justifyContent:{sm:'flex-end',xs:'center'},cursor:'pointer',marginTop:{xs:'30px',sm:'0px'}}}>
                <Box sx={{height:'150px',position:'relative',display:'flex',justifyContent:'center',cursor:'pointer',marginTop:{xs:'30px',sm:'0px'}}}>
                    <EclipseSvg onMouseOver={handleHover} onMouseLeave={handleLeave} className="eclipse_svg"/>
                    <CenterText bool={bool}>
                        Contact Us
                    </CenterText>
                </Box>
            </Box>
        </Box>
    </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                    <Box onClick={handleClose} sx={{cursor:"pointer"}}>
                        <CloseIcon/>
                    </Box>
            </Box>
          <Typography sx={{textAlign:"center"}} id="modal-modal-title" variant="h6" component="h2">
            See What Delmonte Says
          </Typography>
          <video controls width="100%" height="360">
            <source src={require('../images/sample.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
        </Box>
      </Modal>
    </div>
  );
}
const CenterText=styled(Typography)`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#344097;
    white-space:nowrap;
    ${({ bool }) => (bool ? 'color: #fff;' : '')}
`
const UnderText=styled('img')`
    position:absolute;
    left:0;
    bottom:-10px;
    width:100%;
    
`