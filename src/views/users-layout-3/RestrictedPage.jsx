import React from 'react';


const RestrictedPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 rounded-full p-3 border border-red-500 text-red-500 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-3xl font-bold text-center text-gray-800">
                Access Restricted
              </h1>
            </div>
            <p className="text-gray-600 mt-4">
              You do not have permission to access this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictedPage;
