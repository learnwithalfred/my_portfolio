import React from 'react';
import { Helmet } from 'react-helmet';
import Available from './Available';
import Nav from './Nav';
import RightSideBar from './blogs/RightSideBar';
import Footer from './Footer';

const BlogContainer = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Helmet>
        <title>{title} </title>
        <meta property="og:url" content={window} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
