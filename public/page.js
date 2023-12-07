"use client"
import React from 'react';
import "@/app/about/aboutpage.css";
import Carousel from './carousel';

function AboutPage() {
  return (
    <div className='bg-cover bg-center bg-no-repeat relative h-[158rem] flex flex-col gap-48' style={{backgroundImage: `url("/GreenAbout.png")`}} >
        <div className='flex justify-between items-center px-2 py-4' >
          <div>Sneha Chakraborty</div>
          <div>Reach Out</div>
        </div>
        <div className='flex items-center justify-around gap-8 relative pl-32 pr-64' >
          <img className='w-[40vw] z-10' src="/SnehaProfile.png" alt="" />
          <div className='flex flex-col justify-center items-center gap-12' >
            <div>Cras ullamcorper ante mauris, sed vestibulum ligula blandit eu. Aliquam nec arcu quis nibh tristique vulputate gravida non tortor. Vivamus ut posuere mauris.</div>
            <div>Cras ullamcorper ante mauris, sed vestibulum ligula blandit eu. Aliquam nec arcu quis nibh tristique vulputate gravida non tortor. Vivamus ut posuere mauris.</div>
          </div>
          <div className='absolute flex top-[-3rem] z-0' >
            <div className='text-8xl' >CRE</div>
            <div className='text-9xl' >A</div>
            <div className='text-8xl' >TIVITY</div>
          </div>
          <div className='absolute top-2 right-[30vw] text-7xl' >born from</div>
          <div className='' >
            <div>E</div>
            <div>X</div>
            <div>PERIENCES</div>
          </div>
        </div>
        <div className='flex relative' >
          <img className='absolute top-0' src="/Tags.png" alt="" />
          <Carousel/>
        </div>
    </div>
  )
}

export default AboutPage;