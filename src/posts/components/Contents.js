import React from 'react';
import PostsLists from './PostsLists';

const Contents = props => {
  return (
    <div
      className="flex flex-row flex-wrap flex-grow mt-2"
      data-testid="posts-count"
    >
      <PostsLists items={props.items}/>
    </div>
  )
}

export default Contents;
