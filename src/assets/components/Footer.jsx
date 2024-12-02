import React from 'react'
import Logo from '../PINK LOGO.png'
import { Link } from 'react-router-dom'

function Footer() {

    // Scroll-to-top function
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

  return (
    <>
       <footer className="footer">
      <div className="container-default w-container">
        <div className="footer-wrapper">
          <div
            data-w-id="0a603cb5-369c-00f7-72ab-607afee37b9d"
            className="footer-content-top"
          >
            <div className="footer-main-content">
              <a
                href=""
                aria-current="page"
                className="footer-logo-container w-inline-block w--current"
              >
               <Link to={'/'} onClick={scrollToTop}>
                  <img
                    src={Logo}
                    alt=""
                    className="footer-logo"
                  />
               </Link>
              </a>
              <p className="paragraph footer-main-content-parargraph">
              She Talks is a platform empowering women through mental well-being resources, community support, networking, and personal growth opportunities
              </p>
            </div>
            <div className="footer-nav-wrapper">
              <div className="footer-menu-wrapper first">
                <div className="title footer-menu">Pages</div>
                <div className="footer-menu-content">
                  <ul role="list" className="footer-nav w-list-unstyled">
                   <Link to={'/'} style={{textDecoration:'none'}} onClick={scrollToTop}>
                      <li className="footer-nav-item">
                        <a
                          href=""
                          aria-current="page"
                          className="footer-nav-link w--current"
                        >
                          Home
                        </a>
                      </li>
                   </Link>
                    <Link to={'/about'} style={{textDecoration:'none'}} onClick={scrollToTop}>
                      <li className="footer-nav-item">
                        <a href=" " className="footer-nav-link">
                          About
                        </a>
                      </li>
                    </Link>
                    <Link to={'/feature'} style={{textDecoration:'none'}} onClick={scrollToTop}>
                      <li className="footer-nav-item">
                        <a href=" " className="footer-nav-link">
                          Features
                        </a>
                      </li>
                    </Link>
                    <Link to={'/deleteaccount'} style={{textDecoration:'none'}} onClick={scrollToTop}>
                      <li className="footer-nav-item"  >
                        <a href="" className="footer-nav-link" >
                          Delete Account
                        </a>
                      </li>
                    </Link>
                    <Link to={'/refundpolicy'} style={{textDecoration:'none'}} onClick={scrollToTop}>
                      <li className="footer-nav-item">
                        <a href=" " className="footer-nav-link ">
                          Refund Policy
                        </a>
                      </li>
                    </Link>
                   <Link to={'/privacypolicy'} style={{textDecoration:'none'}} onClick={scrollToTop}>
                      <li className="footer-nav-item">
                        <a href="" className="footer-nav-link">
                          Privacy Policy
                        </a>
                      </li>
                   </Link>
                   
                  </ul>
                 
                </div>
              </div>
             
              <div className="footer-menu-wrapper last">
                <div className="title footer-menu">Follow us</div>
                <div className="footer-menu-content">
                  <ul role="list" className="footer-nav last w-list-unstyled">
                    <li className="footer-nav-item">
                      <a
                        href=""
                        target="_blank"
                        className="footer-nav-link social-media w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b1826707fc3f3e31973598_icon-1-social-media-app-x-template.svg"
                          alt=" "
                          className="image footer-nav-link-social-media-icon facebook-shadow"
                        />
                        <div className="footer-social-media-text">Facebook</div>
                      </a>
                    </li>
                  
                    <li className="footer-nav-item">
                      <a
                        href=" "
                        target="_blank"
                        className="footer-nav-link social-media w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b182678e93f1c70389c07e_icon-3-social-media-app-x-template.svg"
                          alt=" "
                          className="image footer-nav-link-social-media-icon intagram-shadow"
                        />
                        <div className="footer-social-media-text">
                          Instagram
                        </div>
                      </a>
                    </li>
                   
                    <li className="footer-nav-item">
                      <a
                        href=""
                        target="_blank"
                        className="footer-nav-link social-media w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b18267be705fc66d63a0d3_icon-6-social-media-app-x-template.svg"
                          alt=" "
                          className="image footer-nav-link-social-media-icon whatsapp-shadow"
                        />
                        <div className="footer-social-media-text">WhatsApp</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer