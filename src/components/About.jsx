import React from 'react';

const About = () => {
  return (
    <section
      className="py-16 my-24
      "
    >
      {' '}
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <img
                src="/assets/images/typing_alfred.png "
                // className="rounded-full"
                alt="Coding is my passion"
              />
              {/* <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <a
                  href="https://youtu.be/lpHENwZQLFA"
                  data-type="youtube"
                  target="_blank"
                  data-id="lpHENwZQLFA"
                  rel="noreferrer"
                  className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                </a>
              </div> */}
              {/* <div className="absolute top-0 left-0 -z-1">
                <img
                  src="/assets/images/personal/dots.svg"
                  alt="Alfred Boateng"
                />
              </div> */}
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
            <div className="lg:ml-5">
              <h3 className="text-indigo-600 mb-4 md:text-3xl md:leading-normal text-2xl leading-normal  font-bold uppercase mb-2">
                About Me
              </h3>

              <p className="text-dark-800 max-w-xl text-xl">
                Diligent software engineer with 3+ years of experience in web application development. Looking for my next role to build innovative and cutting-edge business solutions for an impressive suite of clients. Experience includes completing 3 web applications as a freelancer, and mentoring 2 junior developers providing technical support through code reviews. Strong skills include JavaScript, Ruby on Rails, Node.js, React.js PHP, and Debugging.

              </p>
              <div className="mt-4">
                <h3>
                  <span className="text-2xl font-bold text-indigo-600">
                    My Skills
                  </span>{' '}
                </h3>
                <ol>
                  <li className="flex items-center">
                    <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                    Front-end development: ReactJS | NextJS | Redux |
                    TailwindCSS
                  </li>

                  <li className="flex items-center">
                    <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                    Back-end development: Ruby on Rails | NodeJS | ExpressJS
                    TailwindCSS
                  </li>

                  <li className="flex items-center">
                    <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                    Testing: RSpec | Jest | Cypress
                  </li>

                  <li className="flex items-center">
                    <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                    Deployment: Heroku | Netlify | Vercel | Docker
                  </li>
                </ol>
              </div>

              <div className="mt-4">
                <h3>
                  <span className="text-2xl font-bold text-indigo-600">
                    Education
                  </span>{' '}
                </h3>
                <ol>
                  <a
                    href="https://www.microverse.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="flex items-center">
                      <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                      Microverse Coding Boot Camp
                    </li>
                  </a>
                </ol>
              </div>

              {/* <div className="mt-4">
                <h3>
                  <span className="text-2xl font-bold text-indigo-600">
                    Email
                  </span>{' '}
                </h3>
                <ol>
                  <a href="mailto:learniwthalfred@gmail.com">
                    <li className="flex items-center">
                      <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                      learniwthalfred@gmail.com
                    </li>
                  </a>
                </ol>
              </div>

              <div className="mt-4">
                <h3>
                  <span className="text-2xl font-bold text-indigo-600">
                    Phone
                  </span>{' '}
                </h3>
                <ol>
                  <a href="tel:+233541034798">
                    <li className="flex items-center">
                      <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                      +233541034798
                    </li>
                  </a>
                </ol>
              </div> */}
            </div>
          </div>
        </div>
        {/*grid*/}
      </div>
    </section>
  );
};

export default About;
