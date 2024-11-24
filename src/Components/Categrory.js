import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../Service/AllApi';
import VideoCard from './VideoCard';



const Categrory = ({ setDeleteCategoryResponse, deleteVideoResponse }) => {
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [deleteOneCategory, setDeleteOneCategory] = useState("")
  console.log(deleteOneCategory)
  // console.log(categoryName)
  // console.log(allCategory)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {

      try {
        await addCategory({ categoryName, allVideos: [] })
        handleClose()
        setCategoryName("")
      } catch (error) {
        console.log(error)
      }

    } else {
      toast.warning('enter the category name')
    }
  }

  const getCategory = async () => {
    try {
      const result = await getAllCategory()
      setAllCategory(result.data)
      getCategory()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteCategoryVideo = async (videoId) => {
    try {
      const result = await deleteCategory(videoId)
      setDeleteOneCategory(result)
      getCategory()
      console.log(result)
      console.log(videoId)
    } catch (error) {
      console.log(error)
    }

  }

  const videoDropped = async (e, targetCategoryId) => {
    e.preventDefault();
  
    const videoId = e.dataTransfer.getData('videoId'); // Get video ID from drag data
    if (!videoId) {
      toast.error('Failed to get video ID');
      return;
    }
  
    try {
      // Fetch the video data by its ID
      const { data: draggedVideo } = await getSingleVideo(videoId);
      if (!draggedVideo) {
        toast.error('Failed to fetch video data');
        return;
      }
  
      // Find the target category
      const targetCategory = allCategory.find((item) => item.id === targetCategoryId);
      if (!targetCategory) {
        toast.error('Target category not found');
        return;
      }
  
      // Ensure the target category has a valid allVideos array
      if (!Array.isArray(targetCategory.allVideos)) {
        targetCategory.allVideos = [];
      }
  
      // Check if the video already exists in the target category
      const isVideoAlreadyInCategory = targetCategory.allVideos.some(
        (video) => video.id === videoId
      );
      if (isVideoAlreadyInCategory) {
        toast.warning('This video is already in the selected category');
        return;
      }
  
      // Add the video to the target category
      targetCategory.allVideos.push(draggedVideo);
  
      // Update the target category in the backend
      await updateCategory(targetCategoryId, targetCategory);
  
      // Delete the video from the original category (backend deletion)
      await deleteVideo(videoId);
  
      // Refresh categories after update
      getCategory();
      toast.success('Video moved successfully!');
    } catch (err) {
      console.error('Error during video drop:', err);
      toast.error('Failed to move video. Please try again.');
    }
  };
  


  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const dragStarted = (e, videoDetails, categoryId) => {
    console.log(`category id ${categoryId} category details ${videoDetails}`)
    const dataShare = { videoDetails, categoryId }
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))
  }

  useEffect(() => {
    getCategory()
  }, [deleteVideoResponse])

  return (
    <>
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-12 col-md-auto text-center text-md-start">
          <h3 className="ms-3" style={{ fontFamily: "Rochester, serif", color: "#ffdd57" }}>
            Categories
          </h3>
        </div>
        <div className="col-12 col-md-auto d-flex align-items-center justify-content-center justify-content-md-end">
          <h5 className="text-warning mb-0">Add Categories</h5>
          <button
            onClick={handleShow}
            className="btn btn-warning fs-5 rounded-circle ms-3 fw-bolder"
            style={{ width: "45px", height: "45px" }}
          >
            +
          </button>
        </div>
      </div>

      <div className="container-fluid">
        {allCategory?.length > 0 ? (
          allCategory?.map((category) => (
            <div
              key={category.id}
              className="border border-light rounded-3 p-3 mb-4 shadow-sm"
              droppable="true"
              onDrop={(e) => videoDropped(e, category?.id)}
              onDragOver={(e) => dragOverCategory(e)}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-primary mb-0">{category?.categoryName}</h5>
                <button
                  className="btn btn-link text-danger p-0"
                  onClick={() => deleteCategoryVideo(category?.id)}
                >
                  <i className="fa-solid fa-trash fs-5"></i>
                </button>
              </div>

              <div className="row gy-3">
                {category?.allVideos?.length > 0 ? (
                  category?.allVideos?.map((video) => (
                    <div
                      key={video?.id}
                      draggable={true}
                      onDragStart={(e) => dragStarted(e, video, category?.id)}
                      className="col-lg-4 col-md-6 col-sm-12"
                    >
                      <VideoCard displayVideo={video} insideCategory={true} />
                    </div>
                  ))
                ) : (
                  <div className="text-muted text-center">
                    No videos available in this category.
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-danger fw-bold">
            No categories added yet.
          </div>
        )}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border border-3 border-info rounded p-3">
            <FloatingLabel controlId="categoryName" label="Category" className="mb-3">
              <Form.Control
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                placeholder="Enter category name"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );

}

export default Categrory