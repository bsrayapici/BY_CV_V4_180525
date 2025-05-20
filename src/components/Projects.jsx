import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

import laptopFrame from '../assets/laptop.png';
import screenPreview from '../assets/ornek.jpg';
import screenPreviewTwo from '../assets/ornek_iki.jpg';

function Projects() {
  const { language } = useLanguage();
  const projects = data[language]?.projectsSection;

  if (!projects) return null;

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#0A0A14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-white text-center md:text-left">
          {projects.title}
        </h2>

        {/* Yan yana iki kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 - Mavi Arka Plan */}
          <div className="relative w-full h-[700px] bg-[#e0f2ff] rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Random Jokes</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['react', 'vercel', 'axios', 'router'].map((tag, i) => (
                <span key={i} className="bg-white px-4 py-1 rounded-full font-semibold text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between font-semibold text-black">
              <a href="#" className="hover:underline">View on Github</a>
              <a href="#" className="hover:underline">Go to app →</a>
            </div>

            {/* Laptop Görseli */}
            <div className="absolute left-0 right-0 bottom-1 top-20 translate-y-[40%] w-full pointer-events-none">
              <div className="relative w-full max-w-[500px] mx-auto">
                <img
                  src={screenPreview}
                  alt="Random Jokes Screenshot"
                  className="absolute top-[8.5%] left-[9%] w-[82%] h-[60%] object-cover rounded-md z-10"
                />
                <img
                  src={laptopFrame}
                  alt="Laptop Frame"
                  className="relative w-full z-20"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Mint Yeşili Arkaplan */}
          <div className="relative w-full h-[700px] bg-[#D9F6F1] rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Are you bored?</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['react', 'redux', 'axios', 'router', 'vercel'].map((tag, i) => (
                <span key={i} className="bg-white px-4 py-1 rounded-full font-semibold text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between font-semibold text-black">
              <a href="#" className="hover:underline">View on Github</a>
              <a href="#" className="hover:underline">Go to app →</a>
            </div>

            {/* Laptop Görseli */}
            <div className="absolute left-0 right-0 bottom-1 top-20 translate-y-[40%] w-full pointer-events-none">
              <div className="relative w-full max-w-[500px] mx-auto">
                <img
                  src={screenPreviewTwo}
                  alt="Are you bored App Screenshot"
                  className="absolute top-[5.5%] left-[10%] w-[79%] h-[78%] object-cover rounded-md z-10"
                />
                <img
                  src={laptopFrame}
                  alt="Laptop Frame"
                  className="relative w-full z-20"
                />
                
              </div>
            </div>
          </div>
          <br></br>
          <br></br>

        </div>
      </div>
     
    </section>
  );
}

export default Projects;