import React from 'react';
import BlogContainer from '../components/BlogContainer';
import { Link } from 'react-router-dom';
const BlogPage = () => {
  return (
    <>
      <BlogContainer
        title={'Blog post from Alfred Boateng on React.js, Ruby on Rails and general programming'}
        description={
          ' Blog post from alfred boateng '
        }
      >
        <div className="grid grid-cols-1 gap-[30px]">
          <div className="grid grid-cols-1 text-center ">
            <h3 className="mb-8 text-3xl leading-normal font-medium text-indigo-700">
              My Blogs
            </h3>
          </div>
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://images.unsplash.com/photo-1586864387634-2f33030dab41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="devise authentication"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Rails 7 authentication with devise gem
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    We will learn to build a a school-like app in rails 7 and
                    add authentication to it using devise gem
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://images.unsplash.com/photo-1599959464432-458179a13352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/rails-7-authorization-using-cancancan-gem"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Rails 7 Authorization Using Cancancan Gem
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    In this tutorial, we are going to add the ability to
                    restrict users based on their role There will be several
                    roles and each role will have different access to the app
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/blogs/rails-7-authorization-using-cancancan-gem"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="/assets/images/paginate.png"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/add-pagination-to-rails-7-app-using-will-paginate-gem-and-tailwind-css"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Add Pagination to Rails 7 app using Will_Paginate gem and
                  Tailwind CSS
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    In this tutorial, we will learn to add pagination to our
                    rails 7 app using Tailwind CSS and the will_paginate gem.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/blogs/add-pagination-to-rails-7-app-using-will-paginate-gem-and-tailwind-css"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/rails-7-rspec-model-test-complementary-guide"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Rails 7 RSpec Model Test Complementary Guide
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    Rails 7 and testing model with rspec models using device gem
                  </p>
                </div>
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
          {/*end content*/}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://images.unsplash.com/photo-1532985716028-255a31586f6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/fix-n1-performance-in-rails-with-bullet-gem"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Fix N+1 Performance issues in Rails 7 with Bullet Gem
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    Lets learn to improve the performance of our application
                    with lazy loading
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/blogs/fix-n1-performance-in-rails-with-bullet-gem"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*end content*/}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/lets-create-an-api-in-rails-7"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Lets create an API in Rails 7
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    In this blog, we will create an API in Rails 7 with Active
                    Model Serializer Gem for JSON response format.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/blogs/lets-create-an-api-in-rails-7"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*end content*/}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://miro.medium.com/max/720/0*-V3I0GqsEqk49w3z"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <a
                  href="https://medium.com/@learnwithalfred/react-with-redux-toolkit-and-createasyncthunk-complementary-guide-c3a3bb2a1113"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  React with Redux toolkit and CreateAsyncThunk Complementary
                  Guide
                </a>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    This tutorial we are going to build a application from
                    scratch using redux toolkit. We will fetch API data and
                    display on the screen.
                  </p>
                </div>
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
          </div>
          {/* ========================== */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png"
                  alt="the box model"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <Link
                  to="/blogs/the-box-model"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  The Box Model in CSS
                </Link>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    he box model is the foundation of CSS. It is the way that
                    CSS treats each HTML element as a box. The box model is
                    essentially a box ...
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/blogs/the-box-model"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ========================== */}

          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://miro.medium.com/max/720/0*NMOv6NY0uJI0VKM6"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <a
                  href="https://medium.com/@learnwithalfred/before-you-enroll-in-an-online-course-there-is-something-you-should-know-a2b0849b5ce9"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Before you enroll in an online course, there is something you
                  should know
                </a>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    Not all courses are good, and not all courses are bad! Find
                    out why...
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://medium.com/@learnwithalfred/before-you-enroll-in-an-online-course-there-is-something-you-should-know-a2b0849b5ce9"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <div className="lg:flex relative">
              <div className="relative md:shrink-0">
                <img
                  className="h-full w-full object-cover lg:w-52 lg:h-56"
                  src="https://miro.medium.com/max/720/0*k6Eh1qMJGl4pTIRJ"
                  alt="alfred"
                />
              </div>
              <div className="p-6 flex flex-col lg:h-56 justify-center">
                <a
                  href="https://medium.com/@learnwithalfred/four-free-well-structured-resources-to-learn-how-to-code-c0d5f3d29858"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Four Free Well Structured Resources to learn to code
                </a>
                <div className="my-auto">
                  <p className="text-dark-800 mt-3">
                    The internet is full of resources. Coding materials are no
                    different. But the problem is ...
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://medium.com/@learnwithalfred/four-free-well-structured-resources-to-learn-how-to-code-c0d5f3d29858"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end content*/}
        </div>
      </BlogContainer>
    </>
  );
};

export default BlogPage;
