import React from 'react';
import BlogContainer from '../../BlogContainer';
import Gist from 'react-gist';
const DeviseAuth = () => {
  return (
    <BlogContainer>
      <div className="p-6 rounded-md shadow dark:shadow-gray-800">
        <div className="relative overflow-hidden rounded-md">
          <iframe
            src="https://www.youtube.com/embed/2dljZWZQLFQ?feature=oembed"
            className="w-full"
            allow="autoplay; encrypted-media"
            style={{ height: 433 }}
            allowFullScreen
            title="alfred"
          />
        </div>
        <div className="text-center mt-12">
          <h3 className="my-3 text-[26px] font-semibold">
            Rails 7 authentication with devise gem and confirm password
          </h3>
        </div>
        <div className="mt-6">
          <p className="text-slate-400">
            In this tutorial, we will learn to build a a school-like app in
            rails 7 and add authentication to it using the{' '}
            <a href="https://github.com/heartcombo/devise">devise gem</a>
            There will be several roles and each role will have different access
            to the app.
          </p>
          <ol>
            <li className="flex items-center">
              <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
              Teachers can add lessons
            </li>

            <li className="flex items-center">
              <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
              Students can take lessons, but cannot create or edit lessons
            </li>

            <li className="flex items-center">
              <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
              Any logged-in user can read book
            </li>

            <li className="flex items-center">
              <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
              Users cannot read, or take lessons if not authenticated
            </li>
          </ol>
          <p className="text-indigo-600 italic border-x-4 border-indigo-600 rounded-tl-xl rounded-br-xl mt-3 p-3">
            The starter files can be found at
            <a
              href="https://github.com/learnwithalfred/rails-class/tree/setup"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/learnwithalfred/rails-class/tree/setup
            </a>
          </p>

          <div className>
            <h5 className="font-semibold text-xl">Step 1</h5>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href className="text-slate-400">
                  <i className="mdi mdi-arrow-right text-indigo-600 mr-2" />
                  Generate New Rails App with Tailwind CSS.
                </a>
              </li>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                rails new rails-class --database=postgresql
              </code>
              <p className="py-3 px-4  rounded-md my-4 ">
                Remember to create a new database in your postgresql server, and
                update the database.yml file with the correct credentials.
                <br />
                <br />
                Setup your home page
              </p>
            </ul>

            <h5 className="font-semibold text-xl">Step 2</h5>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href className="text-slate-400">
                  <i className="mdi mdi-arrow-right text-indigo-600 mr-2" />
                  Setup Devise Gem
                </a>
              </li>
              <p>Add the devise gem to your gemfile and run bundle install</p>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                gem 'devise'
              </code>
              <br className="my-4" />
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                bundle install rails && generate devise:install
              </code>
              <p className="py-3 px-4  rounded-md my-4 ">
                Follow the guide in the console to setup the home page, error
                messages. You can also customize the devise views by running the
                following command
              </p>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                rails generate devise:views
              </code>
            </ul>

            <h5 className="font-semibold text-xl">Step 3</h5>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href className="text-slate-400">
                  <i className="mdi mdi-arrow-right text-indigo-600 mr-2" />
                  Setup User Model
                </a>
              </li>
              <p>Generate the user model and add the required fields to the</p>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                rails generate devise User
              </code>
              <br className="my-4" />

              <p className="py-3 px-4  rounded-md my-4 ">
                We want to add other fields to the user model. I also want to
                add email confirmation. So let's update the migration file
              </p>
            </ul>
            <Gist id="90f4f9273086469cb849a25b93bbe5fa" />

            <p>
              Update user model, include confirmable and add the required fields
            </p>

            <Gist id="e8451c9d711a95173c8ef59b2b84d906" />

            <h5 className="font-semibold text-xl">Step 4</h5>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href className="text-slate-400">
                  <i className="mdi mdi-arrow-right text-indigo-600 mr-2" />
                  Update controllers
                </a>
              </li>
              <p>
                We added some additional fields to the user model so we need to
                update the controllers. Update
                `app/controllers/application_controller.rb` to include the new
                fields`
              </p>
              <Gist id="95e38cd40c7b65b78260457b0e228433" />
            </ul>

            <h5 className="font-semibold text-xl">Step 5</h5>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href className="text-slate-400">
                  <i className="mdi mdi-arrow-right text-indigo-600 mr-2" />
                  Update Views to show authenticated user status
                </a>
              </li>
              <Gist id="bc7d8a8e5950a19eb25df3e130fb1e5f" />
            </ul>

            <h5 className="font-semibold text-xl">Step 6</h5>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href className="text-slate-400">
                  <i className="mdi mdi-arrow-right text-indigo-600 mr-2" />
                  Update devise.rb to get rid of errors
                </a>
              </li>
              <p>config/initializers/devise.rb</p>
              <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                config.navigational_formats = ['*/*', :html, :turbo_stream]
              </code>
              <br className="my-4" />
            </ul>
          </div>

          <p className="text-slate-400 mt-3">
            Its now time to test your application. You can signup and login to a
            new account.
          </p>
        </div>
      </div>
    </BlogContainer>
  );
};

export default DeviseAuth;
