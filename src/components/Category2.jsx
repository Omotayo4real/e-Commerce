
import Button from "./shared/Button";
import playstation from "../assets/category/gaming.png";

const Category2 = () => {
  return (
    <div className="py-8">
                <div className="container">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="py-10 pl-5 col-span-2 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-gray-600">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-3">Earphone</p>
                       <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                 </div>
                   <div>
                      <img src={playstation} alt="" />
                   </div>
              </div>

              <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Gadget</p>
                       <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandGreen"}/>
                    </div>
                 </div>
              </div>

              <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Gadget</p>
                       <Button text="Laptops" bgColor={"bg-white"} textColor={"text-brandBlue"}/>
                    </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Category2
