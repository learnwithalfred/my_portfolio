import React from 'react';

const MyWork = () => {
  return (
    <section className="relative py-8" id="my-work">
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
        {/* ======================================   christ model   ====================================== */}

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
                  src="/assets/images/cms.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Christ Model School"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 left-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:ml-8">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Christ
                Model School Website
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span>A school
                website and a school management system for a school in Ghana.
                The school management system is a content management system that
                allows the school to manage their students, and other school
                related activities.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span> PHP,
                  Laravel, JavaScript, MySql
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://christmodel.academy/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    Private Link
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://christmodel.academy/"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://christmodel.academy/
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Project Type: </span>
                    Freelance Project
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://christmodel.academy/"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================   Aura   ====================================== */}

        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <a
                rel="noreferrer"
                href="https://www.aurageospatial.com/"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/aura.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 right-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:mr-8 order-2 md:order-1">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Aura
                Geospatial Website
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span> A
                freelance project for a geospatial company in Ghana. The website
                is a single page application that allows the company to showcase
                their services and also allows them to manage their clients and
                projects.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Node.js, Express.js
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    Private Repository
                  </span>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://www.aurageospatial.com/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://www.aurageospatial.com/
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Project Type: </span>
                    Freelance Project
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://www.aurageospatial.com/"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================   stores   ====================================== */}

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
                    target="_blank"
                    href="https://nana-ama-stores.onrender.com/"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    nana-ama-stores.onrender.com/
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Project Type: </span>
                    Personal Project
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  rel="noreferrer"
                  target="_blank"
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
        {/* ======================================   Listed   ====================================== */}

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
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    Private Repository I contributed to while working as a
                    part-time developer at a TobeDetermened.
                  </span>
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
        {/* ======================================   Kraado   ====================================== */}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <a
                rel="noreferrer"
                href="https://kraado.co"
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
                  <span className="text-indigo-600 mr-2">Github link: </span>
                  Private repository I contributed to whiles working as a
                  developer at Kraado.
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
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Client: </span>
                    <a
                      rel="noreferrer"
                      href="https://kraado.co"
                      target="_blank"
                      className="hover:text-red-600 transition-all duration-500 ease-in-out"
                    >
                      Kraado
                    </a>
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  rel="noreferrer"
                  target="_blank"
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
        {/* =================================== Car booking app ========================================= */}

        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <a
                rel="noreferrer"
                href="https://github.com/learnwithalfred/backend-microverse-final-capstone"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/cars-reserve.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Microverse"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 right-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:mr-8 order-2 md:order-1">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Car Booking
                App
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span> This is a
                School Project where we were to build a car booking app.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Ruby on Rails, Bootstrap, Postgres.
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://github.com/learnwithalfred/backend-microverse-final-capstone"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    github.com/learnwithalfred
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://reserve-car.onrender.com/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://reserve-car.onrender.com/{' '}
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Project Type: </span>
                    School Project
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://reserve-car.onrender.com/"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ========================================== TV shows ================================== */}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <a
                rel="noreferrer"
                href="https://giuseppetg.github.io/TVmaze/dist"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/tv.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="TV shows"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 left-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:ml-8">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> TV Maze
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span>A
                JavaScript School Project for searching and commenting on TV
                shows.
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  JavaScript, HTML, CSS, Bootstrap, Webpack, Jest.
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://github.com/giuseppetg/TVmaze/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    https://github.com/giuseppetg/TVmaze/{' '}
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://giuseppetg.github.io/TVmaze/dist"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://giuseppetg.github.io/TVmaze/dist{' '}
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Project Type: </span>
                    School Project
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/giuseppetg/TVmaze/"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================== Space travel hub ======================================== */}

        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <a
                rel="noreferrer"
                href="https://space-travel-hub-rockets.netlify.app/"
                target="_blank"
                className="hover:text-red-600 transition-all duration-500 ease-in-out"
              >
                <img
                  src="/assets/images/space.png"
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt="Alfred Boateng's Portfolio"
                />
              </a>
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 right-0 rotate-45 -z-1 rounded-3xl" />
            </div>
            <div className="lg:mr-8 order-2 md:order-1">
              <h5 className="mb-4 text-2xl leading-normal font-medium">
                <span className="text-indigo-600 mr-2">Name: </span> Space
                Travel Hub
              </h5>
              <p className="text-dark-800">
                <span className="text-indigo-600">Description: </span> Space
                travel hub - The application allow users to book rockets and
                join selected space missions
              </p>
              <ul className="list-none text-dark-800 mt-4">
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="text-indigo-600 mr-2">Languages: </span>{' '}
                  React.js, Redux, JavaScript, Bootstrap
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://github.com/learnwithalfred/space-travel-booking"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">Github link: </span>
                    github.com/learnwithalfred/space-travel-booking
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <a
                    rel="noreferrer"
                    href="https://space-travel-hub-rockets.netlify.app/"
                    target="_blank"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    <span className="text-indigo-600 mr-2">
                      Deployed link:{' '}
                    </span>
                    https://space-travel-hub-rockets.netlify.app/{' '}
                  </a>
                </li>
                <li className="mb-1 flex">
                  <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                  <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                    <span className="text-indigo-600 mr-2">Project Type: </span>
                    School Project
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/learnwithalfred/space-travel-booking"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{' '}
                  <i className="uil uil-angle-right-b align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
