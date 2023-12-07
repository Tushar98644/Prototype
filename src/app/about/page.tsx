"use client"
import React from 'react';
import Carousel from './carousel';

function AboutPage() {
  return (
    <div className='bg-cover bg-center bg-no-repeat relative h-[158rem] flex flex-col gap-40 text-white' style={{backgroundImage: `url("/GreenAbout.png")`}} >
        <div className='flex justify-between items-center px-2 py-4' >
          <div className='flex flex-col' >
            <div className='font-Bagross' >SNEHA</div>
            <div className='font-Bagross ml-12' >CHAKRABORTY</div>
          </div>
          <div className='font-Bagross' >REACH OUT</div>
        </div>
        <div className='flex items-center justify-around gap-8 relative pl-32 pr-64' >
          <img className='w-[40vw] z-10' src="/SnehaProfile.png" alt="" />
          <div className='flex flex-col justify-center items-center gap-12' >
            <div>Cras ullamcorper ante mauris, sed vestibulum ligula blandit eu. Aliquam nec arcu quis nibh tristique vulputate gravida non tortor. Vivamus ut posuere mauris.</div>
            <div>Cras ullamcorper ante mauris, sed vestibulum ligula blandit eu. Aliquam nec arcu quis nibh tristique vulputate gravida non tortor. Vivamus ut posuere mauris.</div>
          </div>
          <div className='absolute flex top-[-3rem] z-0' >
            <div className='text-8xl font-Tanpearl' >CRE</div>
            <div className='text-[200px] font-nautica' >A</div>
            <div className='text-8xl font-Tanpearl' >TIVITY</div>
          </div>
          <div className='absolute top-[2vw] right-[30vw] text-7xl font-windsong' >born from</div>
          <div className='absolute flex top-[6vw] z-20 right-[5vw]' >
            <div className='text-8xl font-Tanpearl' >E</div>
            <div className='text-[200px] font-nautica' >X</div>
            <div className='text-8xl font-Tanpearl' >PERIENCES</div>
          </div>
        </div>
        <div className='flex relative' >
          <img className='absolute top-0' src="/Tags.png" alt="" />
          <Carousel/>
          <div className="absolute flex flex-col top-0 right-[20vw]">
            <div className='flex max-h-[5vw]' >
                <div className='text-[200px] font-nautica' >O</div>
                <div className='text-8xl font-Tanpearl' >WN</div>
            </div>
            <div className='text-8xl font-windsong ml-[5vw]' >a piece of a</div>
            <div className='text-8xl font-Tanpearl ml-[10vw]' >STORY</div>
          </div>
        </div>
    </div>
  )
}

export default AboutPage;