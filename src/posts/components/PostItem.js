import React from 'react';

const PostItem = props => {
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-white border rounded shadow">
        <a href="#">
          <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/200/?random" />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {props.title}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">
            {props.date}
          </p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
            <p className="ml-2 text-sm">
              {props.user}
            </p>
          </a>
          {/* <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span className="hidden">Like</span>
            <i className="fa fa-heart" />
          </a> */}
        </footer>
      </div>
    </div>
  )
}

export default PostItem;
