import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footers() {
  return (
   <div className='container footer mt-5'>
       <div className='row'>
             <div className='col-lg-5 col-md-6 mb-4'>
                 <h5><i className="fa-solid fa-music"></i>&nbsp; Media Player</h5>
                 <p className='mt-4 text-white'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.</p>
                 <p className='text-white'>Code is licensed by Luminar</p>
                 <p className='text-white'>Currently v5.3.2</p>
             </div>

             <div className='col-lg-2 col-md-3 col-sm-6 mb-4'>
              <h5 className='mb-3'>Links</h5>
              <ul className='list-unstyled'>
                <li><Link to='/' className='text-white text-decoration-none'>Landing</Link></li>
                <li><Link to='/home' className='text-white text-decoration-none'>Home</Link></li>
                <li><Link to='/history' className='text-white text-decoration-none'>History</Link></li>
              </ul>
             </div>

             <div className='col-lg-2 col-md-3 col-sm-6 mb-4'>
              <h5 className='mb-3'>Guide</h5>
              <ul className='list-unstyled'>
                <li><Link to='/' className='text-white text-decoration-none'>React</Link></li>
                <li><Link to='/home' className='text-white text-decoration-none'>React Bootstrap</Link></li>
                <li><Link to='/history' className='text-white text-decoration-none'>React Router</Link></li>
              </ul>
             </div>

             <div className='col-lg-3 col-md-6 mb-4'>
                <h5 className='mb-3'>Contact Us</h5>
                <div className='input-group'>
                  <input type='text' className='form-control' placeholder='Enter email'/>
                  <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='d-flex justify-content-start mt-3 gap-3'>
                   <a href='' className='text-white' style={{ fontSize: "20px" }}><i className="fa-brands fa-facebook"></i></a>
                   <a href='' className='text-white' style={{ fontSize: "20px" }}><i className="fa-brands fa-twitter"></i></a>
                   <a href='' className='text-white' style={{ fontSize: "20px" }}><i className="fa-brands fa-instagram"></i></a>
                   <a href='' className='text-white' style={{ fontSize: "20px" }}><i className="fa-brands fa-linkedin"></i></a>
                   <a href='' className='text-white' style={{ fontSize: "20px" }}><i className="fa-brands fa-github"></i></a>
                   <a href='' className='text-white' style={{ fontSize: "20px" }}><i className="fa-solid fa-phone"></i></a>
                </div>
             </div>
       </div>
       <p className='text-center mt-4'>© 2024 Media Player. Built with React.</p>
   </div>
  )
}

export default Footers
