import React from 'react'
import "./css/Footer.css"

function Footer() {
  return (
    <div className='footer'>

     <div className='social'>
      <img className='logo' src='digi_logo_footer.png' alt='digi_logo_footer'></img>
      <div className='second-text'>
        <p>Copyright &copy; 2020 Nexcent ltd</p>
        <p>All rights reserved</p>
      </div>  
      <div className='icons'>
        <img className="icon" src='social-icon-insta.svg' alt='insta.svg'/>
        <img className="icon" src='social-icon-path.svg' alt='path.svg'/>
        <img className="icon" src='social-icon-twitter.svg' alt='twitter.svg'/>
        <img className="icon" src='social-icon-youtube.svg' alt='youtube.svg'/>
      </div>
    </div> 

      <div className='inner-footer'>
     <div className='inner-text'>
        <h3 className='footer-header'>Company</h3>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Pricing</p>
        <p>Testimonials</p>
     </div>

     <div className='inner-text'>
     <h3 className='footer-header'>Support</h3>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Pricing</p>
        <p>Testimonials</p>
     </div>

     <div  className="inner-text">
     <h3 className='footer-header'>Stay Up to Date</h3>
     <div className='footer-input' >

     <input className='footer-input 'placeholder='Your Email Address'></input>
     <span><img style={{padding:"8px"}} className="icon" src='send.png' alt='send.png'/></span>
     </div>
     </div>
     </div>

    </div>
  )
}

export default Footer