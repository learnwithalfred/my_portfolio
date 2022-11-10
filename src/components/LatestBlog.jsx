import React from 'react';

const LatestBlog = () => {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Blogs
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Latest News
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          I write about web development, programming, and other tech related, and non-tech related topics.
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
            <p className="text-slate-400 mt-3">
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
            src="https://miro.medium.com/max/1100/0*NMOv6NY0uJI0VKM6"
            alt="Alfred Boateng"
          />
          <div className="content p-6">
            <a
              href="https://medium.com/@learnwithalfred/before-you-enroll-in-an-online-course-there-is-something-you-should-know-a2b0849b5ce9"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              Before you enroll in an online course, there is something you
              should know
            </a>
            <p className="text-slate-400 mt-3">
              Although there are several courses out there, finding a good one
              is not an easy job.
            </p>
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
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img
            src="https://miro.medium.com/max/1100/0*k6Eh1qMJGl4pTIRJ"
            alt="Alfred Boateng"
          />
          <div className="content p-6">
            <a
              href="https://medium.com/@learnwithalfred/four-free-well-structured-resources-to-learn-how-to-code-c0d5f3d29858"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              Four Free Well Structured Resources to learn to code
            </a>
            <p className="text-slate-400 mt-3">
              Coding materials are no different. But the problem is how to find
              well-structured contents,
            </p>
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
      {/*end grid*/}
    </div>
  );
};

export default LatestBlog;
