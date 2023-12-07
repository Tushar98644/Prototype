'use client'
import { Carousel } from "@/src/components";

/* eslint-disable @next/next/no-img-element */
const Home_page = () => {
  return (
    <div className="bg-[url('/images/Green-Hero.png')] h-screen max-w-screen bg-repeat bg-cover bg-center flex flex-col">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[20vw] h-full max-w-screen-xl mx-auto p-8 relative">
          <div className="absolute inset-0">
            <img src="/images/rectangle.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-evenly px-12 py-1 items-center z-1">
        <p className="font-Bagross text-white text-[1.1vw] justify-self-start">SNEHA <br /> <span className="ml-8">CHAKRABORTHY</span></p>
        <img src="images/spin.png" alt="" className="h-[70px] w-[80px] justify-self-center z-10" />
        <p className="font-Bagross text-white text-[1.1vw] justify-self-end">REACH OUT</p>
      </div>
      <div className="grid grid-cols-5 pb-[1vw]">
        <div className="flex flex-col col-span-2">
          <div className="grid grid-rows pl-[7vw] pt-[3vw] text-white">
            <span className="font-windsong ml-[10vw] text-[6.8vw]">creating</span>
            <span className="font-Tanpearl mt-[-3vw] text-[5.8vw] z-10"><span className="font-nautica text-[10.8vw]">E</span>MOTIONS</span>
          </div>
          <p className="font-Bagross mt-[-7vw] text-white text-[0.97vw] text-end mx-8">Cras ullamcorper ante mauris, sed <p> vestibulum ligula blandit eu. Aliquam nec arcu </p> quis nibh tristique vulputate gravida non tortor. <p> Vivamus ut posuere mauris. </p></p>
          <div className="flex flex-row items-center justify-center mr-20">
            <img src="images/ring.png" alt="" className="w-[150px] h-[150px]" />
            <p className="font-Bagross text-[1.2vw] ml-[-40px] text-[hsl(52,98%,75%)]">EXPLORE</p>
          </div>
        </div>
        <div className="flex col-span-1">
        </div>
        <div className="col-span-2 grid grid-rows">
          <div className="w-[10vw] pt-[4vw] ml-[1vw]">
            <Carousel />
          </div>
          <p className="font-Tanpearl text-[3.3vw] ml-[-5vw] text-white self-end z-10">STR<span className="font-nautica text-[7vw]">O</span>KES</p>
        </div>
      </div>
      {/* <div className="grid grid-cols px-12">
        <img src="images/lotus.png" alt="" className=" w-[68px] h-[62px] justify-self-end" />
      </div> */}
      <div className="fixed bottom-[2vw] right-[2vw]">
        <img src="images/lotus.png" alt="" className=" w-[68px] h-[62px] justify-self-end" />
      </div>
    </div>
  );
}

export default Home_page;