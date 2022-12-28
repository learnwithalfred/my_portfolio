import React from 'react';
import { Link } from 'react-router-dom';
const LatestBlog = () => {
  return (
    <div className="container md:mt-24 mt-16 ">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Blogs
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Latest News
        </h3>
        <p className="text-dark-800 max-w-xl mx-auto">
          I write about web development, programming, and other tech related,
          and non-tech related topics.
        </p>
      </div>
      {/*end grid*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img
            src="https://miro.medium.com/max/1400/0*-V3I0GqsEqk49w3z"
            alt="Alfred Boateng"
          />
          <div className="content p-6">
            <a
              href="https://medium.com/@learnwithalfred/react-with-redux-toolkit-and-createasyncthunk-complementary-guide-c3a3bb2a1113"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              React with Redux toolkit and CreateAsyncThunk Complementary Guide
            </a>
            <p className="text-dark-800 mt-3">
              This tutorial we are going to build a application from scratch
              using redux toolkit.
            </p>
            <div className="mt-4">
              <a
                href="https://medium.com/@learnwithalfred/react-with-redux-toolkit-and-createasyncthunk-complementary-guide-c3a3bb2a1113"
                className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586864387634-2f33030dab41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Alfred Boateng"
          />
          <div className="content p-6">
            <Link
              to="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              Rails 7 authentication with devise gem
            </Link>
            <p className="text-dark-800 mt-3">
              We will learn to build a a school-like app in rails 7 and add
              authentication to it using devise gem
            </p>
            <div className="mt-4">
              <a
                href="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
                className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Alfred Boateng"
          />
          <div className="content p-6">
            <Link
              to="/blogs/rails-7-rspec-model-test-complementary-guide"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              Rails 7 and testing model with rspec models using device gem
            </Link>
            <p className="text-dark-800 mt-3">
              Rails 7 and testing model with rspec models using device gem
            </p>
            <div className="mt-4">
              <Link
                to="/blogs/rails-7-rspec-model-test-complementary-guide"
                className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*end grid*/}
    </div>
  );
};

export default LatestBlog;
