import React from 'react';
import BlogContainer from '../../BlogContainer';
import Gist from 'react-gist';


const Pagination = () => {
  return (
    <BlogContainer
      title="Add Pagination to Rails 7 app using Will_Paginate gem and Tailwind CSS"
      description="In this tutorial, we will learn to add pagination to our rails 7 app using Tailwind CSS and the will_paginate gem."
    >
      <div className="p-6 rounded-md shadow dark:shadow-gray-800">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/assets/images/paginate.png"
            className="rounded-md"
            alt="pagination with tailwind css and will paginate gem"
          />
        </div>
        <div className="text-center mt-2">
          <h3 className="my-3 text-[26px] font-semibold">
            Add Pagination to Rails 7 app using Will_Paginate gem and Tailwind
            CSS
          </h3>
        </div>
        <div className="mt-6">
          <p className="text-slate-400">
            In this tutorial, we will learn to add pagination to our rails 7 app
            using Tailwind CSS and the will_paginate gem.
          </p>

          <div>
            <h5 className="font-semibold text-xl my-16 py-8">
              Step 1: Add gem to your Gemfile
            </h5>
            <code className="bg-gray-100 dark:bg-gray-800 rounded-md">
              gem 'will_paginate', '~> 3.3'
            </code>

            <h5 className="font-semibold text-xl py-4">
              Step 2: Define the number of items per page
            </h5>
            <ul className="list-none">
              <Gist id="f22f3e3f174841d7919a10f62d472233" />

              <p className="text-slate-400">
                In this example, we are paginating the Payments and we are
                displaying 15 items per page.
              </p>
            </ul>

            <h5 className="font-semibold text-xl py-4">
              Step 3 - Update the view with some styles
            </h5>
            <div className="">
              <p className="text-slate-400">
                I found some styles on github that I liked and I am going to use
                them. You can find the styles here. I am going to copy the
                styles and paste them in my application.css file.
              </p>
              <a
                className="text-indigo-600 py-8 my-8"
                href="https://mislav.github.io/will_paginate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mislav.github.io/will_paginate/
              </a>

              <p className="text-slate-400 py-8 my-8">
                Then add the pagination and style with Tailwind CSS and
                flickr_pagination from the above styles.
              </p>
            </div>
            <Gist id="8e38cfae347926934d1e3b06d818fef6" />

            <h5 className="font-semibold text-xl py-4">
              Thats it. We are done.
            </h5>
          </div>
        </div>
      </div>
    </BlogContainer>
  );
};

export default Pagination;
