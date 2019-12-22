import React from 'react';

import MainHeader from './MainHeader';
import Logo from '../UIElements/Logo';
import NavLinks from './NavLinks';
import ToggleNav from './ToggleNav';
import SmallNav from './SmallNav';

const MainNavigation = () => {

  return (
    <React.Fragment>
      <MainHeader>
        <div className="flex items-center justify-between py-4">
          <Logo/>
          <NavLinks/>
          <ToggleNav/>
        </div>
        <SmallNav/>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation;
