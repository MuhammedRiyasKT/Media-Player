import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Service/AllApi'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function History() {
  const [videoHistory, setVideoHistory] = useState([])
  const [deleteVideo, setDeleteVideo] = useState("")

  const getHistory = async () => {
    try {
      const result = await getAllHistory()
      setVideoHistory(result.data)
      console.log(videoHistory)
      console.log(deleteVideo)

    } catch (error) {
      console.log(error)
    }
  }

  const deleVideoHistory = async (videoId) => {
    try {
      const result = await deleteHistory(videoId);
      setDeleteVideo(result);
      await getHistory();

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHistory()
  }, [])

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row justify-content-between align-items-center">
  {/* Left Column */}
  <div className="col-6">
    <h3 className="text-warning">Watch History</h3>
  </div>

  {/* Right Column */}
  <div className="col-6 text-end">
    <Link to="/home" className="text-warning fs-5 text-decoration-none">
      Back to <i className="fa-solid fa-house"></i>
    </Link>
  </div>
</div>


      {/* Responsive Table Section */}
      <div className="table-responsive mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NO</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Date & Time</th>
              <th>
                <i className="fa-solid fa-ellipsis"></i>
              </th>
            </tr>

          </thead>

          {videoHistory?.length > 0 ?
            videoHistory?.map((video, index) => (
              <tbody key={video.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{video?.caption}</td>
                  <td>
                    <a
                      href={video?.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary d-inline-block text-truncate"
                      style={{ maxWidth: "150px" }}
                      title={video?.youtubeUrl}
                    >
                      {video?.youtubeUrl}
                    </a>
                  </td>
                  <td>{video.formatedDate}</td>
                  <td onClick={() => deleVideoHistory(video?.id)}>
                    <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                  </td>
                </tr>
              </tbody>
            ))

            :
            <div className='center text-danger'>Nothing to Display</div>

          }
        </Table>
      </div>
    </div>
  );


}

export default History