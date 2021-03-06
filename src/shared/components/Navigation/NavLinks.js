import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';


const NavLinks = () => {
  const auth = useContext(AuthContext);
  // TODO: handle filters
  return (
    <React.Fragment>
      <div className="hidden sm:flex sm:items-center">
        <Link
          to="/"
          className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >
          Home
        </Link>
        <Link
          to="#"
          className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >
          Random
        </Link>
        <Link
          to="#"
          className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >
          Favorite
        </Link>
      </div>
      <div className="hidden sm:flex sm:items-center">
        {auth.isLoggedIn && (
          <Link
            to={`/${auth.userId}/posts`}
            className="border text-sm font-semibold border px-4 py-2 rounded-lg mr-4"
          >
            My Posts
          </Link>
        )}
        {auth.isLoggedIn && (
          <Link
            to="/posts/new"
            className="border text-sm font-semibold border px-4 py-2 rounded-lg mr-4"
          >
            Share Post
          </Link>
        )}
        {!auth.isLoggedIn && (
          <Link
            to="/auth"
            className = "text-white bg-green-500 text-sm font-semibold border px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Sign in
          </Link>
        )}
        {auth.isLoggedIn && (
          <button
            onClick={auth.logout}
            className = "text-white bg-green-500 text-sm font-semibold border px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Logout
          </button>
        )}
      </div>
    </React.Fragment>
  )
}

export default NavLinks;
