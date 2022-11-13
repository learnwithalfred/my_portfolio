import React from 'react';

const About = () => {
  return (
    <section className="relative md:py-24 py-16" id="about">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <img
                src="/assets/images/personal/hero.png"
                className="rounded-full"
                alt="Alfred Boateng"
              />
              <div className="absolute top-0 left-0 -z-1">
                <img
                  src="/assets/images/personal/dots.svg"
                  alt="Alfred Boateng"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
            <div className="lg:ml-5">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2 text-2xl">
                About Me
              </h6>

              <p className="text-slate-400 max-w-xl">
                Junior plus Full-stack JavaScript, and Ruby developer with
                hands-on experience in web development.
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
                    Deployment: Heroku | Netlify | Vercel
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

              <div className="mt-4">
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
                  <a href="tel:+233203848853">
                    <li className="flex items-center">
                      <i className="mdi mdi-check text-indigo-600 text-lg mr-2" />
                      +233203848853
                    </li>
                  </a>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/*grid*/}
      </div>
    </section>
  );
};

export default About;
