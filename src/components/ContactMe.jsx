import React from 'react'

const ContactMe = () => {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Send Me A Mail
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Have Question ? Get in touch!
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Contact me for any questions or inquiries. I will get back to you as
          soon as possible.
        </p>
        <div className="mt-6">
          <a
            target={'_blank'}
            rel="noreferrer"
            href="mailto:learnwithalfred@gmail.com "
            className="btn bg-sky-600 hover:bg-sky-700 border-sky-600
                      hover:border-sky-700 text-white rounded-md"
          >
            <i className="uil uil-envelope" /> Contact Me
          </a>
        </div>
      </div>
      {/*end grid*/}
    </div>
  );
}

export default ContactMe