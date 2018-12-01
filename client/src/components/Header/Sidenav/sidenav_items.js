import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const SidenavItems = props => {
  const items = [
    {
      type: 'navItem',
      icon: 'home',
      text: 'Home',
      link: '/',
      restricted: false
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'My Profile',
      link: '/user',
      restricted: false
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'Add Admins',
      link: '/user/registrer',
      restricted: false
    },
    {
      type: 'navItem',
      icon: 'sign-in',
      text: 'Login',
      link: '/login',
      restricted: false
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'My reviews',
      link: '/user/user-reviews',
      restricted: false
    },
    {
      type: 'navItem',
      icon: 'file-text-o',
      text: 'Add reviews',
      link: '/user/add',
      restricted: false
    },

    {
      type: 'navItem',
      icon: 'sign-out',
      text: 'Logout',
      link: '/user/logout',
      restricted: false
    }
  ];
  const element = (item, i) => (
  <div key={i} className={item.type}>
    <Link to={item.link}>
        <FontAwesome name={item.icon}/>
        {item.text}
    </Link>
  </div>
  );
  const showItems = () => (
    items.map((item, i) => {
         return element(item, i);
    })
  );
  return (
    <div>
        {showItems()}
    </div>
  );
};
export default SidenavItems;
