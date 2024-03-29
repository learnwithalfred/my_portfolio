import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Typical from 'react-typical';
const Hero = () => {
  return (
    <section
      id="welcome"
      className="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden
      before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 before:right-36 before:left-0 before:mx-auto before:rounded-full before:bg-indigo-600 sm:before:w-[50rem] before:w-[30rem] sm:before:h-[50rem] before:h-[30rem]"
    >
      <div className="container-fluid">
        <div
          className="absolute inset-0 jarallax"
          data-jarallax
          data-speed="0.5"
          style={{
            background:
              'url("/assets/images/personal/hero-overlay.png") top center',
          }}
        />
      </div>
      <div className="container relative z-1">
        <div className="grid grid-cols-1 mt-5">
          <div className="title-heading">
            <div className="grid md:grid-cols-12 mt-12">
              <div className="lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0 relative">
                <div className="rounded-md lg:shadow-md lg:dark:shadow-gray-800 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6">
                  <h5 className="mb-3 text-3xl font-bold lg:text-black lg:dark:text-white text-white">
                    Mid Level Full-stack Developer
                  </h5>
                  <div className="mt-4">
                    <HashLink
                      to="/portfolio"
                      className="btn bg-sky-600 hover:bg-sky-700 border-sky-600 hover:border-sky-700 text-white rounded-md"
                    >
                      {' '}
                      Portfolio Projects
                    </HashLink>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="lg:col-span-4 lg:block hidden lg:order-2" />

              <div className="lg:col-span-4 md:col-span-6 order-1 lg:order-3">
                <h4 className="lg:text-[40px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0 ">
                  <Typical
                    steps={[
                      'Alfred Boateng',
                      7000,
                      'Full Stack  developer!',
                      10000,
                      'Open to work ',
                      5000,
                    ]}
                    loop={Infinity}
                    wrapper="b"
                  />
                </h4>
              </div>
              {/*end col*/}
            </div>
            {/*end grid*/}
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="absolute inset-0 bg-gradient-to-b lg:from-indigo-600/5 lg:to-indigo-600/20 from-indigo-600/10 to-indigo-600 lg:-z-2" />
      <ul className="circles p-0 mb-0">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </section>
  );
};

export default Hero;
