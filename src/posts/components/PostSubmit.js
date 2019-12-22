import React from 'react';

const PostSubmit = () => {
  return (
    <div className="w-full p-3">
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Post Title"/>
        </div>
        <div className="p-4">
          <textarea className="w-full p-4 border" placeholder="Write your story here." rows="6"></textarea>
        </div>
        <div className="p-4 clearfix">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
            Submit Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostSubmit;
