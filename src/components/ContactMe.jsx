import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer } from 'react-toastify';
import { SpinnerRoundOutlined } from 'spinners-react';

import 'react-toastify/dist/ReactToastify.css';
import { handleToast } from '../utils/utils';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      handleToast({ msg: 'Please enter a valid email', type: 'error' });
    } else if (!name || !email || !message) {
      handleToast({ msg: 'Please fill in all fields', type: 'error' });
    } else {
      setLoading(true);
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
      const userId = emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs.send(serviceId, templateId, templateParams, userId).then(() =>
        handleToast({
          msg: 'Thank you for your message, I will be in touch in no time!',
          type: 'success',
        })
      );

      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative md:py-24 py-16  bg-gray-50" id="contact">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="text-indigo-600 mb-4 md:text-3xl md:leading-normal text-2xl leading-normal  font-bold uppercase mb-2">
            Let's Talk
          </h3>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1  gap-[30px] container">
          <div className="lg:col-span-4 md:col-span-6">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="p-6">
                <h3 className="mb-6 text-2xl leading-normal font-medium">
                  My Contacts
                </h3>

                <div className="flex items-center mt-6">
                  <div className>
                    <h5 className="title font-bold mb-0">Email</h5>
                    <a
                      href="mailto:learnwithalfred@gmail.com"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      learnwithalfred@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <div className>
                    <h5 className="title font-bold mb-0">Phone</h5>
                    <a
                      href="tel:+233541034798"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      +233541034798
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <div className>
                    <h5 className="title font-bold mb-0">LinkedIn</h5>
                    <a
                      href="https://www.linkedin.com/in/learnwithalfred/"
                      data-type="iframe"
                      className="video-play-icon btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 transition duration-500 lightbox"
                    >
                      linkedin.com/in/learnwithalfred
                    </a>
                  </div>
                </div>

                {/*end icon*/}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 md:col-span-6 mt-8 md:mt-0">
            <ToastContainer />

            <div className="lg:ml-5">
              <div className="bg-white dark:bg-slate-900 rounded-md  dark:shadow-gray-800 p-6">
                <h3 className="mb-6 text-2xl leading-normal font-medium">
                  Get in touch !
                </h3>

                <form name="myForm" id="myForm" onSubmit={handleSubmit}>
                  <p className="mb-0" id="error-msg" />
                  <div id="simple-msg" />
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="user"
                            className="w-4 h-4 absolute top-3 left-4"
                          />
                          <input
                            name="name"
                            id="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="form-input pl-11"
                            placeholder="Name :"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="mail"
                            className="w-4 h-4 absolute top-3 left-4"
                          />
                          <input
                            name="email"
                            id="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="form-input pl-11"
                            placeholder="Email :"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-left">
                        <label htmlFor="message" className="font-semibold">
                          Your Message:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="message-circle"
                            className="w-4 h-6 absolute top-3 left-4"
                          />
                          <textarea
                            name="message"
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="form-input pl-11 h-48"
                            placeholder="Message :"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-sky-600 hover:bg-sky-700 border-sky-600 hover:border-sky-700 text-white rounded-md justify-center flex items-center"
                  >
                    {loading ? (
                      <>
                        <SpinnerRoundOutlined color="white" size={20} />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
    </>
  );
};
export default ContactMe;
