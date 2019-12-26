import React, { useEffect, useState } from 'react';

import Contents from "../components/Contents";
import Table from "../components/Table";
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';



const Posts = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/posts'
        );

        setLoadedPosts(responseData.posts);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <MainNavigation/>
      {isLoading && (
        <div className="text-center flex justify-center content-center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPosts &&
        <div className="container w-full mx-auto pt-2">
          <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <Contents items={loadedPosts} />
            <hr className="border-b-2 border-gray-400 my-8 mx-4" />
            {/* <MetricsCard /> */}
            <Table/>
          </div>
        </div>
      }

    </React.Fragment>
  );
}

export default Posts;
