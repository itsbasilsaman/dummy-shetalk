import React from 'react'
import Logo from '../PINK LOGO.png'
import LogoTwo from '../New folder/43.png'
// import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <div
      data-collapse="medium"
      data-animation="over-left"
      data-duration={400}
      data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="header w-nav absolute top-0 left-0"
    >
      <div className="container-default w-container">
      <div className="header-wrapper">
          <div className="split-content header-right">
            <a
               
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                src={Logo}
                alt="Appfly X Webflow Template - Logo"
                className="header-logo"
              />
            </a>
          </div>
          <div className="split-content header-center">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <ul role="list" className="header-navigation">
               <div className='sm:flex sm:items-center navbar-box'>
                <img src={LogoTwo} alt="" className='w-[30px] sm:mr-[10px]' />
                  <li className="nav-item-wrapper">
                    <a
                      href='#home'
                      aria-current="page"
                      className="nav-link w--current"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item-wrapper">
                    <a   className="nav-link">
                      About Us
                    </a>
                  </li>
                   
                  <li className="nav-item-wrapper">
                    {/* <Link to='/feature'> */}
                      <a className="nav-link" href='#feature'>
                      App  Features
                      </a>
                    {/* </Link> */}
                  </li>
                  <li className="nav-item-wrapper">
                    {/* <Link to='/feature'> */}
                      <a className="nav-link" href='#feature'>
                      Contact Us
                      </a>
                    {/* </Link> */}
                  </li>
               </div>
                <li className="nav-item-wrapper button-mobile">
                  <a
                     href='https://play.google.com/store/apps/details?id=com.shetalks'
                    target="_blank"
                    className="button-primary header-button mobile w-button"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </nav>
            
          </div>
          <div className="split-content header-left">
            <a
              href="https://play.google.com/store/apps/details?id=com.shetalks"
              target="_blank"
              className="button-primary header-button w-button"
            >
              Download
            </a>
            <div className="menu-button w-nav-button">
              <div className="header-menu-button-icon-wrapper">
                <div className="icon-wrapper">
                  <div className="header-menu-button-icon-top" />
                  <div className="header-menu-button-icon-medium" />
                  <div className="header-menu-button-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div> 
       </div>
      <div className="bg header" />
    </div>
    </>
  )
}

export default Header