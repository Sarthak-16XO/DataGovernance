/* eslint-disable no-unused-vars */
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function SignUpButton() {
  const clerk = useClerk();
  return (
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => clerk.openSignUp({})}>Sign Up</button>
    
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

function Header() {
  return (

    <nav className="bg-slate-900 border-gray-200">
      <div className="md:max-w-screen-xl flex  md:flex-wrap gap-6 items-center justify-between mx-auto p-1 md:p-4">
        <Link to='/' className="flex items-center">
          {/* <img src={logo} className="h-10 mr-3 rounded-md" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">InfoGovern Solutions</span>
        </Link>

        <div className=" w-full md:block md:w-auto mt-4" id="navbar-default">
          <nav className="">
            <SignedOut>
              <ul className="flex flex-row md:gap-2">
                <li className=" px-4 py-2 rounded-md text-white">
                  <SignUpButton />
                </li>

                <li className=" px-4 py-2 rounded-md text-white">
                  <SignInButton />
                </li>
              </ul>
            </SignedOut>

            <SignedIn>
              <div className="flex flex-row items-center md:gap-8">
                <Link to="/dashboard" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm p-2 md:px-5 md:py-2.5 text-center mr-2 mb-2" >Dashboard</Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </nav>
        </div>
      </div>
    </nav>

  );
}

export default Header;
