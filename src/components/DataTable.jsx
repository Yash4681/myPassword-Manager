import React from "react";

const DataTable = ({ formArray }) => {
  return (
    <div className="my-5">
      <h2 className="text-2xl my-2 font-bold">Your Passwords</h2>
      {formArray.length === 0 ? (
        <p>No passwords to display.</p>
      ) : (
        <table className="table-auto bg-violet-50 rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="w-100 bg-violet-700 text-white font-bold border border-white">
                Website
              </th>
              <th className="w-100 bg-violet-700 text-white font-bold border border-white">
                Username
              </th>
              <th className="w-100 bg-violet-700 text-white font-bold border border-white">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {formArray.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="w-100 text-center py-2 border border-white">
                    <a href={item.site} target="_blank">
                      {item.site}
                    </a>
                  </td>
                  <td className="w-100 text-center py-2 border border-white">
                    {item.username}
                  </td>
                  <td className="w-100 text-center py-2 border border-white">
                    {item.password}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
