import React from 'react';
import BlogContainer from '../../BlogContainer';
import Gist from 'react-gist';
import { Link } from 'react-router-dom';
const Authorize = () => {
  return (
    <>
      <BlogContainer
        title={' Rails 7 Authorization Using Cancancan Gem'}
        description={
          'In this tutorial, we are going to add the ability to restrict users based on their role There will be several roles and each role will have different access to the app.'
        }
      >
        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
          <div className="relative  rounded-md">
            <img
              src="https://images.unsplash.com/photo-1599959464432-458179a13352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="rounded-md object-cover w-full"
              alt="pagination with tailwind css and will paginate gem"
            />
          </div>
          <div className="text-center mt-12">
            <h3 className="my-3 text-[26px] font-semibold">
              Rails 7 Authorization Using Cancancan Gem
            </h3>
          </div>
          <div className="mt-6">
            <p className="text-dark-900">
              In this tutorial, we are going to add the ability to restrict
              users based on their role. There will be several roles and each
              role will have different access to the app.
            </p>
            <ol className="my-8 py-8">
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

            <div className="my-8 py4">
              <Link
                className="text-indigo-600 font-semibold my-8 py-8"
                to="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
                rel="noopener noreferrer"
              >
                Checkout the first lesson on rails authentication with devise
                gem here
              </Link>
            </div>

            <div>
              <h5 className="font-semibold text-xl my-16 py-8">
                Step 1: First, we need to update our user model and add a role
                for the user
              </h5>
              <ul className="list-none my-4">
                <code className="bg-gray-100 dark:bg-gray-800 rounded-md my-16 p-4 ">
                  rails g migration add_role_to_user
                </code>
              </ul>
              <Gist id="39f5fedbd21ab1f48ad9be12f802a27b" />

              <h5 className="font-semibold text-xl py-4">
                Step 2: Update user model, register the roles you want to use
                and migrate the database
              </h5>
              <ul className="list-none mt-4">
                <Gist id="3bc647c0669bf390f0e16720946bad27" />
                <p className="text-pink-900">
                  In the above, we define the roles we are expecting in our
                  application. A logged-in user could be a user, student,
                  teacher, staff, or admin Then we are saying that when a user
                  logs in we want to set his default role as a user
                </p>
              </ul>

              <h5 className="font-semibold text-xl py-4">
                Step 3 - Add Cancancan Gem
              </h5>
              <ul className="list-none mt-4">
                <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                  gem 'cancancan'
                </code>
                <h5 className="font-semibold text-xl py-8">
                  Generate Ability Model
                </h5>
                <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
                  rails g cancan:ability
                </code>

                <p className="text-pink-900 text-xl  py-8">
                  This will generate an ability model in the app/models folder.
                  CanCanCan offers four aliases: :read, :create, :update,
                  :destroy for the actions. These aren't the same as the seven
                  Restful actions in Rails. This is what the cancancan actions
                  translate to the REST actions
                </p>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  :read translates to index, show, and new
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  :create translates to create
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  :update translates to edit and update
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  :destroy translates to destroy
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  :manage translates to all of the above
                </li>
                <p className="text-pink-900 text-xl font-semibold py-16">
                  Update Abilities model{' '}
                </p>
              </ul>
              <Gist id="903ddb065802ac988554441b1e476f90" />

              <h5 className="font-semibold text-xl py-8">
                Let's go through this line by line
              </h5>

              <ul className="list-none mt-4">
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  We are saying that if the user is an admin, he can do anything
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  If the user is a teacher, he can create lessons
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  If the user is a student, he can take lessons
                </li>
                <li className="flex items-center">
                  <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                  If the user is a user, he can read books
                </li>
              </ul>

              <div className=" rounded-md my-16 py-8">
                <h5 className="font-semibold text-xl my-16">
                  Step 5: Add load_and_authorize_resource to controllers that
                  need
                </h5>
              </div>

              <p className="text-pink-900">
                We need to add the load_and_authorize_resource to the
                controllers. If the controller requires authorization, we need
                to add the load_and_authorize_resource to the controller. This
                will load the resource and authorize it. If the user is not
                authorized, it will throw an exception. Like the first example
                below
              </p>

              <p className="text-pink-900 py-8">
                If the controller does not require authorization, we do not need
                to add the load_and_authorize_resource to the controller. We
                only need to authorize the controller action that require
                authentication or authorization
              </p>

              <p className="text-pink-900 py-8">
                In the example2 below we want to check if user is authorized to
                create a new book, before we allow access to the new form
              </p>
              <div className="rounded-md my-16 py-8">
                <Gist id="5d844f78bbf42f8f9997d6ff057e7559" />
              </div>

              <div className="py-16">
                <h5 className="font-semibold text-xl">
                  Step 6: Allow only authorize users to read{' '}
                </h5>
                <ul className="list-none mt-4">
                  <p>
                    We can authorize a user before allowing read access in view
                    html files
                  </p>
                  <Gist id="fa44944b57ae3995ae42dccf2199c37a" />
                </ul>
              </div>

              <h5 className="font-semibold text-xl">
                Step 7: Handle unauthorized access
              </h5>
              <ul className="list-none mt-4">
                <p>
                  We need to handle unauthorized access. We can do this by
                  adding a rescue_from block in the application controller
                </p>
                <Gist id="db921894011a18e5cbaad91c1c5a94f1" />
              </ul>
            </div>

            <p className="text-dark-900 mt-3">
              You should be able to test your application now
            </p>
          </div>
        </div>
      </BlogContainer>
    </>
  );
};

export default Authorize;
