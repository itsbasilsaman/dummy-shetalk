import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // Import the IoClose icon
import Logo from '../PINK LOGO.png';
import LogoTwo from '../New folder/43.png';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        className="header w-nav absolute top-0 left-0 main-header"
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
                  <div className="sm:flex sm:items-center navbar-box">
                    <img src={LogoTwo} alt="" className="w-[30px] sm:mr-[10px]" />
                    <Link to={'/'}>
                      <li className="nav-item-wrapper">
                        <a
                          href="#home"
                          aria-current="page"
                          className="nav-link w--current"
                        >
                          Home
                        </a>
                      </li>
                    </Link>
                    <Link to={'/feature'}>
                      <li className="nav-item-wrapper">
                        <a className="nav-link" href="#feature">
                          App Features
                        </a>
                      </li>
                  </Link>
                  <Link to={'/about'}>
                      <li className="nav-item-wrapper">
                        <a className="nav-link">About Us</a>
                      </li>
                  </Link>
                 
                   <Link to={'/contactus'}>
                      <li className="nav-item-wrapper">
                        <a className="nav-link" href="#contact">
                          Contact Us
                        </a>
                      </li>
                   </Link>
                  </div>
                  <li className="nav-item-wrapper button-mobile">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.shetalks"
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
                className="button-primary header-button w-button "
              >
                Download
              </a>
              <div
                className="menu-button w-nav-button"
                onClick={toggleMenu}
              >
                {/* Conditional rendering for the menu button */}
                <div className="header-menu-button-icon-wrapper">
                  {isMenuOpen ? (
                    <IoClose className="text-2xl" /> // Render the close icon when menu is open
                  ) : (
                    <div className="icon-wrapper">
                      <div className="header-menu-button-icon-top" />
                      <div className="header-menu-button-icon-medium" />
                      <div className="header-menu-button-icon-bottom" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggleable Menu Content */}
      {isMenuOpen && (
        <div className="menu-content link-contents absolute top-0 right-0 toggle-contents shadow-md p-5 w-[80%] sm:w-[50%]">
          <ul>
           <Link to={'/'}> <li><a href="#home" className="block p-2  ">Home</a></li></Link>
           <Link to={'/about'}> <li><a href="#about" className="block p-2  ">About Us</a></li></Link>
           <Link to={'/feature'}> <li><a href="#feature" className="block p-2  ">App Features</a></li></Link>
           <Link> <li><a href="#contact" className="block p-2  ">Contact Us</a></li></Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
