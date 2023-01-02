import React from 'react';
import Gist from 'react-gist';
import BlogContainer from '../../BlogContainer';

const Performance = () => {
  return (
    <BlogContainer
      title={"Fix N+1 Performance issues in Rails 7 with Bullet Gem"}
      description={"In this tutorial,  we will fix N+1 Performance issues in Rails 7 with Bullet Gem"}
    >
      <div className="mt-6">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1532985716028-255a31586f6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
            className="rounded-md"
            alt="pagination with tailwind css and will paginate gem"
          />
        </div>
        <div className="text-center mt-12">
          <h3 className="my-3 text-[26px] font-semibold">
            Fix N+1 Performance issues in Rails 7 with Bullet Gem
          </h3>
        </div>
        <p className="text-blue-400">
          <span className="font-semibold">N+1 Problem</span> is a common problem
          in Rails. It occurs when you have a list of records and you want to
          access a property of each record in a different table. For example,
          you have a list of users and you want to display names and blog
          titles.
        </p>

        <div>
          <h5 className="font-semibold text-xl my-16 py-8">
            This is my post and user model
          </h5>
          <div className="py-18 my-16">
            <Gist id="fcb5e4a7bef506d3b06cd0e1b26f0a0a" />
          </div>
          <h5 className="font-semibold text-xl py-4">
            Let's try to see when N+1 performance issue arises
          </h5>
          <p className="text-blue-400 py-4">
            Eager loading is a technique that allows you to load associated data
            in a single query. If you load the associated data in controller and
            pass it to the view, it can cause N+1 performance issue.
          </p>
          <div className="py-18 my-16">
            <Gist id="2c16f27e3371db42d84093153bd0449e" />
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/assets/images/eager-loading.png"
              className="rounded-md"
              alt="n+1 problem"
            />
          </div>

          <p className="text-blue-400 py-4">
            If you do not eager load the data in views, it will cause N+1
            performance issue. The code below will cause N+1 performance issue.
          </p>

          <div className="py-18 my-16">
            <Gist id="5cfc71a679babfab3214ba702f42bb24" />
          </div>

          <div className="relative overflow-hidden rounded-md">
            <img
              src="/assets/images/avoid-eagerloading.png"
              className="rounded-md"
              alt="n+1 problem"
            />
          </div>

          <p className="text-blue-400 py-4">
            To avoid N+1 performance issue, you can use includes method in the
            view to eager load the data. The code below will not cause N+1
            performance issue. It will load all the data in a single query.
          </p>

          <div className="py-18 my-16">
            <Gist id="9d3f3130e51c728eb519322b9f451ae5" />
          </div>

          <div className="py-8">
            <h5 className="font-semibold text-xl py-8">
              Find N+1 Queries with Bullet
            </h5>
            <p className="text-blue-400">
              Bullet is a gem that is used to find N+1 queries. To setup Bullet,
              follow the steps below:
            </p>
            <div className="list-disc list-inside">
              <div className="py-4 my-8">
                <code className="text-indigo-600 font-semibold ">
                  gem 'bullet'
                </code>
              </div>
              <p className="text-blue-400">
                You can also add bullet to the development and test group in the
                Gemfile.
              </p>
              <h5 className="font-semibold text-xl py-8">
                Enable Bullet gem in the development environment
              </h5>
              <code className="text-indigo-600 font-semibold">
                rails g bullet:install
              </code>
              <h5 className="font-semibold text-xl py-8">
                Update the development.rb file
              </h5>
              <div className="py-18 my-16">
                <Gist id="22f44340a13f0426141068d442b8ceda" />
              </div>
            </div>
          </div>
          {/* conclusion */}
          <div className="py-8">
            <h5 className="font-semibold text-xl py-8">Conclusion</h5>
            <p className="text-blue-400">
              N+1 performance issue occurs when you have a list of records and
              you want to access a property of each record in a different table.
              To avoid N+1 performance issue, you can use includes method in the
              view to eager load the data. Bullet is a gem that is used to find
              N+1 queries. Bullet will log the N+1 queries in the development
              environment. Bullet will also display a notification in the
              browser when it detects N+1 queries.
            </p>
          </div>
        </div>
      </div>
    </BlogContainer>
  );
};

export default Performance;
