import React from 'react';
import BlogContainer from '../../BlogContainer';
import Gist from 'react-gist';

const RSpec = () => (
  <BlogContainer
    title={'Rails 7 RSpec Model Test Complementary Guide'}
    description={
      'In this tutorial we are going to talk about rails 7 and testing model with rspec models. I want to test user model created using device gem'
    }
  >
    <div className="mt-6">
      <div className="relative overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="rounded-md w-full"
          alt="pagination with tailwind css and will paginate gem"
        />
      </div>
      <div className="text-center mt-12">
        <h3 className="my-3 text-[26px] font-semibold">
          Rails 7 RSpec Model Test Complementary Guide
        </h3>
      </div>
      <p className="text-blue-400">
        In this tutorial we are going to talk about rails 7 and testing model
        with rspec. I want to test user model created using device gem.
      </p>

      <div>
        <h5 className="font-semibold text-xl my-16 py-8">
          Step 1: Install RSpec
        </h5>
        <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
          gem 'rspec-rails', '~> 6.0.0.rc1'
        </code>

        <h5 className="font-semibold text-xl py-4">Step 2: Setup RSpec</h5>
        <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
          rails g rspec:install
        </code>

        <h5 className="font-semibold text-xl py-8">
          Before we continue let's look at some concepts. First look at an
          example of a test:
        </h5>
        <div className="py-18 my-16">
          <Gist id="c5830aa3e086060b9210ee209ccbc581" />
        </div>
        <h5 className="font-semibold text-xl py-8">
          This is the model we are testing
        </h5>
        <div className="py-18 my-16">
          <Gist id="8bab71bd95111986f1e94ce6104d7f8e" />
        </div>

        <h5 className="font-semibold text-xl py-8">
          Let's explain the keywords used in rspec test:
        </h5>

        <div className="table-responsive bg-white dark:bg-slate-900 rounded">
          <table className="w-full text-sm text-left">
            <thead>
              <tr>
                <th
                  style={{ width: '20%' }}
                  className="border border-gray-100 dark:border-gray-700 p-4"
                >
                  <i className="ti-file" /> Command
                </th>
                <th className="border border-gray-100 dark:border-gray-700 p-4">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">context</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  Context it accept a class name. The idea of context is that it
                  encloses test of a certain type. You can decide to ignore it.
                  But it add details to you test code, example for user model we
                  can group test into the following
                  {/* example */}
                  <ul className="list-disc list-inside my-4">
                    <li className="my-4 py-2">
                      <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 my-8">
                        context 'when user is not logged in'
                      </code>
                    </li>
                    <li className="my-4 py-2">
                      <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 my-8">
                        {' '}
                        context 'when user is logged in'
                      </code>
                    </li>
                    <li className="my-4 py-2">
                      <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 my-8">
                        {' '}
                        context 'when user is admin'
                      </code>
                    </li>
                    <li className="my-4 py-2">
                      <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 my-8">
                        {' '}
                        context 'when user is not admin'
                      </code>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">describe</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  it is used to group a set of tests. It is usually used to
                  group tests for a particular class or method.
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">it</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  used to define a test. It is usually used to define a test for
                  a particular method.
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">expect</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  used to define an expectation. It is used to define the
                  expected behavior of a particular method.
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">to</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  used to define the matcher. It is used to define the matcher
                  that will be used to compare the actual result with the
                  expected result.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-blue-400 py-8">
          You can read
          <a
            className="text-indigo-600 font-semibold my-8 py-8"
            href="https://relishapp.com/rspec/rspec-expectations/v/3-12/docs/built-in-matchers/start-with-matcher"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            more about rspec matchers here
          </a>
        </p>
        <h5 className="font-semibold text-xl py-8">Hooks in RSpec</h5>
        <p className="text-blue-400">
          Hooks are used to run code before or after each test. There are 4
          types of hooks in RSpec:
        </p>
        <div className="table-responsive bg-white dark:bg-slate-900 rounded">
          <table className="w-full text-sm text-left">
            <thead>
              <tr>
                <th
                  style={{ width: '20%' }}
                  className="border border-gray-100 dark:border-gray-700 p-4"
                >
                  <i className="ti-file" /> Command
                </th>
                <th className="border border-gray-100 dark:border-gray-700 p-4">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">before(:each)</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  This hook is used to run code before each test.
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">after(:each)</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  This hook is used to run code after each test.
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">before(:all)</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  This hook is used to run code before all tests.
                </td>
              </tr>
              <tr>
                <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                  <code className="text-red-600">after(:all)</code>
                </td>
                <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-dark-900">
                  This hook is used to run code after all tests.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-8">
          <p className="text-blue-400">Example of using hooks:</p>
        </div>

        <div className="py-18 my-16">
          <Gist id="7a8921adfc3fa70e08b0d7795b5a65a2" />
        </div>

        <h5 className="font-semibold text-xl py-8">
          Setup Factory Bot for RSpec
        </h5>
        <p className="text-blue-400">
          Factory Bot is a gem that is used to create test data. As you can see
          from the above example, creating test data is a bit tedious. Factory
          Bot makes it easy to create test data. To setup Factory Bot for RSpec,
          follow the steps below:
        </p>
        <div className="list-disc list-inside">
          <div className="py-4 my-8">
            <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
              gem 'factory_bot_rails'
            </code>
          </div>

          <h5 className="font-semibold text-xl py-8">
            We can generate a factory for user model using the following
            command:
          </h5>
          <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
            rails g factory_bot:model user
          </code>
        </div>

        {/* generate a test for the  application model */}

        <h5 className="font-semibold text-xl py-8">
          Let's generate a test for the application model:
        </h5>
        <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
          rails g rspec:model application
        </code>
        <p className="text-blue-900 py-8">
          The above command will generate a test file for the application model.
          The test file will be located in the spec/models directory. The test
          file will be named application_spec.rb. It will also create a factory
          for the application model. The factory will be located in the
          spec/factories directory. The factory will be named application.rb.
        </p>
        <div className="py-18 my-16">
          <Gist id="e92e75fab3bb4e7d29450579dbc23813" />
        </div>

        <h5 className="font-semibold text-xl py-8">
          I also added Faker gem to generate random data for the test.
          <a
            className="text-indigo-600 font-semibold my-8"
            href="https://github.com/faker-ruby/faker"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can read more about Faker gem here
          </a>
        </h5>
        <p className="text-blue-400">
          Add the following line to the Gemfile and run bundle install:
        </p>

        <div className="py-4 my-4">
          <code className="bg-gray-100 dark:bg-gray-800 rounded-md py-3 my-4">
            gem 'faker'
          </code>
        </div>

        <h5 className="font-semibold text-xl py-8">
          Generate your factories for your models and Add a test for the
          application model:
        </h5>
        <div className="py-18 my-16">
          <Gist id="a97c21d67cd02b45a7206a5f4d2e1b4a" />
        </div>

        <h5 className="font-semibold text-xl py-4">
          You can add as many test you want. this is the basic setup we need to
          run test for our Models
        </h5>
        <h5 className="font-semibold text-xl py-8">Conclusion</h5>
        <p className="text-blue-400">
          In this blog, we learned how to setup RSpec for Rails. We also learned
          how to write tests for models. We also learned how to setup Factory
          Bot for RSpec. We also learned how to generate factories for our
          models. We also learned how to generate tests for our models.
        </p>
        <p className="text-blue-400">
          You can read more about RSpec here{' '}
          <a
            className="text-indigo-600 font-semibold my-8"
            href="https://relishapp.com/rspec/rspec-rails/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://relishapp.com/rspec/rspec-rails/docs
          </a>
        </p>
      </div>
    </div>
  </BlogContainer>
);

export default RSpec;
