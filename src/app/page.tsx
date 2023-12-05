'use client'
import { Carousel } from "@/src/components";

/* eslint-disable @next/next/no-img-element */
const Home_page = () => {
  return (
    <div className="bg h-screen">
      <div className="absolute top-[13vw] w-[10vw] left-[64vw]">
        <Carousel />
      </div>
      <img src="/iamges/spin.png" alt="" className="absolute h-20 left-[46.5vw] top-4 animate-spin" />
      <p className="font-Bagross text-white text-sm absolute left-[90vw] top-8">RAECH OUT</p>
      <p className="font-Bagross text-white text-sm absolute left-[3vw] top-8">SNEHA  <br /> <span className="ml-10">CHAKRABORTHY</span></p>
      <div className="text-white text-[5vw] px-40 py-40 top-[5vw] flex flex-col">
        <span className="font-windsong pl-24 animate-pulse">creating</span>
        <span className="font-Tanpearl absolute top-56 animate-pulse"><span className="font-nautica text-[7vw]">E</span>MOTIONS</span>
      </div>
    
      <p className="font-Bagross absolute top-[23vw] left-12 text-white text-xs mx-60 text-end">Cras ullamcorper ante mauris, sed <p> vestibulum ligula blandit eu. Aliquam nec arcu </p> quis nibh tristique vulputate gravida non tortor. <p> Vivamus ut posuere mauris. </p></p>
      <p className="font-Tanpearl text-5xl absolute left-[57vw] pt-28 text-white">STR<span className="font-nautica text-[7vw]">Q</span>RES</p>
      <p className="font-Bagross text-md absolute left-80 text-[hsl(52,98%,75%)] animate-ping">EXPLORE</p>
      <img src="/images/lotus.png" alt="" className="absolute left-[92vw] h-20 top-[50vw] animate-spin" />
      <img src="/images/ring.png" alt="" className="absolute left-[15vw] h-28 top-[27vw] animate-spin" />

    </div>
  );
}

export default Home_page;