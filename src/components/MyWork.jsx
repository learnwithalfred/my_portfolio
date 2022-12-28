import React from 'react';

const MyWork = () => {
  return (
    <section
      className="relative py-8 bg-gray-50 dark:bg-slate-800"
      id="my-work"
    >
      <div>
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Portfolio
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            My Works
          </h3>
          <p className="text-dark-800 max-w-xl mx-auto">
            I have worked on a number of projects, both personal and for clients
            over the years. Here are some of them.
          </p>
        </div>
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <a
                rel="noreferrer"
                href="https://github.com/learnwithalfred/nana-ama-stores"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="https://github.com/learnwithalfred/furry-invention/blob/main/app/assets/images/nana_ama.png?raw=true"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 left-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:ml-8">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Stores Data
                Collection App
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span>A store
                data collection app that allows users to create stores and add
                products to the stores. The app also allows users to search for
                stores and products. I added role based authentication to the
                app, so that only users with the admin role can create stores
                and products.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span> Ruby
                  on Rails,Tailwind CSS, HTML, CSS, Javascript
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://github.com/learnwithalfred/nana-ama-stores"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    https://github.com/learnwithalfred/nana-ama-stores
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://nana-ama-stores.onrender.com/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    nana-ama-stores.onrender.com/
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://nana-ama-stores.onrender.com/"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <a
                rel="noreferrer"
                href="https://www.gotlisted.io"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/listed.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 right-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:mr-8 order-2 md:order-1">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Listed
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span> An
                enterprise NFT application that allows users to create NFTs and
                to buy and sell NFTs. I added role based authentication to the
                app, so that only users with the admin role can create NFTs and
                users with the buyer role can buy NFTs.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Firebase, Tailwind CSS
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href=""
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    This is a private project I contributed to whiles working as
                    a part-time developer at a TobeDetermened.
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://www.gotlisted.io"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://www.gotlisted.io
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://tobedetermined.dev"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Client: </span>
                    tobedetermined.dev
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://www.gotlisted.io"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
        {/* ============================================================================ */}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <a
                rel="noreferrer"
                href="https://github.com/learnwithalfred/nana-ama-stores"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/kraado.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="kraado"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 left-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:ml-8">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Kraado
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span>Kraado
                SASS website for booking coaches.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Firebase.
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                    <span className="text-indigo-600 mr-2">Github link: </span>A
                    private project I contributed to whiles working as a
                    developer Intern at Kraado.
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://kraado.co"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://kraado.co
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://kraado.co"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================================ */}

        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <a
                rel="noreferrer"
                href="https://www.gotlisted.io"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/listed.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 right-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:mr-8 order-2 md:order-1">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Listed
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span> An
                enterprise NFT application that allows users to create NFTs and
                to buy and sell NFTs. I added role based authentication to the
                app, so that only users with the admin role can create NFTs and
                users with the buyer role can buy NFTs.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Firebase, Tailwind CSS
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href=""
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    This is a private project I contributed to whiles working as
                    a part-time developer at a TobeDetermened.
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://www.gotlisted.io"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://www.gotlisted.io
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://tobedetermined.dev"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Client: </span>
                    tobedetermined.dev
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://www.gotlisted.io"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================================ */}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <a
                rel="noreferrer"
                href="https://github.com/learnwithalfred/nana-ama-stores"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="https://github.com/learnwithalfred/furry-invention/blob/main/app/assets/images/nana_ama.png?raw=true"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 left-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:ml-8">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Stores Data
                Collection App
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span>A store
                data collection app that allows users to create stores and add
                products to the stores. The app also allows users to search for
                stores and products. I added role based authentication to the
                app, so that only users with the admin role can create stores
                and products.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span> Ruby
                  on Rails,Tailwind CSS, HTML, CSS, Javascript
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://github.com/learnwithalfred/nana-ama-stores"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    https://github.com/learnwithalfred/nana-ama-stores
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://nana-ama-stores.onrender.com/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    nana-ama-stores.onrender.com/
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://nana-ama-stores.onrender.com/"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================================ */}

        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <a
                rel="noreferrer"
                href="https://www.gotlisted.io"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/listed.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 right-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:mr-8 order-2 md:order-1">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Listed
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span> An
                enterprise NFT application that allows users to create NFTs and
                to buy and sell NFTs. I added role based authentication to the
                app, so that only users with the admin role can create NFTs and
                users with the buyer role can buy NFTs.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Firebase, Tailwind CSS
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href=""
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    This is a private project I contributed to whiles working as
                    a part-time developer at a TobeDetermened.
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://www.gotlisted.io"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://www.gotlisted.io
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://tobedetermined.dev"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Client: </span>
                    tobedetermined.dev
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://www.gotlisted.io"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================================ */}
      </div>

      <div className="container mt-8">
        <div className="sm:flex mt-4">
          <div className="lg:w-1/2 sm:w-1/2 picture-item p-4 rounded-md">
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
                <span className="text-dark-800">
                  Contributed to when project working as developer intern
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/2 picture-item p-4 rounded-md">
            <div className>
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30">
                  <img
                    src="/assets/images/cars-reserve.png"
                    className="rounded-t-md shadow"
                    alt="Car Booking App"
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    rel="noreferrer"
                    href="https://github.com/learnwithalfred/backend-microverse-final-capstone"
                    target="_blank"
                    className="hover:text-amber-600 transition-all duration-500 ease-in-out"
                  >
                    Car Booking App
                  </a>
                </h5>
                <span className="text-dark-800">
                  The project is based on an app to book an appointment to try a
                  Car.{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex">
          <div className="lg:w-1/2 sm:w-1/2 picture-item p-4 rounded-md">
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
                <span className="text-dark-800">Group Project</span>
              </div>
            </div>
          </div>
          {/*end col*/}

          {/*end col*/}
          <div className="lg:w-1/2 sm:w-1/2 picture-item p-4 rounded-md">
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
                <span className="text-dark-800">Group Project</span>
              </div>
            </div>
          </div>
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
