import React from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Available from '../components/Available';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactMe from '../components/ContactMe';

const Home = () => (
  <div className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
    <Nav />
    <About />
    <WorkExperience />
    <Testimonials />
    <ContactMe />
    <Available />
    <Footer />
  </div>
);
export default Home;
