import React from 'react';
import BlogContainer from '../../BlogContainer';
import Gist from 'react-gist';

const RailsApi = () => {
  return (
    <BlogContainer>
      <div className="text-center mt-2">
        <h3 className="my-3 text-[26px] font-semibold">
          Lets create an API in Rails 7 with JWT Authentication and Active Model
          Serializer Gem for JSON response format
        </h3>
      </div>

      <div className="mt-6">
        <p className="text-blue-400">
          <span className="font-semibold">API</span> stands for Application
          Programming Interface. It is a set of rules that allow two software
          programs to communicate with each other. It is a software intermediary
          that allows two applications to talk to each other. In other words, an
          API is the messenger that delivers your request to the provider that
          you’re requesting it from and then delivers the response back to you.
        </p>
        <p className="text-blue-400">
          In this blog, we will create an API in Rails 7 with JWT Authentication
          and Active Model Serializer Gem for JSON response format.
        </p>

        <h5 className="font-semibold text-xl my-16 py-8">
          Lets setup a new Rails 7 API project
        </h5>
        <p className="text-blue-400">
          We will use the following command to create a new Rails 7 API project.
        </p>
        <div className="py-18 my-16">
          <code className="text-indigo-600 font-semibold ">
            rails new rails-api --api
          </code>
        </div>

        <h5 className="font-semibold text-xl my-16 py-8">
          Lets create a User and a Book scaffold for testing
        </h5>
        <div className="py-18 my-16">
          <code className="text-indigo-600 font-semibold ">
            rails g scaffold User name
            <br />
            rails g scaffold Book title user:references
          </code>
        </div>

        <h5 className="font-semibold text-xl my-16 py-8">
          Add relationship between User and Book
        </h5>

        <div className="py-18 my-16">
          <Gist id="02cedfd0158ea0a1df13d208c17a5c96" />
        </div>

        <p className="text-blue-400">
          I added faker gem to generate fake data for testing. You can add it by
          running the following command. If you don't want to add faker gem, you
          can skip this step.
        </p>
        <div className="py-18 my-16">
          <code className="text-indigo-600 font-semibold ">
            bundle add faker
          </code>
        </div>

        <h5>
          I added the following code to db/seeds.rb file to generate fake data
          for testing. You can skip this step if you don't want to add faker
          gem. You can manually create some records in your database.
        </h5>

        <div className="py-18 my-16">
          <Gist id="3553ad54dc7a3bcabd4bd26ada3eb677" />
        </div>

        <h5 className="font-semibold text-xl my-16 py-8">
          You can test your application by going to{' '}
          <code className="text-indigo-600 font-semibold ">
            localhost:3000/users and localhost:3000/books{' '}
          </code>{' '}
          in your browser.
        </h5>

        <h5 className="font-semibold text-xl my-16 py-8">
          If you want to load the relationships in your JSON response, you can
          do it by updating your book controller to include the user model
        </h5>
        <div className="py-18 my-16">
          <Gist id="2bf1970e69e27c9c4f40f1a61e96e44a" />
        </div>

        <div className="relative overflow-hidden rounded-md">
          <img
            src="/assets/images/include_relationship.png"
            className="rounded-md"
            alt="pagination with tailwind css and will paginate gem"
          />
        </div>

        <h5 className="font-semibold text-xl my-16 py-8">
          If you want to customize your JSON response, you can use JBuilder gem.
          <a
            className="text-indigo-600 font-semibold"
            href="https://github.com/rails/jbuilder"
            target="_blank"
            rel="noopener noreferrer"
          >
            you can use JBuilder gem
          </a>
        </h5>

        <h5 className="font-semibold text-xl my-16 py-8">
          Active Model Serializer Gem is a great gem to customize your JSON
          response. You can add it to your application by following the
          following link,
        </h5>
        <a
          className="text-indigo-600 font-semibold"
          href="https://github.com/rails-api/active_model_serializers/tree/0-10-stable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Setup
        </a>
        <a
          className="text-indigo-600 font-semibold"
          href="https://github.com/rails-api/active_model_serializers/blob/0-10-stable/docs/general/getting_started.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting Started guide
        </a>

        <h3 className="font-semibold text-xl my-16 py-8">
          Api Versioning in Rails 7
        </h3>
        <p className="text-blue-400">
          Versioning is a way to manage changes to your API. It is a way to make
          a change to your API without breaking existing clients. It is a way to
          make sure that your API is backward compatible. It is a way to make
          sure that your API is forward compatible.
        </p>

        <h5 className="font-semibold text-xl my-16 py-8">
          You can add versioning to your API by by following the following link,
        </h5>
        <a
          className="text-indigo-600 font-semibold"
          href="https://medium.com/swlh/a-deeper-dive-into-api-versioning-938b0cb58765"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Deeper Dive into API Versioning
        </a>
        <h3 className="font-semibold text-xl my-16 py-8">Conclusion</h3>
        <p className="text-blue-400">
          In this blog, we created an API in Rails 7 Active Model Serializer Gem
          for JSON response format. I hope you enjoyed this blog. If you have
          any questions, please feel free to ask me in the comments section
          below.
        </p>
      </div>
    </BlogContainer>
  );
};

export default RailsApi;
