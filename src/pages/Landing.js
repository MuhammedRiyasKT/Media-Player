import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../Images/violin-joypixels.gif';
import Card from 'react-bootstrap/Card';
import Settings from "../Images/settings.png"
import Category from "../Images/category.png"
import History from "../Images/history.png"

function Landing() {
  return (
    <>

      {/* {Landing Section} */}

      <div className="container landingSection">
        <div className="row align-items-center my-5 d-flex">
          <div className="col-lg-5 text-center text-lg-start">
            <h3>
              Welcome to <span className='text-warning'>Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }} className="mt-4">
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.
            </p>
            <Link to={'/home'} className="btn btn-info mt-4">
              Get Started
            </Link>
          </div>

          <div className="col"></div>
          <div className="col-lg-6 text-center">
            <img src={landingImage} alt="Media player landing" className="img-fluid" />
          </div>
        </div>
      </div>


      {/* {Features} */}

      <div className="feature container my-5">
        <h3 className="text-center text-warning">Features</h3>
        <div className="row justify-content-center">

          {/* Card 1 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <Card style={{ width: '22rem' }} className="p-3">
              <Card.Img variant="top" src={Settings} />
              <Card.Body className="text-center">
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  User can upload, view, and remove videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <Card style={{ width: '22rem' }} className="p-3">
              <Card.Img variant="top" src={Category} />
              <Card.Body className="text-center">
                <Card.Title>Cetegorize Videos</Card.Title>
                <Card.Text>
                  Users can categorize the video by drag and drop features
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <Card style={{ width: '22rem' }} className="p-3">
              <Card.Img variant="top" src={History} />
              <Card.Body className="text-center">
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all video
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>

      {/* {Landing Footer} */}

<div className="container my-5 p-5 border border-white border-3 rounded">
  <div className="row">
    
    
    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      <h3 className="landingFooter-header">Simple, Fast, and Powerful</h3>
      <div className="mt-4 text-white landing-footerSpan">
        <p>
          <span className="fs-5 fw-bold text-warning">Play Everything: </span>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.
        </p>
        <p>
          <span className="fs-5 fw-bold text-warning">Manage Videos: </span>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.
        </p>
        <p>
          <span className="fs-5 fw-bold text-warning">Watch History: </span>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.
        </p>
      </div>
    </div>

    <div className="col-12 col-lg-6 d-flex justify-content-center">
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/5dy3azady4w?si=ApygqpyoxAzkebsq" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        className="rounded"
      ></iframe>
    </div>

  </div>
</div>

    </>
  );
}

export default Landing;

