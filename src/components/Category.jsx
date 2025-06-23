
import Button from "./shared/Button";
import earphone from "../assets/category/earphone.png";
import macbook from "../assets/category/macbook.png";
import watch from "../assets/category/watch.png";

const Category = () => {
  return (
    <div className="py-8 px-6 lg:px-0">
        <div className="container mx-auto">
           <div className=" container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-gray-400">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-3xl lg:5xl xl:text-5xl font-bold opacity-20 mb-3">Earphone</p>
                       <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                    <div> 
                        <img src={earphone} alt="Earphone" className="absolute w-[320px] bottom-0"/>
                    </div>
                 </div>
              </div>

              <div className="py-10 px-4 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-3xl xl:text-5xl font-bold opacity-40 mb-3">Gadget</p>
                       <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandYellow"}/>
                    </div>
                    <div>
                       <img src={watch} alt="watch" className="absolute w-[320px] top-[10px]"/>
                    </div>
                 </div>
              </div>

              <div className="py-10 col-span-2 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-3xl xl:text-5xl font-bold opacity-40 mb-3">Laptop</p>
                       <Button text="Laptops" bgColor={"bg-white"} textColor={"text-primary"}/>
                    </div>
                    <div>
                        <img src={macbook} alt="Macbook" className="absolute w-[320px] top-0 right-0"/>
                    </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Category
