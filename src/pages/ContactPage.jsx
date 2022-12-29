import React from 'react';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';

import Available from '../components/Available';
import Footer from '../components/Footer';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Alfred Boateng</title>
    </Helmet>
    <Nav />
    <section className="relative pt-16 ">
      <section className="relative md:py-24 py-16 container">
        <div className="grid md:grid-cols-12 grid-cols-1  gap-[30px]">
          <div className="lg:col-span-4 md:col-span-6">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="p-6">
                <h3 className="mb-6 text-2xl leading-normal font-medium">
                  Let's talk
                </h3>
             
                <div className="flex items-center mt-6">
                  <div className>
                    <h5 className="title font-bold mb-0">Email</h5>
                    <a
                      href="mailto:contact@example.com"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <div className>
                    <h5 className="title font-bold mb-0">Phone</h5>
                    <a
                      href="tel:+152534-468-854"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      +152 534-468-854
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <div className>
                    <h5 className="title font-bold mb-0">Location</h5>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      data-type="iframe"
                      className="video-play-icon btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 transition duration-500 lightbox"
                    >
                      View on Google map
                    </a>
                  </div>
                </div>
              
                {/*end icon*/}
              </div>
         
            </div>
          </div>
          <div className="lg:col-span-8 md:col-span-6 mt-8 md:mt-0">
            <div className="lg:ml-5">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                <h3 className="mb-6 text-2xl leading-normal font-medium">
                  Get in touch !
                </h3>
                <form
                  method="post"
                  name="myForm"
                  id="myForm"
                  onsubmit="return validateForm()"
                >
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
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="book"
                            className="w-4 h-4 absolute top-3 left-4"
                          />
                          <input
                            name="subject"
                            id="subject"
                            className="form-input pl-11"
                            placeholder="Subject :"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="text-left">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="message-circle"
                            className="w-4 h-6 absolute top-3 left-4"
                          />
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-input pl-11 h-48"
                            placeholder="Message :"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>

      <Available />

      <Footer />
    </section>
  </>
);
export default ContactPage;
