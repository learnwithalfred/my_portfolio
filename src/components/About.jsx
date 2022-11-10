import React from 'react';

const About = () => {
  return (
    <section className="relative md:py-24 py-16" id="about">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <img
                src="assets/images/personal/hero.jpg"
                className="rounded-full"
                alt="Alfred Boateng"
              />
              <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <a
                  href="#!"
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                </a>
              </div>
              <div className="absolute top-0 left-0 -z-1">
                <img
                  src="assets/images/illustrator/dots.svg"
                  alt="Alfred Boateng"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
            <div className="lg:ml-5">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                About us
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Better Design <br /> Better Experience
              </h3>
              <p className="text-slate-400 max-w-xl">
                Obviously I'm a Web Designer. Experienced with all stages of the
                development cycle for dynamic web projects.
              </p>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">WordPress</span>
                  <span className="text-slate-400">84%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-indigo-600 h-[6px] rounded-full"
                    style={{ width: '84%' }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">JavaScript</span>
                  <span className="text-slate-400">79%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-indigo-600 h-[6px] rounded-full"
                    style={{ width: '79%' }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">HTML</span>
                  <span className="text-slate-400">95%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-indigo-600 h-[6px] rounded-full"
                    style={{ width: '95%' }}
                  />
                </div>
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
