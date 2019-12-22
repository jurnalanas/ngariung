import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = () => {
  return (
    <div className="w-full p-3">
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <h5 className="font-bold uppercase text-gray-600">Post Title</h5>
        </div>
        <div className="p-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque, dicta nisi pariatur fugiat et tempore repudiandae nulla voluptate beatae repellat ab molestiae nesciunt, reprehenderit numquam harum nemo eius? Dicta!
          <p className="py-2"><Link to="#">See More issues...</Link></p>
        </div>
      </div>
    </div>
  )
}

export default PostItem;
