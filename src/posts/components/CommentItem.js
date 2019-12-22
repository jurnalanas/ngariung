import React from 'react';

const CommentItem = () => {
  const comment = {
    author: {
      name: 'Anas',
    },
    created_at: new Date("12/12/2019").toDateString(),
    body: 'this is a very insightful commnet',
  }
  return (
    <React.Fragment>
      <div className="w-full p-3">
        <div className="bg-white border rounded shadow p-5">
          <p className="text-gray-700 text-base">
            {comment.body}
          </p>
          <div className="text-grey-dark leading-normal text-sm py-2">
              <p>{comment.author.name} <span className="mx-1 text-xs">•</span> { comment.created_at}</p>
          </div>
        </div>
        <hr className="border-b-1 border-gray-100" />
      </div>
    </React.Fragment>
  )
}

export default CommentItem;
