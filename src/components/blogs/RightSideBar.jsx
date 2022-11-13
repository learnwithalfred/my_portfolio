import React from 'react';
import { Link } from 'react-router-dom';
const RightSideBar = () => {
  return (
    <div className="lg:col-span-4 md:col-span-6">
      <div className="sticky top-20">
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
          Author
        </h5>
        <div className="text-center mt-8">
          <img
            src="/assets/images/alfred_.jpg"
            className="h-24 w-36 mx-auto rounded-full shadow mb-4"
            alt="alfred Boateng"
          />
          <p
            className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out"
          >
            Alfred Boateng
          </p>
          <p className="text-slate-400">Full-stack Developer</p>
        </div>
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
          Recent post
        </h5>
        <div className="flex items-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1586864387634-2f33030dab41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="h-16 rounded-md shadow dark:shadow-gray-800"
            alt="devise authentication"
          />
          <div className="ml-3">
            <Link
              to="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
              className="font-semibold hover:text-indigo-600"
            >
              Rails 7 authentication with devise gem
            </Link>
            
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            src="https://images.unsplash.com/photo-1532985716028-255a31586f6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
            className="h-16 rounded-md shadow dark:shadow-gray-800"
            alt="speed optimization n+1"
          />
          <div className="ml-3">
            <Link
              to="/blogs/fix-n1-performance-in-rails-with-bullet-gem"
              className="font-semibold hover:text-indigo-600"
            >
              Fix N+1 Performance issues in Rails 7
            </Link>
            
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            src="https://miro.medium.com/max/720/0*-V3I0GqsEqk49w3z"
            className="h-16 rounded-md shadow dark:shadow-gray-800"
            alt="React redux toolkit"
          />
          <div className="ml-3">
            <a
              href="https://medium.com/@learnwithalfred/react-with-redux-toolkit-and-createasyncthunk-complementary-guide-c3a3bb2a1113"
              className="font-semibold hover:text-indigo-600"
            >
              React with Redux toolkit and CreateAsyncThunk Complementary Guide
            </a>
          </div>
        </div>
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
          Social sites
        </h5>
        <ul className="list-none text-center mt-8">
          <li className="inline">
            <a
              href="https://linkedin.com/in/learnwithalfred"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600 mx-2"
            >
              <i className="uil uil-linkedin" title="Linkedin" />
            </a>
          </li>
          <li className="inline">
            <a
              href="https://github.com/learnwithalfred"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600 mx-2"
            >
              <i className="uil uil-github" title="Linkedin" />
            </a>
          </li>
          <li className="inline">
            <a
              href="https://twitter.com/kb_alfred"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600 mx-2"
            >
              <i className="uil uil-twitter align-middle" title="twitter" />
            </a>
          </li>
          <li className="inline">
            <a
              href="mailto:learnwithalfred@gmail.com"
              className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600 mx-2"
            >
              <i className="uil uil-envelope align-middle" title="email" />
            </a>
          </li>
        </ul>
        {/*end icon*/}
      </div>
    </div>
  );
};

export default RightSideBar;
