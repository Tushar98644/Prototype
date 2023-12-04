/* eslint-disable @next/next/no-img-element */
const Home_page = () => {
  return (
    <div className="bg h-screen">
      <img src="/star-removebg-preview.png" alt="" className="absolute left-[48vw] top-6 animate-spin"/>
      <div className="text-white text-[5vw] px-40 py-40 top-[5vw] flex flex-col">
        <span className="font-windsong pl-24 animate-pulse">creating</span>
        <span className="font-Tanpearl absolute top-56 animate-pulse"><span className="font-nautica text-[7vw]">E</span>MOTIONS</span>
      </div>
      <p className="font-Bagross absolute top-[23vw] left-12 text-white text-xs mx-60 text-end">Cras ullamcorper ante mauris, sed <p> vestibulum ligula blandit eu. Aliquam nec arcu </p> quis nibh tristique vulputate gravida non tortor. <p> Vivamus ut posuere mauris. </p></p>
      <p className="font-Tanpearl text-5xl absolute left-[58vw] pt-28 text-white">STR<span className="font-nautica text-[7vw]">Q</span>RES</p>
      <p className="font-Bagross text-md absolute left-80 text-[#FEED82] animate-ping">EXPLORE</p>
    </div>
  );
}

export default Home_page;