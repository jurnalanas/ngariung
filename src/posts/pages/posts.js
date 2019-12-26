import React, { useEffect, useState } from 'react';

import Contents from "../components/Contents";
import Table from "../components/Table";
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';


const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedPosts, setLoadedPosts] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/posts');

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedPosts(responseData.posts);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
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
