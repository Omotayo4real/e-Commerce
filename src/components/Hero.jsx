import Slider from "react-slick";
import { heroData } from "../constants";
import Button from "./shared/Button";
const Hero = () => {

  
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
    <div className="container">
       <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px]
                        flex justify-center items-center hero-bg-color">
          <div className="container pb-8 sm:pb-0 ">
           <Slider {...settings}>
             {heroData.map((data) => (
               <div key={data.id}>
                   <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="flex flex-col justify-center items-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{data.title}</h1>
                        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white z-10 uppercase">{data.title2}</h1>
                        <div>
                          <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white"/>
                        </div>
                      </div>

                      {/*    img div    */}
                      <div className="order-1 sm:order-2">
                        <div>
                           <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[350px]
                                                              sm:scale-105 lg:scale-110 object-contain mx-auto
                                                              drop-shadow-[-8px_4px_6px rgba(0, 0, 0,.4)]"/>
                       </div>
                      </div>
                   </div>
               </div>
              ))}
            </Slider>
          </div>
       </div>
           
    </div>
  )
}

export default Hero
