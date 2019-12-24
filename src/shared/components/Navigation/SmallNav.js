import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AuthContext } from '../../context/auth-context';


const SmallNav = props => {
  const auth = useContext(AuthContext);

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
            {auth.isLoggedIn && (
              <Link
                to="/posts/new"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Share Post
              </Link>
            )}
            {auth.isLoggedIn && (
              <Link
                to="/user1/posts"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                My Posts
              </Link>
            )}
            {!auth.isLoggedIn && (
              <Link
                to="#"
                className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Sign in
              </Link>
            )}
            {auth.isLoggedIn && (
              <button
                onClick={auth.logout}
                className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default SmallNav;
