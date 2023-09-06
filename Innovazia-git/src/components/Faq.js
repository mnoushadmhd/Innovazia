import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary sx={{padding:"10px"}}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#fff'
      : '#fff',
  flexDirection: 'row',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faq() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [panel1,setPanel1]=React.useState('false')
  const [panel2,setPanel2]=React.useState('false')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if(panel === 'panel1'){
        setPanel1(!panel1)
        setPanel2(true)
    }
    if(panel === 'panel2'){
        setPanel2(!panel2)
        setPanel1(false)
    }
  };

  return (
    <Box sx={{marginTop:{xs:"80px",lg:"100px"}}}>
        <Typography sx={{fontSize:{xs:"40px",sm:"60px"},fontWeight:'300'}}>FAQ</Typography>
        <Box sx={{marginTop:{xs:"30px",lg:"50px"}}}>
            <Accordion sx={{backgroundColor:"#fff",border:'none'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary  expandIcon={panel1?<RemoveIcon sx={{ fontSize: {xs:"20px",sm:"30px",color:"#344097"}}} />:<AddIcon sx={{ fontSize: {xs:"20px",sm:"30px"},color:"#344097" }} />} 
                aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{fontSize:{xs:"20px",sm:"30px",lg:"36px"},paddingRight:"20px"}}>Possible to integrate existing DMS or CRM to Innovazia's digital showroom platform?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:"#fff",borderTop:'none',borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}} >
                <Typography sx={{fontSize:{xs:"16px",sm:"26px",lg:"32px"},color:"#7F829C"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#fff",border:'none'}}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={panel2?<AddIcon sx={{ fontSize: {xs:"20px",sm:"30px"},color:"#344097" }} />: <RemoveIcon sx={{ fontSize: {xs:"20px",sm:"30px"},color:"#344097" }} />} 
                aria-controls="panel2d-content" id="panel2d-header">
                <Typography sx={{fontSize:{xs:"20px",sm:"30px",lg:"36px"},paddingRight:"20px"}}>Do you provide dealership CRM as well? </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:"#fff",borderTop:'none',borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}}>
                <Typography sx={{fontSize:{xs:"16px",sm:"26px",lg:"32px"},color:"#7F829C"}}> 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Box>
  );
}