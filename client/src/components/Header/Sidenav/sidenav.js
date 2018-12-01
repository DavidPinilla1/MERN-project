import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenav_items'
const Nav = props => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: '#242424',
        maxWidth: '220px'
      }}
    >
      <SidenavItems/>
    </SideNav>
  );
};
export default Nav;
