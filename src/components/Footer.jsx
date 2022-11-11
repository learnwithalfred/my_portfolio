import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-3 grid-cols-1 items-center">
            <div className="md:text-left text-center">
              <a href="/" className="text-[22px] focus:outline-none">
                <img
                  src="/assets/images/logo-light.png"
                  className="mx-auto md:mr-auto md:ml-0"
                  alt="Alfred Boateng"
                />
              </a>
            </div>
            <div className="text-center mt-6 md:mt-0"></div>
            <ul className="list-none md:text-right text-center mt-6 md:mt-0">
              <li className="inline">
                <a
                  href="https://linkedin.com/in/learnwithalfred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-linkedin" title="Linkedin" />
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://github.com/learnwithalfred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-github" title="Linkedin" />
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://twitter.com/kb_alfred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-twitter align-middle" title="twitter" />
                </a>
              </li>
              <li className="inline">
                <a
                  href="mailto:learnwithalfred@gmail.com"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-envelope align-middle" title="email" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
