import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import './Admin.css'

const Admin = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350, 
        height:200,
        margin:"auto",
        p: 4,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        border: "2px solid white",
        borderRadius:5,
        backgroundColor:'rgba(22,34,57,1)'
      };

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
        <div style={{backgroundColor: 'rgba(22,34,57,0.95)' , height : "100%", width:"100%" , display:"flex" , flexDirection:"column", justifyContent:"center" , gap:30, paddingTop:110 ,  paddingBottom:110}}>

        <div className='admin__row' style={{display:"flex" , justifyContent:"space-evenly"  }}>
            <div  className='admin__card' style={{height:200 , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold" ,  display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen}>
            Super Admin
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen}>
            Office 1
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen}>
            Office 2
            </div>
        </div>
        <div className='admin__row' style={{display:"flex" , justifyContent:"space-evenly"}}>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }}>
            Student
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }}>
            Teacher
            </div>
        </div>

        </div>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input type="text" placeholder='UserName' style={{height:30}} />
          <input type="text" placeholder='Password' style={{height:30}} />
          <button style={{backgroundColor:"blue" , height:30 , width:70, color:"white" , border:"none" , borderRadius:3}}>
            Login
          </button>
        </Box>
      </Modal>

    </>
  )
}

export default Admin