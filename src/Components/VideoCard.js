import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../Service/AllApi';

function VideoCard({ displayVideo, setDeleteVideo, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const { caption, youtubeUrl } = displayVideo
    const localTime = new Date()
    console.log(localTime)
    const formatedDate = localTime.toLocaleString()
    const videoHistory = { caption, youtubeUrl, formatedDate }

    try {
      await saveHistory(videoHistory)
    } catch (error) {
      console.log(error)
    }
    setShow(true);
  }

  const handleRemove = async (videoId) => {
    try {
      const result = await deleteVideo(videoId)
      setDeleteVideo(result)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const dragStarted = (e, videoId) => {
    console.log(`this is video id ${videoId}`)
    e.dataTransfer.setData("videoId", videoId)
  }


  return (
    <>
      <Card
        draggable={true}
        onDragStart={(e) => dragStarted(e, displayVideo?.id)}
        className="shadow-sm rounded border-0 overflow-hidden"
        style={{ maxWidth: "100%" }}
      >
        <Card.Img
          onClick={handleShow}
          variant="top"
          className='responsive-image'
          src={displayVideo?.imageUrl}
          style={{
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <Card.Body className="d-flex align-items-center justify-content-between">
          <h5 className="m-0 fw-bold text-truncate" style={{ maxWidth: "75%" }}>
            {displayVideo?.caption}
          </h5>
          {!insideCategory && (
            <button
              onClick={() => handleRemove(displayVideo?.id)}
              className="btn p-0 text-danger"
              style={{ border: "none", background: "none" }}
            >
              <i className="fa-solid fa-trash" style={{ fontSize: "20px" }}></i>
            </button>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${displayVideo?.youtubeUrl}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </>
  );

}

export default VideoCard