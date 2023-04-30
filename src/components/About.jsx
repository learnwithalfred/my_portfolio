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
                alt="Coding is my passion"
              />
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
            <div className="lg:ml-5">
              <h3 className="text-indigo-600 mb-4 md:text-3xl md:leading-normal text-2xl leading-normal  font-bold uppercase mb-2">
                About Me
              </h3>

              <p className="text-dark-800 max-w-xl text-xl">
                Energetic full-stack developer with 3+ years of experience
                developing robust code for enterprise businesses. A fast learner
                that enjoys technical research that further develops my skills,
                and creative projects. Love teaching SWE content on{' '}
                <a
                  href="https://www.youtube.com/@learnwithalfred"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
