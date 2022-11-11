import React from 'react';

const RightSideBar = () => {
  return (
    <div className="lg:col-span-4 md:col-span-6">
      <div className="sticky top-20">
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
          Author
        </h5>
        <div className="text-center mt-8">
          <img
            src="/assets/images/client/05.jpg"
            className="h-24 w-24 mx-auto rounded-full shadow mb-4"
            alt
          />
          <a
            href
            className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out"
          >
            Cristina Romsey
          </a>
          <p className="text-slate-400">Content Writer</p>
        </div>
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
          Recent post
        </h5>
        <div className="flex items-center mt-8">
          <img
            src="/assets/images/blog/06.jpg"
            className="h-16 rounded-md shadow dark:shadow-gray-800"
            alt
          />
          <div className="ml-3">
            <a href className="font-semibold hover:text-indigo-600">
              Consultant Business
            </a>
            <p className="text-sm text-slate-400">1st May 2022</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            src="/assets/images/blog/07.jpg"
            className="h-16 rounded-md shadow dark:shadow-gray-800"
            alt
          />
          <div className="ml-3">
            <a href className="font-semibold hover:text-indigo-600">
              Grow Your Business
            </a>
            <p className="text-sm text-slate-400">1st May 2022</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            src="/assets/images/blog/08.jpg"
            className="h-16 rounded-md shadow dark:shadow-gray-800"
            alt
          />
          <div className="ml-3">
            <a href className="font-semibold hover:text-indigo-600">
              Look On The Glorious Balance
            </a>
            <p className="text-sm text-slate-400">1st May 2022</p>
          </div>
        </div>
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
          Social sites
        </h5>
        <ul className="list-none text-center mt-8">
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="facebook" className="h-4 w-4" />
            </a>
          </li>
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="instagram" className="h-4 w-4" />
            </a>
          </li>
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="twitter" className="h-4 w-4" />
            </a>
          </li>
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="linkedin" className="h-4 w-4" />
            </a>
          </li>
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="github" className="h-4 w-4" />
            </a>
          </li>
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="youtube" className="h-4 w-4" />
            </a>
          </li>
          <li className="inline">
            <a
              href
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
            >
              <i data-feather="gitlab" className="h-4 w-4" />
            </a>
          </li>
        </ul>
        {/*end icon*/}
      </div>
    </div>
  );
};

export default RightSideBar;
