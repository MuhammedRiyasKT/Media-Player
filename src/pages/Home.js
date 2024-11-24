import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom';
import View from '../Components/View';
import Categrory from '../Components/Categrory';


function Home() {

  const [addVideoResponse, setAddVideoResponse] = useState("")
  const [deleteCategoryResponse, setDeleteCategoryResponse] = useState("")
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-12 col-md-auto">
            <Add setAddVideoResponse={setAddVideoResponse} />
          </div>
          <div className="col-12 col-md-auto text-center mb-4 text-md-end">
            <Link to="/history" className="text-danger fw-bold fs-6 text-decoration-none">
              Watch History
            </Link>
          </div>
        </div>
  
        <div className="row gy-4">
          <div className="col-lg-6">
            <View 
              addVideoResponse={addVideoResponse} 
              deleteCategoryResponse={deleteCategoryResponse} 
              setDeleteVideoResponse={setDeleteVideoResponse} 
            />
          </div>
          <div className="col-lg-6">
            <Categrory 
              setDeleteCategoryResponse={setDeleteCategoryResponse} 
              deleteVideoResponse={deleteVideoResponse} 
            />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Home