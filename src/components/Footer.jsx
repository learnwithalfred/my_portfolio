import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';
import { Github, Linkedin, Twitter } from './Icons';

const Footer = () => {
  return (
    <footer className="footer relative bg-slate-900/70 text-gray-800 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-3 grid-cols-1 items-center">
            <div className="md:text-left text-center">
              <Link to="/" className=" focus:outline-none">
                Alfred Boateng
              </Link>
            </div>
            <div className="text-center mt-6 md:mt-0"></div>
            <SocialIcons
              profiles={[
                {
                  name: 'Github',
                  url: 'https://www.github.com/learnwithalfred',
                  icon: Github,
                },
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/learnwithalfred',
                  icon: Linkedin,
                },
                {
                  name: 'Twitter',
                  url: 'https://twitter.com/Kb_alfred',
                  icon: Twitter,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
