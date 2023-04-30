import React from 'react';
import { Projects } from '../utils/work-data';

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
        {Projects.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <div className="container md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                  <div className="relative">
                    <a
                      rel="noreferrer"
                      href={item.link}
                      target="_blank"
                      className="hover:text-red-600 transition-all duration-500 ease-in-out"
                    >
                      <img
                        src={item.image}
                        className="rounded-lg shadow-md dark:shadow-gray-800"
                        alt={item.title}
                      />
                    </a>
                    <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 dark:bg-indigo-600/20 bottom-0 left-0 rotate-45 -z-1 rounded-3xl" />
                  </div>
                  <div className="lg:ml-8">
                    <h5 className="mb-4 text-2xl leading-normal font-medium">
                      <span className="text-indigo-600 mr-2">Name: </span>
                      {item.title}
                    </h5>
                    <p className="text-dark-800">
                      <span className="text-indigo-600">Description: </span>
                      {item.description}
                    </p>
                    <ul className="list-none text-dark-800 mt-4">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                        <span className="text-indigo-600 mr-2">
                          Languages:{' '}
                        </span>{' '}
                        PHP, Laravel, JavaScript, MySql
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                        <a
                          rel="noreferrer"
                          href={item.link}
                          target="_blank"
                          className="hover:text-red-600 transition-all duration-500 ease-in-out"
                        >
                          <span className="text-indigo-600 mr-2">
                            Github link:{' '}
                          </span>
                          {item.github}
                        </a>
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={item.link}
                          className="hover:text-red-600 transition-all duration-500 ease-in-out"
                        >
                          <span className="text-indigo-600 mr-2">
                            Deployed link:{' '}
                          </span>
                          {item.link}
                        </a>
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2" />{' '}
                        <span className="hover:text-red-600 transition-all duration-500 ease-in-out">
                          <span className="text-indigo-600 mr-2">
                            Project Type:{' '}
                          </span>
                          {item.projectType}
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={item.link}
                        className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Find Out More{' '}
                        <i className="uil uil-angle-right-b align-middle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
