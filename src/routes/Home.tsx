import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import bgImg1 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
import bgImg2 from "../assets/Bg-images/pexels-kumar-saurabh-625146-1456613.jpg"
import bgImg3 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
import bgImg4 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
import bgImg5 from "../assets/Bg-images/pexels-vireshstudio-2060240.jpg"
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import NewsSection from '../component/NewsSection'
import TeamSection from '../component/TeamSection'
import FunctionG from '../component/FunctionG'
import SpecialFun from '../component/SpecialFun'


const slides = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5];

function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    const interval =setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval);
  }, [])
  return (
    <div className='w-full flex  justify-center items-center flex-col'>

      <div className=' relative flex justify-center items-center  flex-col'>
        <div className='bg-black/40 w-screen lg:h-screen h-[300px] absolute'></div>
        <img src={slides[currentSlide]} className=' w-screen lg:h-screen h-[300px] object-cover' alt="" />
        <Navbar />
        <div className='absolute top-[50%] flex justify-between w-11/12 items-center'>
          <CiCircleChevLeft size={36} onClick={prevSlide} className=' cursor-pointer hover:text-white  text-gray-400' />
          <CiCircleChevRight size={36} onClick={nextSlide} className=' cursor-pointer  hover:text-white  text-gray-400' />
        </div>
        <div className='absolute bottom-[7%] flex h justify-between lg:w-2/12 lg:gap-0 gap-3 items-center '>
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${currentSlide === index
                ? "bg-white"
                : "bg-black/70 border-2 border-white"
                }`}
            ></div>
          ))}

        </div>
      </div>
      <NewsSection />
      <TeamSection />
      <FunctionG />
      <SpecialFun />
    </div>
  )
}

export default Home
