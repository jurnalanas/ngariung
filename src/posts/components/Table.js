import React from 'react';

const Table = () => {
  return (
    <div className="w-full p-3">

      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <h5 className="font-bold uppercase text-gray-600">Table</h5>
        </div>
        <div className="p-5">
          <table className="w-full p-5 text-gray-700">
            <thead>
              <tr>
                <th className="text-left text-blue-900">Name</th>
                <th className="text-left text-blue-900">Side</th>
                <th className="text-left text-blue-900">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Obi Wan Kenobi</td>
                <td>Light</td>
                <td>Jedi</td>
              </tr>
              <tr>
                <td>Greedo</td>
                <td>South</td>
                <td>Scumbag</td>
              </tr>
              <tr>
                <td>Darth Vader</td>
                <td>Dark</td>
                <td>Sith</td>
              </tr>
            </tbody>
          </table>
          <p className="py-2"><a href="#">See More issues...</a></p>
        </div>
      </div>

    </div>
  );
}

export default Table;
