
import Button from "./shared/Button";
import playstation from "../assets/category/gaming.png";
import vr from "../assets/category/vr.png"
import speaker from "../assets/category/speaker.png"

const Category2 = () => {
  return (
    <div className="py-8 px-6">
        <div className="container mx-auto">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto sm:px-6">
              <div className="py-10 pl-5 col-span-2 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-gray-600">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-3">Console</p>
                       <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                    <div>
   
                    </div>
                 </div>
                   <div>
                      <img src={playstation} alt="Console" className="h-[250px] absolute top-[30px] right-0"/>
                   </div>
              </div>

              <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div >
                    <div className="mb-4 absolute top-[50px]">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Oculus</p>
                       <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandGreen"}/>
                    </div>
                    <div>
                        <img src={vr} alt="VR" className="absolute w-[220px] bottom-0 right-1"/>
                    </div>
                 </div>
              </div>

              <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4 absolute top-[40px]">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Speaker</p>
                       <Button text="Laptops" bgColor={"bg-white"} textColor={"text-brandBlue"}/>
                    </div>
                    <div>
                        <img src={speaker} alt="" className="absolute w-[220px] bottom-0 left-[10px]"/>
                    </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Category2
