import React from 'react';

const MainHeader = props => {
  return <div className="bg-gray-100 w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          {props.children}
        </div>
      </div>
    </div>;
};

export default MainHeader;
