import React from "react";

const Data = ({ data1 }) => {
  return (
    <div>
      <table className="min-w-full border-2 border-white mt-11 bg-white">
        <thead className=" w-full">
          <tr className=" w-full bg-black ">
            <th className="px-4 py-2 border-2 border-white  text-center text-xl font-bold  text-red-500 uppercase tracking-wider">
              Faculty Name
            </th>
            <th className="px-4 py-2 border-2 border-white text-center text-xl font-bold  text-red-500 uppercase tracking-wider">
              Course Name
            </th>
            <th className="px-4 py-2  border-2 border-white text-center text-xl font-bold  text-red-500 uppercase tracking-wider">
              C Skills
            </th>
            
          </tr>
        </thead>
        <tbody className="bg-white   divide-gray-200">
          {data1.map((item, index) => (
            <tr className=" bg-gray-500 rounded-xl " key={index}>
              <td className="px-1 py-2   border-2 border-white text-center font-bold  text-xl text-gray-900">
                {item.fName}
              </td>
              <td className="px-1 py-2  border-2 border-white text-center font-bold  text-xl text-gray-900">
                {item.cName}
              </td>
              <td className="px-1 py-2  border-2 border-white text-center font-bold  text-xl text-gray-900">
                {item.cSkills}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Data;
