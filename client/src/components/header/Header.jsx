import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-32 mx-auto p-6 justify-center items-center">
      <h3 className="flex-1 text-4xl font-bold">Mern Blog App</h3>
      <ul className="flex gap-20 cursor-pointer">
        <Link to={"/"}>
          <li className="text-xl font-bold">Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li className="text-xl font-bold">Add Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
