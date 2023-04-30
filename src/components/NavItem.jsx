import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavItem = ({ item }) => {
  const linkProps = {
    to: item.url,
    className: 'sub-menu-item',
  };

  if (item.is_external_link) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  return <HashLink {...linkProps}>{item.title}</HashLink>;
};
export default NavItem;
