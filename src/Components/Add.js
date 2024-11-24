import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../Service/AllApi';


function Add({ setAddVideoResponse }) {

  const [videoDetails, setVideoDetails] = useState({ caption: "", imageUrl: "", youtubeUrl: "" })
  console.log('add video details: ', videoDetails)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false)

  const getEmbedUrl = (link) => {
    if (link.includes("v=")) {
      const videoId = link.split("v=")[1].slice(0, 11)
      setVideoDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${videoId}` })
      setIsInvalidUrl(false)
    } else {
      setVideoDetails({ ...videoDetails, youtubeUrl: "" })
      setIsInvalidUrl(true)
    }
  }

  const handleUpload = async () => {

    const { caption, imageUrl, youtubeUrl } = videoDetails
    if (caption && imageUrl && youtubeUrl) {

      try {
        const result = await addVideo(videoDetails)
        setAddVideoResponse(result.data)
        console.log(result)
        if (result.status >= 200 && result.status < 300) {
          setVideoDetails({ caption: "", imageUrl: "", youtubeUrl: "" })
          toast.success(`${result.data.caption} added to your collection`);
          handleClose()
        }
      } catch (error) {
        console.log(error)
      }



    } else {
      toast.warning("Please enter the field")
    }
  }
  return (
    <>

      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-12 col-md-auto text-center text-md-start">
          <h3 style={{ fontFamily: "Rochester, serif", color: "#ffdd57" }}>All Videos</h3>
        </div>
        <div className="col-12 col-md-auto d-flex align-items-center justify-content-center justify-content-md-end">
          <h5 className="text-warning mb-0 ms-5">Add New Video</h5>
          <button
            onClick={handleShow}
            className="btn btn-warning fs-5 rounded-circle ms-3 fw-bolder"
            style={{ width: "45px", height: "45px" }}
          >
            +
          </button>
        </div>
      </div>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill following details...</p>

          <div className='border border-3 border-info rounded p-3'>

            {/* {caption} */}
            <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Enter Video Caption" />
            </FloatingLabel>

            {/* {image Url} */}
            <FloatingLabel controlId="floatingInputImage" label="Image Url" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="Enter Image Url" />
            </FloatingLabel>

            {/* {Youtube Url} */}
            <FloatingLabel controlId="floatingInputUrl" label="Youtube Url" className="mb-3">
              <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="text" placeholder="Enter Youtube Url" />
            </FloatingLabel>

            {
              isInvalidUrl && <div className='text-danger ms-2 fw-bold'>Invalid Url</div>
            }

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>

        </Modal.Footer>

      </Modal>


    </>
  )
}

export default Add