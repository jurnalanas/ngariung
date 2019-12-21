import React from 'react';
import PostItem from './PostItem'

const PostsLists = props => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No Posts found</h2>
      </div>
    )
  }

  return (
    <>
      {props.items.map(post => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          body={post.body}
          user={post.user}
          image={post.image}
        />
      ))}
    </>
  )
}

export default PostsLists;
