import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

const Dashboard = () => {
  const { userFirstName, userLastName, userEmail, userAge } =
    useContext(UserContext);

  // Show message if no user data
  if (!userFirstName || !userLastName || !userEmail || !userAge) {
    return <p className="text-center text-red-500">Data not found</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">User Details</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">First Name</th>
              <th className="px-4 py-2 text-left">Last Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">{userFirstName}</td>
              <td className="px-4 py-2">{userLastName}</td>
              <td className="px-4 py-2">{userEmail}</td>
              <td className="px-4 py-2">{userAge}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
