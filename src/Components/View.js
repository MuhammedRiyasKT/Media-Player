import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../Service/AllApi'

function View({ addVideoResponse, deleteCategoryResponse, setDeleteVideoResponse }) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideo, setDeleteVideo] = useState("")

  console.log('this is my all videos data', allVideos)

  const getVideos = async () => {
    try {
      const result = await getAllVideos()
      setAllVideos(result.data)
      getVideos()
    } catch (error) {
      console.log(error)
    }
  }

  const dropCategoryVideo = async (e) => {
    const { videoDetails, categoryId } = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log('drop videoDetails : ', videoDetails)
    console.log("categoryId : ", categoryId)

    try {
      const { data } = await getSingleCategory(categoryId);
      console.log(data)

      const updateData = data.allVideos.filter((data) => data.id !== videoDetails.id)
      console.log('updatedData : ', updateData)

      const { id, categoryName } = data
      const categoryResult = updateCategory(id, { id, categoryName, allVideos: updateData })
      setDeleteVideoResponse(categoryResult.data)

      await addVideo(videoDetails)
      getVideos()


    } catch (error) {
      console.log('Error:', error);
    }

  }


  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    getVideos()
  }, [addVideoResponse, deleteVideo, deleteCategoryResponse])

  return (
    <>
      <Row
        className="border border-warning rounded-3 p-3 gy-4"
        droppable="true"
        onDrop={(e) => dropCategoryVideo(e)}
        onDragOver={(e) => dragOverCategory(e)}
      >
        {allVideos?.length > 0 ? (
          allVideos?.map((video) => (
            <Col key={video?.id} lg={4} md={6} sm={12} className="mb-4">
              <VideoCard
                displayVideo={video}
                setDeleteVideo={setDeleteVideo}
              />
            </Col>
          ))
        ) : (
          <div className="text-center w-100 text-muted">Nothing to Display</div>
        )}
      </Row>
    </>
  );


}

export default View