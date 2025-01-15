import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

  useEffect(() => {
    if (isSidebarToggled) {
      document.body.classList.add("toggle-sidebar");
    } else {
      document.body.classList.remove("toggle-sidebar");
    }
  }, [isSidebarToggled]);

  useEffect(() => {
    const selectHeader = document.querySelector("#header");

    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };

    // Add event listeners
    window.addEventListener("load", headerScrolled);
    window.addEventListener("scroll", headerScrolled);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("load", headerScrolled);
      window.removeEventListener("scroll", headerScrolled);
    };
  }, []);

  useEffect(() => {
    const navbarLinks = document.querySelectorAll("#navbar .scrollto");

    const navbarLinksActive = () => {
      let position = window.scrollY + 200;

      navbarLinks.forEach((navbarLink) => {
        if (!navbarLink.hash) return;
        let section = document.querySelector(navbarLink.hash);
        if (!section) return;

        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarLink.classList.add("active");
        } else {
          navbarLink.classList.remove("active");
        }
      });
    };

    // Add event listener for scroll and load events
    window.addEventListener("load", navbarLinksActive);
    window.addEventListener("scroll", navbarLinksActive);

    // Cleanup event listeners when the component is unmounted
    return () => {
      window.removeEventListener("load", navbarLinksActive);
      window.removeEventListener("scroll", navbarLinksActive);
    };
  }, []);

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <div className='d-flex align-items-center justify-content-between'>
        <Link to='/index' className='logo d-flex align-items-center'>
          <img src='assets/img/logo.png' alt='' />
          <span className='d-none d-lg-block'>NiceAdmin</span>
        </Link>
        <i
          className='bi bi-list toggle-sidebar-btn'
          onClick={handleToggleSidebar}
        />
      </div>
      {/* End Logo */}
      <div
        className={`search-bar ${isSearchBarVisible ? "search-bar-show" : ""}`}
      >
        <form
          className='search-form d-flex align-items-center'
          method='POST'
          action='#'
        >
          <input
            type='text'
            name='query'
            placeholder='Search'
            title='Enter search keyword'
          />
          <button type='submit' title='Search'>
            <i className='bi bi-search' />
          </button>
        </form>
      </div>
      {/* End Search Bar */}
      <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
          <li className='nav-item d-block d-lg-none'>
            <Link
              className='nav-link nav-icon search-bar-toggle '
              to='#'
              onClick={handleToggleSearchBar}
            >
              <i className='bi bi-search' />
            </Link>
          </li>
          {/* End Search Icon*/}
          <li className='nav-item dropdown'>
            <Link
              className='nav-link nav-icon'
              to='#'
              data-bs-toggle='dropdown'
            >
              <i className='bi bi-bell' />
              <span className='badge bg-primary badge-number'>4</span>
            </Link>
            {/* End Notification Icon */}
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
              <li className='dropdown-header'>
                You have 4 new notifications
                <Link to='#'>
                  <span className='badge rounded-pill bg-primary p-2 ms-2'>
                    View all
                  </span>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning' />
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='notification-item'>
                <i className='bi bi-x-circle text-danger' />
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='notification-item'>
                <i className='bi bi-check-circle text-success' />
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='notification-item'>
                <i className='bi bi-info-circle text-primary' />
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='dropdown-footer'>
                <Link to='#'>Show all notifications</Link>
              </li>
            </ul>
            {/* End Notification Dropdown Items */}
          </li>
          {/* End Notification Nav */}
          <li className='nav-item dropdown'>
            <Link
              className='nav-link nav-icon'
              to='#'
              data-bs-toggle='dropdown'
            >
              <i className='bi bi-chat-left-text' />
              <span className='badge bg-success badge-number'>3</span>
            </Link>
            {/* End Messages Icon */}
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
              <li className='dropdown-header'>
                You have 3 new messages
                <Link to='#'>
                  <span className='badge rounded-pill bg-primary p-2 ms-2'>
                    View all
                  </span>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='message-item'>
                <Link to='#'>
                  <img
                    src='assets/img/messages-1.jpg'
                    alt=''
                    className='rounded-circle'
                  />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>4 hrs. ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='message-item'>
                <Link to='#'>
                  <img
                    src='assets/img/messages-2.jpg'
                    alt=''
                    className='rounded-circle'
                  />
                  <div>
                    <h4>Anna Nelson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>6 hrs. ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='message-item'>
                <Link to='#'>
                  <img
                    src='assets/img/messages-3.jpg'
                    alt=''
                    className='rounded-circle'
                  />
                  <div>
                    <h4>David Muldon</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>8 hrs. ago</p>
                  </div>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li className='dropdown-footer'>
                <Link to='#'>Show all messages</Link>
              </li>
            </ul>
            {/* End Messages Dropdown Items */}
          </li>
          {/* End Messages Nav */}
          <li className='nav-item dropdown pe-3'>
            <Link
              className='nav-link nav-profile d-flex align-items-center pe-0'
              to='#'
              data-bs-toggle='dropdown'
            >
              <img
                src='assets/img/profile-img.jpg'
                alt='Profile'
                className='rounded-circle'
              />
              <span className='d-none d-md-block dropdown-toggle ps-2'>
                K. Anderson
              </span>
            </Link>
            {/* End Profile Iamge Icon */}
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
              <li className='dropdown-header'>
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link
                  className='dropdown-item d-flex align-items-center'
                  to='/users-profile'
                >
                  <i className='bi bi-person' />
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link
                  className='dropdown-item d-flex align-items-center'
                  to='/users-profile'
                >
                  <i className='bi bi-gear' />
                  <span>Account Settings</span>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link
                  className='dropdown-item d-flex align-items-center'
                  to='/pages-faq'
                >
                  <i className='bi bi-question-circle' />
                  <span>Need Help?</span>
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link
                  className='dropdown-item d-flex align-items-center'
                  to='#'
                >
                  <i className='bi bi-box-arrow-right' />
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
            {/* End Profile Dropdown Items */}
          </li>
          {/* End Profile Nav */}
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
  );
};

export default Header;
