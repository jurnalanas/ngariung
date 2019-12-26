import React, { useContext, useEffect, useState } from 'react';

import PostItem from '../components/PostItem';
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import CommentsManager from '../components/CommentsManager';
import CommentItem from '../components/CommentItem';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';



const Post = () => {
  const auth = useContext(AuthContext);
  const postId = useParams().postId;
  const userId = useParams().userId;

  const [loadedItem, setLoadedItem] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/${postId}`
        );
        setLoadedItem(responseData.post);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);
  // const loadedItem = POSTS.filter(post => post.id === postId)[0];

  if(loadedItem) {
    return (
      <React.Fragment>
        <MainNavigation/>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="text-center flex justify-center content-center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedItem &&
          <div className="container w-full mx-auto pt-2">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
              <div className="flex flex-row flex-wrap flex-grow mt-2">
                <PostItem post={loadedItem} show={true}/>
              </div>
              <CommentItem postId={postId}/>
              {auth.isLoggedIn && (
                <div className="flex flex-row flex-wrap flex-grow mt-2">
                  <CommentsManager/>
                </div>
              )}
              {!auth.isLoggedIn && (
                <div className="flex flex-row flex-wrap flex-grow mt-2">
                  <div className="w-full p-3">
                    <div className="bg-white border rounded shadow p-5">
                      <p className="text-gray-700 text-base">
                        Login to add a comment.
                      </p>
                    </div>
                    <hr className="border-b-1 border-gray-100" />
                  </div>
                </div>
              )}
            </div>
        </div>
        }
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <MainNavigation/>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="text-center flex justify-center content-center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedItem &&
          <div className="container w-full mx-auto pt-2">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
              <div className="flex flex-row flex-wrap flex-grow mt-2">
                <PostItem show={false}/>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Post;
