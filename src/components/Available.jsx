import React from 'react'

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
            I Am Available For Any Full-time or Part-time Developer Position
          </h3>
          <p className="text-white/80 max-w-xl mx-auto">
            I am a junior plus full-stack JavaScript Ruby on Rails developer with over 2 years of experience. I am a self-motivated and hardworking individual who is able to work well in a team environment. I am a fast learner and I am always willing to learn new skills. I am a very creative person and I am always looking for new ways to improve my skills.
          </p>
          <div className="relative mt-8">
            <a
              href
              className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              Hire Me
            </a>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
}

export default Available