import React from 'react';

const WorkExperience = () => (
  <section
    className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
    id="experience"
  >
    <div className="container">
      <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="text-indigo-600 mb-4 md:text-3xl md:leading-normal text-2xl leading-normal  font-bold uppercase mb-2">
          Work Experience
        </h3>
      </div>
      {/*end grid*/}
      <div className="grid grid-cols-1 mt-8">
        <div className="relative after:content-[''] after:absolute after:top-0 md:after:right-0 md:after:left-0 after:w-px after:h-full md:after:m-auto after:border-l-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ml-3 md:ml-0">
          {/*Start content*/}
          <div className="ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
            <div className="grid md:grid-cols-2">
              <div className="md:text-right md:mr-8 relative">
                <img
                  src="https://www.tobedetermined.dev/asset/resource/logo.png"
                  className="rounded-full h-9 w-9 md:ml-auto"
                  alt="Alfred Boateng"
                />
                <h5 className="my-2 font-semibold text-lg">
                  Full-stack Developer{' '}
                </h5>
                <h6 className="text-slate text-sm mb-0">2022</h6>
              </div>
              <div className="float-left text-left md:ml-8 mt-6 md:mt-0">
                <h5 className="title mb-1 font-semibold">
                  <a
                    href="https://tobedetermined.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://tobedetermined.dev
                  </a>
                </h5>
                <p className="mt-3 mb-0 text-dark-800">
                  Worked with experienced developers on an enterprise NFT
                  application
                  <br />
                  <br />
                  <ul className="list-disc list-inside">
                    <li>
                      Languages: React.js, Next.js, Firebase and Tailwind CSS
                    </li>
                    <li>
                      Mentored by senior engineers whiles building a production
                      application
                    </li>
                    <br />
                    <li>
                      Skills: Team Leadership · Teamwork · Pair Programming
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/*End content*/}
          {/*Start content*/}
          <div className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
            <div className="grid md:grid-cols-2">
              <div className="text-left md:ml-8 relative md:order-2">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQG9ueTShXlW1A/company-logo_200_200/0/1571408292205?e=2147483647&v=beta&t=yAITmxZPKPoXl_ZqYfEmZUfwpdstNde1zJ4_ruPy3Pc"
                  className="rounded-full h-9 w-9 md:mr-auto"
                  alt="Alfred Boateng"
                />
                <h5 className="my-2 font-semibold text-lg">
                  <a
                    href="https://kraado.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://kraado.co
                  </a>
                </h5>
                <h6 className="text-slate text-sm mb-0">2021</h6>
              </div>
              <div className="float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1">
                <h5 className="title mb-1 font-semibold">
                  Full-stack Developer Intern
                </h5>
                <p className="mt-3 mb-0 text-dark-800">
                  Worked with Kraado developers to create SASS website for
                  booking coaches.
                  <br />
                  <br />
                  <ul className="list-disc list-inside">
                    <li>Languages: React.js and Firebase</li>
                    <li>
                      Mentored by senior engineers whiles building a production
                      application
                    </li>
                    <br />
                    <li>
                      Skills: Kanban · Front-End Development · Software
                      Development
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
);

export default WorkExperience;
