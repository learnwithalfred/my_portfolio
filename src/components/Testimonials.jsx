import React from 'react';

const Testimonials = () => {
  return (
    <section
      className="relative py-8 bg-gray-50 dark:bg-slate-800"
      id="testimonials"
    >
      <div className="container">
        <div className="grid grid-cols-1 text-center  mt-16">
          <h3 className="text-indigo-600 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Testimonials
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-[30px] mt-10">
          <div className="client-testi rounded shadow dark:shadow-gray-800 m-2 p-6">
            <p className="text-dark-800 mt-6">
              " Alfred is one of the teammates you always want near you while
              working on any project. He always has something to teach whether
              it is a technical or professional skill, working with Alfred means
              the thrive of a project. Proactiveness and effective remote
              communication are some things you will have while having Alfred as
              a team member. "
            </p>
            <a
              href="https://www.linkedin.com/in/mike-mart%C3%ADnez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-indigo-600 font-semibold mt-3">
                - Mike Martínez
              </h6>
            </a>

            <span className="text-dark-800 text-sm dark:text-white/60 block">
              Microverse
            </span>
          </div>
          <div className="client-testi rounded shadow dark:shadow-gray-800 m-2 p-6">
            <p className="text-dark-800 mt-6">
              " He has good experience in the workings of how to handle works
              regarding servers, databases, and also system engineering. He also
              has good team management abilities and is a really dedicated
              worker. So I would really like to recommend him for the post of
              full stack developer of your company. I can assure you that, he
              would be a great option for helping your company in its future
              growth and success."
            </p>
            <a
              href="https://www.linkedin.com/in/silviatofana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-indigo-600 font-semibold mt-3">
                - Silvia Tofana
              </h6>
            </a>

            <span className="text-dark-800 text-sm dark:text-white/60 block">
              Microverse
            </span>
          </div>
          {/* Content */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
