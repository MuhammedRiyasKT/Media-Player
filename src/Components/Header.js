import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand className='fs-5'>
         <Link to={'/'} style={{textDecoration:'none'}} className='text-white'>
         <i class="fa-solid fa-music"></i>&nbsp;
         Media Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header