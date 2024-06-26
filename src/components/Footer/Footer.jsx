import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="w-full overflow-hidden py-8 bg-bgColor text-textColor border-t border-gray-500">
      <div className="flex h-full items-center justify-between px-12 mx-auto">
        <div className="mb-4 inline-flex items-center">
          <Logo width="100px" />
        </div>
        <div>
          <p className="text-sm font-semibold">
            &copy; 2024{" "}
            <Link
              to="https://blog-app-mine.vercel.app/"
              target="_blank"
              className="text-textHover"
            >
              Abdul Kaiyum Fahim
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
