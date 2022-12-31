import React from 'react';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';

import Available from '../components/Available';
import Footer from '../components/Footer';
import MyWork from '../components/MyWork';

const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Alfred Boateng Portfolio Projects </title>
    </Helmet>
    <Nav />
    <section className="relative md:pt-16  pt-36">
      <MyWork />
      <Available />
      <Footer />
    </section>
  </>
);
export default PortfolioPage;
