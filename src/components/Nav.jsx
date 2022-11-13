import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  }
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        {/* Logo container*/}
        <Link className="logo pl-0" to="/">
          Alfred Boateng
        </Link>
        {/* End Logo container*/}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle*/}
            <span className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </span>
            {/* End mobile menu toggle*/}
          </div>
        </div>
        {/*Login button Start*/}
        <ul className="buy-button list-none mb-0">
          <li className="inline pl-1 mb-0">
            <Link
              to="/"
              target="_blank"
              className="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
            >
              <i data-feather="shopping-cart" className="h-4 w-4" />
            </Link>
          </li>
        </ul>
        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <Link to="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="sub-menu-item">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" className="sub-menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
