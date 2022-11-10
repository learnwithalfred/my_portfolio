import React from 'react'

const ContactMe = () => {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Contact Me
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Have Question ? Get in touch!
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Obviously I'm a Web Designer. Experienced with all stages of the
          development cycle for dynamic web projects.
        </p>
        <div className="mt-6">
          <a
            href="contact-one.html"
            className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
          >
            <i className="uil uil-phone" /> Contact Me
          </a>
        </div>
      </div>
      {/*end grid*/}
    </div>
  );
}

export default ContactMe