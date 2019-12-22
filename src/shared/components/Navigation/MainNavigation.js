import React, { useState } from 'react';

import MainHeader from './MainHeader';
import Logo from '../UIElements/Logo';
import NavLinks from './NavLinks';
import ToggleNav from './ToggleNav';
import SmallNav from './SmallNav';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <React.Fragment>
      <MainHeader>
        <div className="flex items-center justify-between py-2">
          <Logo />
          <NavLinks />
          <ToggleNav onClick={openDrawerHandler} />
        </div>
        <SmallNav show={drawerIsOpen} />
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
