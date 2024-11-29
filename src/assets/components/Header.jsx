import React from 'react'
import Logo from '../PINK LOGO.png'
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
                    About
                  </a>
                </li>
                <li className="nav-item-wrapper">
                  <div
                    data-hover="true"
                    data-delay={0}
                    data-w-id="fe4f34b6-c7e6-17e4-cc9a-1786972fb4f3"
                    className="nav-link-dropdown w-dropdown"
                  >
                    <div className="nav-link dropdown w-dropdown-toggle">
                      {/* <div>
                        Pages&nbsp;<span className="dropdown-arrow"></span>
                      </div> */}
                    </div>
                    <nav className="dropdown-list w-dropdown-list">
                      <div className="dropdown-nav-main-wrapper">
                        <div className="dropdown-nav-pages-wrapper">
                          <div className="title dropdown-nav-title">Menu</div>
                          <div className="dropdown-nav-content">
                            <ul role="list" className="dropdown-nav">
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  aria-current="page"
                                  className="dropdown-nav-link w--current"
                                >
                                  Home
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  About
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                               
                                  <a
                                     
                                    className="dropdown-nav-link"
                                  >
                                    Features
                                  </a>
                              
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                   
                                  className="dropdown-nav-link"
                                >
                                  Blog
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Blog Post
                                </a>
                              </li>
                            </ul>
                            <ul role="list" className="dropdown-nav last">
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Pricing
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                 
                                  className="dropdown-nav-link"
                                >
                                  Pricing Single
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                   
                                  className="dropdown-nav-link"
                                >
                                  Jobs
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Jobs Single
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="dropdown-nav-pages-wrapper last">
                          <div className="title dropdown-nav-title">
                            Utility Pages
                          </div>
                          <div className="dropdown-nav-content">
                            <ul role="list" className="dropdown-nav last">
                              <li className="dropdown-nav-item">
                                <a
                                   
                                  className="dropdown-nav-link"
                                >
                                  404 Not Found
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Password Protected
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Licenses
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Style Guide
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Start Here
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link"
                                >
                                  Changelog
                                </a>
                              </li>
                              <li className="dropdown-nav-item">
                                <a
                                  
                                  className="dropdown-nav-link special"
                                >
                                  Browse More Templates
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="nav-item-wrapper">
                  {/* <Link to='/feature'> */}
                    <a className="nav-link" href='#feature'>
                      Features
                    </a>
                  {/* </Link> */}
                </li>
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