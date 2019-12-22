import React from 'react';
import PostCard from './PostCard'

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
        <PostCard
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
