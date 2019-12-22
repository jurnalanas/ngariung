import React from 'react';

const CommentsManager = () => {
  return (
    <div className="w-full p-3">
      <div className="border rounded shadow p-3">
        <div className="mb-4">
            <h2 className="text-black font-bold">Comments</h2>
        </div>
        <textarea
                  placeholder="Add a comment"
                  className="bg-grey-lighter border rounded leading-normal resize-none w-full py-2 px-3">
        </textarea>
        <div className="mt-3">
            <button className="border border-blue bg-blue hover:bg-blue-dark py-2 px-4 rounded tracking-wide mr-1">Submit</button>
            <button className="border border-grey-darker text-grey-darker hover:bg-grey-dark hover:text-white py-2 px-4 rounded tracking-wide ml-1">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default CommentsManager;
