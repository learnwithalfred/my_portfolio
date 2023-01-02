import React from 'react';
import Nav from '../components/Nav';
import { RenderTitle } from '../utils/utils';
import Available from '../components/Available';
import Footer from '../components/Footer';
import MyWork from '../components/MyWork';

const PortfolioPage = () => (
  <>
    <RenderTitle
      title={'Portfolio projects from Alfred Boateng'}
      description={' Projects build'}
    />

    <Nav />
    <section className="relative md:pt-16  pt-36">
      <MyWork />
      <Available />
      <Footer />
    </section>
  </>
);
export default PortfolioPage;
