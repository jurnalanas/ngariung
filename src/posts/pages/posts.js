import React from 'react';

import Navbar from "../components/Navbar";
import Contents from "../components/Contents";
import MetricsCard from "../components/MetricsCard";
import Table from "../components/Table";

const Posts = () => {
  return (
    <div>
      <Navbar />
      <div className="container w-full mx-auto pt-2">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          {/*Divider*/}
          <Contents />
          <hr className="border-b-2 border-gray-400 my-8 mx-4" />
          <MetricsCard />
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default Posts;
