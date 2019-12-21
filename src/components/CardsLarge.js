import React from 'react';

const CardsLarge = () => {
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <h5 className="font-bold uppercase text-gray-600">Graph</h5>
        </div>
        <div className="p-5">
          <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined" />
        </div>
      </div>
    </div>
  )
}

export default CardsLarge;
