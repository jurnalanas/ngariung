import React from 'react';

import PostItem from '../components/PostItem';
import MainNavigation from '../../shared/components/Navigation/MainNavigation';

const Post = () => {
  return (
    <div>
      <MainNavigation/>
      <div className="container w-full mx-auto pt-2">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <div className="flex flex-row flex-wrap flex-grow mt-2">
            <PostItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
