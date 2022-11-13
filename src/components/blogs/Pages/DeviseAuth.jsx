import React from 'react';
import BlogContainer from '../../BlogContainer';
import Gist from 'react-gist';
import { Link } from 'react-router-dom';
const DeviseAuth = () => {
  return (
    <BlogContainer
      title="Rails 7 authentication with devise gem and confirm password"
      description="In this tutorial, we will learn to build a a school-like app in rails 7 and add authentication to it using the devise gem. In the next tutorial we will add several roles to the app"
    >
      <div className="p-6 rounded-md shadow dark:shadow-gray-800">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1586864387634-2f33030dab41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="rounded-md"
            alt="pagination with tailwind css and will paginate gem"
          />
        </div>
        <div className="text-center mt-12">
          <h3 className="my-3 text-[26px] font-semibold">
            Rails 7 authentication with devise gem with confirm password
            functionalities
          </h3>
        </div>
        <div className="mt-6">
          <p className="text-dark-900">
            In this tutorial, we will learn to build a a school-like app in
            rails 7 and add authentication to it using the{' '}
            <a href="https://github.com/heartcombo/devise">devise gem.</a>
          </p>
          <Link
            className="text-indigo-600 font-semibold my-8 py-8"
            to="/blogs/rails-7-authorization-using-cancancan-gem"
            rel="noopener noreferrer"
          >
            In the next tutorial we will add several roles to the app
          </Link>
          <div className="my-16 py-16">
            <h2 className="font-semibold text-2xl">
              Let's follow the following steps
            </h2>
          </div>

          <div>
            <div className="py-8 my-8">
              <h5 className="font-semibold text-xl">
                Step 1: Generate New Rails App with Tailwind CSS.
              </h5>
              <ul className="list-none mt-4">
                <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                  rails new my-app
                </code>
              </ul>
            </div>

            <div className="py-8 my-8">
              <h5 className="font-semibold text-xl">
                Step 2: Setup Devise Gem
              </h5>
              <ul className="list-none mt-4">
                <p>Add the devise gem to your gemfile and run bundle install</p>
                <div className="py-8 my-4">
                  <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                    gem "devise", github: "heartcombo/devise", branch: "main"
                  </code>
                </div>

                <div className="py-8 my-4">
                  <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                    bundle install && rails generate devise:install
                  </code>
                </div>

                <p className="py-3 rounded-md my-4 ">
                  Follow the guide in the console to setup the home page, error
                  messages and views
                </p>
              </ul>
            </div>

            <h5 className="font-semibold text-xl">Step 3: Setup User Model</h5>
            <ul className="list-none mt-4">
              <p>
                Generate the user model. Remember to migrate after generating
                user model.
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                rails generate devise User
              </code>
              <br className="my-4" />

              <p className="py-3  rounded-md my-4 ">
                We want to add custom fields to the user model, including first
                name, last name, phone number date of birth and gender. I also
                want to add email confirmation. So let's update the migration
                file
              </p>
            </ul>
            <Gist id="90f4f9273086469cb849a25b93bbe5fa" />

            <p>
              Update user model, include confirmable and add the required fields
            </p>

            <Gist id="e8451c9d711a95173c8ef59b2b84d906" />

            <div className="py-8 my-8">
              <h5 className="font-semibold text-xl">
                Step 4: Update controllers - Add strong parameters
              </h5>
              <ul className="list-none mt-4">
                <Gist id="95e38cd40c7b65b78260457b0e228433" />
              </ul>
            </div>

            <h5 className="font-semibold text-xl">
              Step 5: Update Views to show authenticated user status
            </h5>
            <ul className="list-none mt-4">
              <Gist id="bc7d8a8e5950a19eb25df3e130fb1e5f" />
            </ul>

            <h5 className="font-semibold">
              If you test the application now you will see that error messages
              are not showing up if user provide invalid data. Let's fix that
            </h5>
          </div>
          <div className="py-8 my-8">
            <h5 className="font-semibold text-xl">
              Step 6: Create a new controller to handle devise errors{' '}
              <code className="bg-gray-100 dark:bg-gray-800">
                controllers/users/devise_controller.rb
              </code>
            </h5>

            <div className="py-8 mt-4">
              <Gist id="9540d4dcee1f5c400ff0aab549a9c05e" />
            </div>
          </div>
          <div className="py-8 my-8">
            <h5 className="font-semibold text-xl">
              Step 7: Replace the content of{' '}
              <code className="bg-gray-100 dark:bg-gray-800">
                config/initializers/devise.rb
              </code>
            </h5>

            <div className="py-8 mt-4">
              <Gist id="f88af3e1cde91435abb80cfa299216a0" />
            </div>
          </div>
        </div>

        {/* conclusion */}
        <div className=" my-8">
          <h2 className="font-semibold text-xl">
            You should be able to test your application with no error.
          </h2>
        </div>
      </div>
    </BlogContainer>
  );
};

export default DeviseAuth;
