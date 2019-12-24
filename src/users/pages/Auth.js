import React from 'react';
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import LoginForm from '../components/LoginForm';


const Auth = () => {
  return (
    <div>
      <MainNavigation/>
      <div className="container w-full mx-auto pt-2">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <div className="flex items-center justify-center">
            {/*  */}
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
