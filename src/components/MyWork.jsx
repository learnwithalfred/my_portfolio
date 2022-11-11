import React from 'react';

const MyWork = () => {
  return (
    <section className="relative py-8 bg-gray-50 dark:bg-slate-800">
      <div className="container mt-8">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Portfolio
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            My Works
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            I have worked on a number of projects, both personal and for clients
            over the years. Here are some of them.
          </p>
        </div>
        <div className="sm:flex mt-4" id="grid">
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                  <img
                    src="/assets/images/listed.png"
                    className="rounded-t-md shadow"
                    alt="Listed"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    rel="noreferrer"
                    href="https://www.gotlisted.io/"
                    target="_blank"
                    className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                  >
                    https://www.gotlisted.io Website
                  </a>
                </h5>
                <span className="text-slate-400">
                  <a
                    rel="noreferrer"
                    href="https://tobedetermined.dev/our-roster"
                    target="_blank"
                    alt="Listed"
                  >
                    Client: tobedetermined.dev
                  </a>
                  <br />
                  Contributed to when project working as Part-Time Developer{' '}
                </span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                  <img
                    src="/assets/images/kraado.png"
                    className="rounded-t-md shadow"
                    alt="Kraado"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://kraado.co/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-600 transition-all duration-500 ease-in-out"
                  >
                    https://kraado.co Website
                  </a>
                </h5>
                <span className="text-slate-400">
                  Contributed to when project working as developer intern
                </span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-red-600/5 dark:bg-red-600/30">
                  <img
                    src="https://github.com/learnwithalfred/furry-invention/blob/main/app/assets/images/nana_ama.png?raw=true"
                    className="rounded-t-md shadow"
                    alt="Nana Ama"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    rel="noreferrer"
                    href="https://nana-ama.herokuapp.com/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    Stores Data Collection App
                  </a>
                </h5>
                <span className="text-slate-400">
                  Group Project for Software Engineering Course
                </span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-sky-600/5 dark:bg-sky-600/30">
                  <img
                    src="/assets/images/tv.png"
                    className="rounded-t-md shadow"
                    alt="TV"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://giuseppetg.github.io/TVmaze/dist"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-600 transition-all duration-500 ease-in-out"
                  >
                    TV shows website build with TVmaze API
                  </a>
                </h5>
                <span className="text-slate-400">Group Project</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30">
                  <img
                    src="/assets/images/code.png"
                    className="rounded-t-md shadow"
                    alt="Code"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    rel="noreferrer"
                    href="https://learnwithalfred.github.io/alfred-code-college/"
                    target="_blank"
                    className="hover:text-amber-600 transition-all duration-500 ease-in-out"
                  >
                    Code School Website
                  </a>
                </h5>
                <span className="text-slate-400">
                  Group Project for Software Engineering Course
                </span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                  <img
                    src="/assets/images/space.png"
                    className="rounded-t-md shadow"
                    alt="Space"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    rel="noreferrer"
                    href="https://space-travel-hub-rockets.netlify.app/"
                    target="_blank"
                    className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                  >
                    Space Travel Hub Booking Website
                  </a>
                </h5>
                <span className="text-slate-400">Group Project</span>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
          <div className="md:col-span-12 text-center">
            <a
              href="/"
              className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              See More <i className="uil uil-arrow-right align-middle" />
            </a>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default MyWork;
