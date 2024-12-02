import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../PINK LOGO.png";
import LogoTwo from "../New folder/43.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
        className="header w-nav absolute top-0 left-0 main-header overflow-hidden"
      >
        <div className="container-default w-container overflow-hidden">
          <div className="header-wrapper">
            <div className="split-content header-right">
              <a aria-current="page" className="brand w-nav-brand w--current">
                <Link to={'/'}>
                  <img
                    src={Logo}
                    alt=" "
                    className="header-logo"
                  />
                </Link>
              </a>
            </div>
            <div className="split-content header-center">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <ul role="list" className="header-navigation">
                  <div className="sm:flex sm:items-center navbar-box sm:gap-[12px]">
                    <img src={LogoTwo} alt="" className="w-[30px] sm:mr-[10px]" />
                    <Link to="/" onClick={scrollToTop}>
                      <li className="nav-item-wrapper ">
                        <span className="nav-link w--current hover:text-black">Home</span>
                      </li>
                    </Link>
                    <Link to="/feature" onClick={scrollToTop}>
                      <li className="nav-item-wrapper">
                        <span className="nav-link hover:text-black">App Features</span>
                      </li>
                    </Link>
                    <Link to="/about" onClick={scrollToTop}>
                      <li className="nav-item-wrapper">
                        <span className="nav-link hover:text-black">About Us</span>
                      </li>
                    </Link>
                    <Link to="/contactus" onClick={scrollToTop} className="hover:bg-black">
                      <li className="nav-item-wrapper">
                        <span className="nav-link hover:text-black ">Contact Us</span>
                      </li>
                    </Link>
                  </div>
                  <li className="nav-item-wrapper button-mobile">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.shetalks"
                      target="_blank"
                      className="button-primary header-button mobile w-button"
                      rel="noreferrer"
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
                rel="noreferrer"
              >
                Download
              </a>
              <div className="menu-button w-nav-button" onClick={toggleMenu}>
                <div className="header-menu-button-icon-wrapper">
                  {isMenuOpen ? (
                    <IoClose className="text-2xl" />
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
        {isMenuOpen && (
          <div className="menu-content link-contents absolute top-0 right-0 toggle-contents shadow-md p-5 w-[80%] sm:w-[50%]">
            <ul>
              <Link to="/" onClick={scrollToTop}>
                <li>
                  <span className="block p-2">Home</span>
                </li>
              </Link>
              <Link to="/about" onClick={scrollToTop}>
                <li>
                  <span className="block p-2">About Us</span>
                </li>
              </Link>
              <Link to="/feature" onClick={scrollToTop}>
                <li>
                  <span className="block p-2">App Features</span>
                </li>
              </Link>
              <Link to="/contactus" onClick={scrollToTop}>
                <li>
                  <span className="block p-2">Contact Us</span>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
