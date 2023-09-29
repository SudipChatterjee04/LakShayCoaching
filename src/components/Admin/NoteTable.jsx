import { Box, Button, CircularProgress, Modal } from '@mui/material'
import React, { useState } from 'react'
import  './Table.css'
import './Form.css'

const NoteTable = (props) => {

    const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [classValue, setClassValue] = useState('');
  const [batch, setBatch] = useState('');
  const [image, setImage] = useState('');
  const [pdf, setPdf] = useState('');
  const [course, setCourse] = useState('');
  const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [loading, setLoading] = useState(false)


  const uploadFiles = async(e ) => {
    setLoading(true)
    const {files} = e.target

    const data = new FormData();
            data.append("file" , files[0]);
            data.append("upload_preset" , "solardealership");
            data.append("cloud_name" , "dkm3nxmk5")
            await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload" , {
              method:"post",
              body:data,
            }).then((res) => res.json())
            .then((data)=> {
                if(files[0].type==='application/pdf')
                    setPdf(data.url)
                if(files[0].type === "image/jpeg" || files[0].type === "image/png")
                    setImage(data.url)
               console.log('====================================');
               console.log(data.url);
               console.log('====================================');
            })
            .catch((err) => {
              console.log(err);
            });
            setLoading(false)
  }

  const handleCustomerClose = () => setModal(false);

  const CustomerModalOpen = (id , noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse) => {
      const key = id
      setUpdateId(key);
      setTitle(noteTitle)
      setSubject(noteSubject)
      setClassValue(noteClass)
      setBatch(noteBatch)
      setImage(noteImage)
      setPdf(notePdf)
      setCourse(noteCourse)
      
      setModal(true)
  
    };
  


    const handleDelete = async(id) =>{
        const key = JSON.parse(id)
  
        try {
          const response = await fetch(`https://lakshyam.onrender.com/getnote/${key}`, {
            method: "DELETE",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          await response.json();
  
          props.setNoteList( [...props.noteList.filter(item => item._id !== id)]);
          window.location.reload(true);
        } catch (err) {
          console.log(err);
        }
      }

      const updateList = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`https://lakshyam.onrender.com/getnote/${updateId}`, {
            method: "PUT",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                noteTitle :title, 
                noteSubject :subject, 
                noteClass :classValue, 
                noteBatch :batch , 
                noteImage :image , 
                notePdf :pdf, 
                noteCourse :course
            }),
          });
      
          const resJson = await response.json();
          console.log(resJson);
            if (response.status === 201) {
              console.log("fine");
            } else {
              console.log("Some error occured");
            }
      
        } catch (err) {
          console.log(err);
        }
        window.location.reload()
      
      }

      
  return (
    <>
        <div style={{width:"85%", overflowX:"scroll"}}>
        <table >
      <tbody>
      {
        <tr>
        <th>Title</th>
        <th>Subject</th>
        <th>Class</th>
        <th>Batch</th>
        <th>Image</th>
        <th>Pdf</th>
        <th>Course</th>
        <th>Buttons</th>
      </tr>
      }
      {props.noteList.map(
        (item) => (

          <tr key={item._id}>
              <td>
              {item.noteTitle}
              </td>
              <td>
              {item.noteSubject}
              </td>
              <td>
              {item.noteClass}
              </td>
              <td>
              {item.noteBatch}
              </td>
              <td>
              {item.noteImage}
              </td>
              <td>
              {item.notePdf}
              </td>
              <td>
              {item.noteCourse}
              </td>
              <td>
                <Button variant='contained' color='error' size='small' onClick={() => handleDelete(JSON.stringify(item._id))} >
                  Delete
                </Button>
                <Button variant='contained' color='success' size='small' onClick={()=>CustomerModalOpen(
                     item._id,item.noteTitle , item.noteSubject , item.noteClass , item.noteBatch , item.noteImage , item.notePdf, item.noteCourse
                )} >
                  Update
                </Button>
              </td>
      
            </tr>
        )
      )} 
      </tbody>
    </table>
        </div>






        <Modal
        open={modal}
        onClose={handleCustomerClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"65%" ,md:400},
  height:"70vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:"scroll"
}}>
  {loading ? <div className="loader"> 
  Please Wait Your File is Uploading......
  <CircularProgress/>
  </div> : null}

<div className="form-container">
      <form onSubmit={updateList} >
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Class:</label>
          <input type="text" value={classValue} onChange={(e) => setClassValue(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Batch:</label>
          <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={uploadFiles} />
        </div>

        <div className="form-group">
          <label>PDF:</label>
          <input type="file" accept=".pdf" onChange={uploadFiles} />
        </div>

        <div className="form-group">
          <label>Course:</label>
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

        </Box>
      </Modal>

    </>
  )
}

export default NoteTable