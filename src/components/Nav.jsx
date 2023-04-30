import React from 'react';
import { HashLink } from 'react-router-hash-link';

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
        <HashLink className="logo pl-0" to="/#welcome">
          Alfred
        </HashLink>
        <div className="menu-extras">
          <div className="menu-item">
            <span className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </span>
          </div>
        </div>
        <ul className="buy-button list-none mb-0">
          <li className="inline pl-1 mb-0">
            <HashLink
              to={'/#contact'}
              className="btn bg-sky-600 hover:bg-sky-700 border-sky-600
                      hover:border-sky-700 text-white rounded-md"
            >
              Let's Talk
            </HashLink>
          </li>
        </ul>
        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <HashLink to="/#welcome" className="sub-menu-item">
                Home
              </HashLink>
            </li>

            <li>
              <HashLink to="/portfolio" className="sub-menu-item">
                Portfolio Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="/#experience" className="sub-menu-item">
                Experience
              </HashLink>
            </li>

            <li>
              <HashLink
                to="https://medium.com/@learnwithalfred"
                target="_blank"
                rel="noopener noreferrer"
                className="sub-menu-item"
              >
                Blogs
              </HashLink>
            </li>
            <li>
              <HashLink
                to="https://www.youtube.com/@learnwithalfred"
                target="_blank"
                rel="noopener noreferrer"
                className="sub-menu-item"
              >
                Youtube
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
