import React from "react";
import NextLink from "next/link";
import Layout from "../components/Layout";

function LoginPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-r  from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-4 md:flex">
        <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row">
          {/* {logo} */}
          <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2">
            <h1 className="font-medium text-3xl">Grove Educate</h1>
            <p className="italic text-lg">CTH-EGG</p>
          </div>
          <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2">
            {/* {welcome} */}
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-green-400 text-xl">
                Welcome Back
              </h1>
              <p>Login to Your account</p>
            </div>
            {/* {input} */}
            <form className="flex flex-col items-center space-y-4">
              <div className="relative">
                <span className="absolute flex insert-y-0 items-center pl-4 text-gray-400">
                  {/* {UserIcon} */}
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-green-300 "
                  placeholder="username"
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute flex insert-y-0 items-center pl-4 text-gray-400">
                  {/* {UserIcon} */}
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-green-300 "
                  placeholder="password"
                  type="password"
                />
              </div>
              <button className="bg-green-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500 type='submit' ">
                {/* <LoginIcon/> */}
                Login
              </button>
            </form>
            <div className="flex flex-col items-center">
              <p className="italic">
                Join us now.
                <NextLink href="/">
                  <a className="ml-1 text-green-500 hover:underline">
                    Register Here
                  </a>
                </NextLink>
              </p>
              <p className="italic">
                Lost Your Password?
                <NextLink href="/">
                  <a className="ml-l text-green-500 hover:underline">
                    Reset Password here
                  </a>
                </NextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
