
import Slider from "react-slick";
import { heroData } from "../constants";
// import Button from "./shared/Button";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";




const Hero = () => {
    const[heroPopup, setHeroPopup] = useState(false);
     
    const handleHeroPopup = () => {
      setHeroPopup(!heroPopup)
    }
  
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
  
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,

    }
  return (
    <div className="dark:bg-gray-900 duration-200 px-6 md:px-12 lg:px-18" id="home">
       <div className="container overflow-hidden dark:bg-gray-900 min-h-[550px] sm:min-h-[650px]
                        flex justify-center items-center">
          <div className=" container pt-20 dark:text-white rounded-3xl bg-gradient-to-r from-gray-300/80 to-gray-100  sm:pb-0 dark:from-gray-800 dark:to-gray-700 duration-200">
           <Slider {...settings}>
             {heroData.map((data) => (
               <div key={data.id}>
                   <div className="grid grid-cols-1 sm:grid-cols-2  pb-20">
                      <div className="flex flex-col justify-center items-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 pl-2">
                        <h1 
                           className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>

                        <h1 
                           className="text-4xl sm:text-5xl lg:text-6xl font-bold">{data.title}</h1>

                        <h1 
                           className="text-5xl sm:text-5xl lg:text-6xl font-bold
                            text-white z-10 uppercase dark:text-white 
                              sm:text-[60px] md:text-100px lg:text-[72px]">{data.title2}</h1>
                        <div 
                           >
                            <button className="bg-red-600 text-white rounded-full py-2 px-6 " onClick={handleHeroPopup}>Shop By Category</button>
                        </div>
                      
                      </div>

                      <div className="order-1 sm:order-2">
                        <div
                         className="relative z-10">
                           <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[400px] sm:w-[450px]
                                                              sm:scale-105 lg:scale-110 object-contain mx-auto
                                                              drop-shadow-[-8px_4px_6px rgba(0, 0, 0,.4)]"/>
                       </div>
                      </div>
                   </div>
               </div>
              ))}
            </Slider>

               { heroPopup && (
                  <div>
                          <div className="h-screen w-screen fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm">
                            <div className="fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 shadow-md duration-200 w-[300px]  bg-white p-4 dark:bg-gray-900 dark:text-white">
                              <div className="flex justify-between mb-4">
                                  <h2 className="text-black dark:text-white">Shop now</h2>
                                  <div>
                                      <IoCloseOutline className="text-2xl cursor-pointer" onClick={handleHeroPopup}/>
                                  </div>
                              </div>
                              <div>
                                    <input type='text' placeholder="Name" className="form-input dark:bg-gray-800 dark:placeholder-white border-gray-700"/>
                                    <input type='text' placeholder="Address" className="form-input dark:bg-gray-800 dark:placeholder-white border-gray-700"/>
                                    <input type='email' placeholder="Email" className="form-input dark:bg-gray-800 dark:placeholder-white border-gray-700"/>
                                 </div>
                                  <div className="flex justify-center">
                                  <button className="bg-red-600 text-white rounded-full py-2 px-6 " onClick={handleHeroPopup}>Shop By Category</button>
                               </div>
                            </div>
                      </div>
                  </div>
                  
                  )}
          </div>
       </div>
           
    </div>
  )
}

export default Hero
