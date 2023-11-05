import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import chip1 from "../src/assets/chip1.png"
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='productDetail'>
        <div className='flex'>
          <div>
            <h1 className='title'>
              ENJOY OUR <br /> POTATO <br /> CHIPS.....
            </h1>
            <p className='para'>
              Pith flavors almost as rich as our history. we have a chip or crisp flavor guaranteed to <br />bring a smile on your face
            </p>
            <div class="container">
              <div class="btn"><a href="#">Read More</a></div>
            </div>
          </div>
          <div className="chipContainer">
            <div className="chip1s">
              <img src={chip1} alt="" width={"200px"} />
            </div>
          </div>

        </div>

      </div>
      <footer>
        <div className="footer-icons">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
          <a href="mailto:example@example.com">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App