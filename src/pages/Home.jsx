import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Available from '../components/Available';
import MyWork from '../components/MyWork';
import LatestBlog from '../components/LatestBlog';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <div className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
    <Nav />
    <Hero />
    <About />
    <WorkExperience />
    <Available />
    <section className="relative md:py-24 py-16" id="portfolio">
      <MyWork />
      <LatestBlog />
      <Testimonials />

      <ContactMe />
    </section>
    <Footer />
  </div>
);
export default Home;
