import React from 'react';
import { Helmet } from 'react-helmet';
import Available from './Available';
import Nav from './Nav';
import RightSideBar from './blogs/RightSideBar';
import Footer from './Footer';

const BlogContainer = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title : 'A Post from Alfred Boateng'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Blog Post from Alfred Boateng - A Junior plus Full-stack JavaScript, and Ruby developer with hands-on experience in web development'
          }
        />
      </Helmet>
      <Nav />

      <section className="relative md:pb-16 md:pt-16 pb-16 pt-36">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">{children}</div>
            <RightSideBar />
          </div>
        </div>
      </section>
      <Available />

      <Footer />
    </>
  );
};

export default BlogContainer;
