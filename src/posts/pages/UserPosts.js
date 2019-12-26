import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Contents from "../components/Contents";
import Table from "../components/Table";
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserPosts = () => {
  const [loadedPosts, setLoadedPosts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/user/${userId}`
        );
        setLoadedPosts(responseData.posts);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest, userId]);


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="text-center flex justify-center content-center">
          <LoadingSpinner />
        </div>
      )}
      <MainNavigation/>
      {!isLoading && loadedPosts &&
        <div className="container w-full mx-auto pt-2">
          <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <Contents items={loadedPosts}/>
            <hr className="border-b-2 border-gray-400 my-8 mx-4" />
            <Table/>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default UserPosts;
