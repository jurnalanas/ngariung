import React from 'react';

const comments = [
  {
  author: {
    name: 'Anas',
    id: 'user1',
  },
  commentId: 'comment1',
  postId: 'post1',
  created_at: new Date("12/12/2019").toDateString(),
  body: 'this is a very insightful commnet',
  mood: 'thumbs', // nantinya ini pake enum di API
  },
  {
  author: {
    name: 'Anas',
    id: 'user1',
  },
  commentId: 'comment2',
  postId: 'post1',
  created_at: new Date("12/12/2019").toDateString(),
  body: 'this is a very insightful commnet2',
  mood: 'thumbs', // nantinya ini pake enum di API
  }
]

const CommentItem = props => {
  const loadedComments = comments.filter(comment => comment.postId === props.postId)

  if (loadedComments.length) {
    return (
      <div classNames="flex flex-row flex-wrap flex-grow mt-2">
        <div className="w-full p-3">
          <div className="bg-white border rounded shadow p-5">
            {loadedComments.map(comment => (
              <React.Fragment key={comment.commentId}>
                <p className="text-gray-700 text-base">
                  {comment.body}
                </p>
                <div className="text-grey-dark leading-normal text-sm py-2">
                    <p>{comment.author.name} <span className="mx-1 text-xs">•</span> { comment.created_at }</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <hr className="border-b-1 border-gray-100" />
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default CommentItem;
