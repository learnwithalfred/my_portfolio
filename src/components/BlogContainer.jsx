import React from 'react';
import Available from './Available';
import Nav from './Nav';
import RightSideBar from './blogs/RightSideBar';
import Footer from './Footer';
import { RenderTitle } from '../utils/utils';

const BlogContainer = ({
  children,
  title = 'Alfred Boateng',
  description = 'A mid level software developer',
}) => {
  return (
    <>
      <RenderTitle title={title} description={description} />
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
