import React from "react";
import { toast } from "react-toastify";

const DataTable = ({ formArray, handleDelete, handleEdit }) => {
  const handleCopy = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigator.clipboard.writeText(text);
  };

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
              <th className="w-100 bg-violet-700 text-white font-bold border border-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {formArray.map((item, index) => {
              return (
                <tr key={index} className="">
                  <td className="text-center py-2 border border-white">
                    <div className="flex justify-center">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                      <img
                        width="16"
                        src="https://img.icons8.com/material-two-tone/24/copy--v1.png"
                        alt="copy--v1"
                        className="mx-2 hover:cursor-pointer"
                        onClick={() => handleCopy(item.site)}
                      />
                    </div>
                  </td>
                  <td className="text-center py-2 border border-white">
                    <div className="flex justify-center">
                      {item.username}{" "}
                      <img
                        width="16"
                        src="https://img.icons8.com/material-two-tone/24/copy--v1.png"
                        alt="copy--v1"
                        className="mx-2 hover:cursor-pointer"
                        onClick={() => handleCopy(item.username)}
                      />
                    </div>
                  </td>
                  <td className="text-center py-2 border border-white">
                    <div className="flex justify-center">
                      {item.password}{" "}
                      <img
                        width="16"
                        src="https://img.icons8.com/material-two-tone/24/copy--v1.png"
                        alt="copy--v1"
                        className="mx-2 hover:cursor-pointer"
                        onClick={() => handleCopy(item.password)}
                      />
                    </div>
                  </td>
                  <td className="text-center py-2 border border-white">
                    <div className="flex justify-around w-1/2 mx-auto">
                      <lord-icon
                        className="hover:cursor-pointer"
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                        onClick={() => handleEdit(item.id)}
                      ></lord-icon>
                      <lord-icon
                        className="hover:cursor-pointer"
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                        onClick={() => handleDelete(item.id)}
                      ></lord-icon>
                    </div>
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
