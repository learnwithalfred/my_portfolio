import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const BlogPage = () => {
  return (
    <>
      <Nav />
      <section className="relative md:py-24 py-8">
        <div className="container mt-16 ">
          <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Our Featured News Post
              </h3>
              <p className="text-slate-400 max-w-xl">
                Search your future opportunity with our categories
              </p>
            </div>
            <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
              <a
                href
                className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                All Categories{' '}
                <i className="uil uil-arrow-right align-middle" />
              </a>
            </div>
          </div>
          {/*end grid*/}
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="grid grid-cols-1 gap-[30px]">
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/02.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        Take a break through the countryside
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/03.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        These 10 sea destinations are surprises
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/04.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        A photographer perfect day in Colorado
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/05.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        This is the world most beautiful beach
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/06.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        Travel will change you for the better
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/07.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        Greek beyond Athene: Where to go next
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="lg:flex relative">
                    <div className="relative md:shrink-0">
                      <img
                        className="h-full w-full object-cover lg:w-52 lg:h-56"
                        src="assets/images/blog/08.jpg"
                        alt
                      />
                    </div>
                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                      <a
                        href="blog-detail.html"
                        className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                      >
                        This mountain will make you reborn
                      </a>
                      <div className="my-auto">
                        <p className="text-slate-400 mt-3">
                          The phrasal sequence of the is now so that many
                          campaign and benefit
                        </p>
                      </div>
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
                {/*end content*/}
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6">
              <div className="sticky top-20">
                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                  Recent post
                </h5>
                <div className="flex items-center mt-8">
                  <img
                    src="assets/images/blog/06.jpg"
                    className="h-16 rounded-md shadow dark:shadow-gray-800"
                    alt
                  />
                  <div className="ml-3">
                    <a href className="font-semibold hover:text-indigo-600">
                      Consultant Business
                    </a>
                    <p className="text-sm text-slate-400">1st May 2022</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="assets/images/blog/07.jpg"
                    className="h-16 rounded-md shadow dark:shadow-gray-800"
                    alt
                  />
                  <div className="ml-3">
                    <a href className="font-semibold hover:text-indigo-600">
                      Grow Your Business
                    </a>
                    <p className="text-sm text-slate-400">1st May 2022</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="assets/images/blog/08.jpg"
                    className="h-16 rounded-md shadow dark:shadow-gray-800"
                    alt
                  />
                  <div className="ml-3">
                    <a href className="font-semibold hover:text-indigo-600">
                      Look On The Glorious Balance
                    </a>
                    <p className="text-sm text-slate-400">1st May 2022</p>
                  </div>
                </div>
                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                  Social sites
                </h5>
                <ul className="list-none text-center mt-8">
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="facebook" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="instagram" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="twitter" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="linkedin" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="github" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="youtube" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline">
                    <a
                      href
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                    >
                      <i data-feather="gitlab" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage