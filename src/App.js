import React from 'react';
import Navbar from './posts/components/Navbar';
import Contents from './posts/components/Contents';
import MetricsCard from './posts/components/MetricsCard';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="container w-full mx-auto pt-20">
          <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <MetricsCard/>
            {/*Divider*/}
            <hr className="border-b-2 border-gray-400 my-8 mx-4" />
            <Contents/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
