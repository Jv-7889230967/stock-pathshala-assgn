import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height:400,
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function Details({open,handleClose,title,description,link}) {
let filtereddescription=description.replace("<p>"," ").replace("</p><p>"," ");
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            
            <Typography id="transition-modal-title" variant="h4" component="h2">
              Title-
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}              
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {filtereddescription}
            </Typography>
            <Button sx={{marginTop:'30px'}} variant='contained' color='success'><a style={{color:'white',textDecoration:'none',fontWeight:'bold',fontSize:'15px'}} href={link}>Visit Class <ArrowOutwardIcon fontSize='small'/></a></Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
