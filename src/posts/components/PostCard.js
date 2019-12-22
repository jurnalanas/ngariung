import React from 'react';
import { Link } from 'react-router-dom'

const PostCard = props => {
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-white border rounded shadow">
        <Link to="/post">
          <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/200/?random" />
        </Link>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <Link className="no-underline hover:underline text-black" to="/post">
              {props.title}
            </Link>
          </h1>
          <p className="text-grey-darker text-sm">
            {props.date}
          </p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Link className="flex items-center no-underline hover:underline text-black" to="#">
            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
            <p className="ml-2 text-sm">
              {props.user}
            </p>
          </Link>
          {/* <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Like</span>
            <i className="fa fa-heart" />
          </a> */}
        </footer>
      </div>
    </div>
  )
}

export default PostCard;
