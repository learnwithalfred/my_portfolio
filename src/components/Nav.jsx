import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavItem from './NavItem';

const NavItems = [
  {
    title: 'Portfolio',
    url: '/portfolio',
    is_external_link: false,
  },
  {
    title: 'Experience',
    url: '/#experience',
    is_external_link: false,
  },
  {
    title: 'Blogs',
    url: 'https://medium.com/@learnwithalfred',
    is_external_link: true,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@learnwithalfred',
    is_external_link: true,
  },
];

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
          Home
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
            {NavItems.map((item) => (
              <li>
                <NavItem key={item.title} item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
