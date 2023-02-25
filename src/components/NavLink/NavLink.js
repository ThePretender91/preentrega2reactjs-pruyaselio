import React from 'react';

const NavLink = ({ linkName, linkPage }) => (
  <a className="navLink" href={linkPage}>{linkName}</a>
);

export default NavLink;