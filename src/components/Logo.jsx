/* eslint-disable react/prop-types */
import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      BlogApp
    </div>
  );
}

export default Logo;
