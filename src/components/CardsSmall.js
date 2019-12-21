import React from 'react';

const CardsSmall = () => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
      {/*Metric Card*/}
      <div className="bg-white border rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded p-3 bg-red-600"><i className="fas fa-inbox fa-2x fa-fw fa-inverse" /></div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold uppercase text-gray-500">Issues</h5>
            <h3 className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up" /></span></h3>
          </div>
        </div>
      </div>
      {/*/Metric Card*/}
    </div>
  )
}

export default CardsSmall;
