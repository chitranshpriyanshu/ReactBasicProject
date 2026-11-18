import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl p-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-16"
              alt="Logo"
            />
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Resources</h2>
              <ul className="text-gray-500">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Follow</h2>
              <ul className="text-gray-500">
                <li><a href="https://github.com" target="_blank">Github</a></li>
                <li><Link to="/">Discord</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-500">
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        <p className="text-sm text-gray-500 text-center">
          © 2023 hiteshchoudhary. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
