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
          Obviously I'm a Web Designer. Experienced with all stages of the
          development cycle for dynamic web projects.
        </p>
      </div>
      {/*end grid*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img src="assets/images/blog/01.jpg" alt="Alfred Boateng" />
          <div className="content p-6">
            <a
              href="blog-detail.html"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              Design your apps in your own way
            </a>
            <p className="text-slate-400 mt-3">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <div className="mt-4">
              <a
                href="blog-detail.html"
                className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img src="assets/images/blog/02.jpg" alt="Alfred Boateng" />
          <div className="content p-6">
            <a
              href="blog-detail.html"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              How apps is changing the IT world
            </a>
            <p className="text-slate-400 mt-3">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <div className="mt-4">
              <a
                href="blog-detail.html"
                className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Read More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
          <img src="assets/images/blog/03.jpg" alt="Alfred Boateng" />
          <div className="content p-6">
            <a
              href="blog-detail.html"
              className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
            >
              Smartest Applications for Business
            </a>
            <p className="text-slate-400 mt-3">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <div className="mt-4">
              <a
                href="blog-detail.html"
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
