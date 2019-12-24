import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
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
        <Link
          to="/auth"
          className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >
          Sign in
        </Link>
        <Link
          to="/posts/new"
          className="border text-sm font-semibold border px-4 py-2 rounded-lg mr-4"
        >
          Share Post
        </Link>
        <Link
          to="#"
          className="text-white bg-green-500 text-sm font-semibold border px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Sign up
        </Link>
      </div>
    </React.Fragment>
  )
}

export default NavLinks;
