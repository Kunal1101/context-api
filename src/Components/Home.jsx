import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid place-content-center h-100">
      <p>Click to register user</p>
      <Link
        className="bg-blue-600 text-white py-1 mt-2 rounded-4xl text-center"
        to="register"
      >
        Register
      </Link>
    </div>
  );
};

export default Home;
