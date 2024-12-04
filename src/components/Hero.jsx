import Slider from "react-slick";
import { heroData } from "../constants";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
const Hero = () => {

 
  
  
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
  
      autoplaySpeed: 4000,
      cssEase: 'ease-in-out',
      pauseOnHover: false,
      pauseOnFocus: true,

    }
  return (
    <div className="container">
       <div className="overflow-hidden rounded-3xl">
         <Slider {...settings}>
            {heroData.map((data) => (
              <div key={data.id}>
                 <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                      <h1>{data.subtitle}</h1>
                      <h1>{data.title}</h1>
                      <h1>{data.title2}</h1>
                      <div>
                        <button className="py-1 px-2 rounded-full bg-red-500">
                          Shop Now
                        </button>
                     </div>
                    </div>

                    <div>
                      <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105
                                                            lg:scale-110 object-contain mx-auto"/>
                    </div>
                 </div>
              </div>
            ))}
         </Slider>
       </div>
    </div>
  )
}

export default Hero
