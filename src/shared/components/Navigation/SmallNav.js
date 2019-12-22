import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const SmallNav = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div className="block sm:hidden bg-white border-t-2 py-2">
        <div className="flex flex-col">
          <Link
            to="/"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
          >
            Random
          </Link>
          <Link
            to="#"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
          >
            Favorite
          </Link>
          <div className="flex justify-between items-center border-t-2 pt-2">
            <Link
              to="#"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Sign in
            </Link>
            <Link
              to="#"
              className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default SmallNav;
