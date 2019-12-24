import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = props => {

  if (props.show) {
    return (
      <div className="w-full p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">{props.post.title}</h5>
          </div>
          <div className="p-5">
            {props.post.body}
            <p className="py-2"><Link to="#">See More issues...</Link></p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full p-3">
        <div className="bg-white border rounded shadow">
          <div className="p-5">
            <p>Could not find post!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem;
