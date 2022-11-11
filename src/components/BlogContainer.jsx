import React from 'react';
import Nav from './Nav';
import RightSideBar from './blogs/RightSideBar';
import Footer from './Footer';
// import { Link } from 'react-router-dom';

const BlogContainer = ({ children }) => {
  return (
    <>
      <Nav />
      <section className="relative md:pb-16 md:pt-16 pb-16 pt-36">
        <div className="container">
          <div className="grid grid-cols-1 text-center ">
            <h3 className="mb-8 text-3xl leading-normal font-medium text-indigo-700">
              My Blogs
            </h3>
            {/* <Gist id="d12a5f58e5995f5c8263deaeb57245d6" /> */}
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">{children}</div>
            <RightSideBar />
          </div>
          {/*end grid*/}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogContainer;
