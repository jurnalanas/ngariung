import React, { useEffect, useState } from 'react';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';


const CommentItem = props => {
  const [loadedComments, setLoadedComments] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const postId = props.postId;
  // const loadedComments = comments.filter(comment => comment.postId === props.postId)
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/comments/post/${postId}`
        );
        setLoadedComments(responseData.comments);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, postId]);

  if (loadedComments) {
    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="text-center flex justify-center content-center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedComments &&
          <div className="flex flex-row flex-wrap flex-grow mt-2">
            <div className="w-full p-3">
              <div className="bg-white border rounded shadow p-5">
                <h2 className="text-xl text-gray-600">Comments</h2>
                {loadedComments.map(comment => (
                  <React.Fragment key={comment.commentId}>
                    <p className="text-gray-700 text-base py-2">
                      <span className="mx-1 text-xs">•</span> {comment.body}
                    </p>
                    {/* <div className="text-grey-dark leading-normal text-sm py-2">
                        <p><span className="mx-1 text-xs">•</span> { comment.created_at }</p>
                        <p>{comment.creator} <span className="mx-1 text-xs">•</span> { comment.created_at }</p>
                    </div> */}
                  </React.Fragment>
                ))}
              </div>
              <hr className="border-b-1 border-gray-100" />
            </div>
          </div>
        }
      </React.Fragment>
    )
  } else {
    return null;
  }
}
// TODO: Provide user.name

export default CommentItem;
