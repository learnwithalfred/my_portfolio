import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Available = () => {
  return (
    <section
      className="py-20 w-full table relative jarallax"
      data-jarallax
      data-speed="0.5"
      style={{
        background:
          'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80") center',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="container relative">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">
            I'm open to Software Engineering opportunities
          </h3>
          <div className="relative mt-8">
            <HashLink
              to={'/#contact'}
              className="btn bg-sky-600 hover:bg-sky-700 border-sky-600
                      hover:border-sky-700 text-white rounded-md"
            >
              Let's Talk
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Available;
