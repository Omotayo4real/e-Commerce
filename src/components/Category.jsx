
import Button from "./shared/Button";

const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-gray-400">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-3">Earphone</p>
                       <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                 </div>
              </div>

              <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Gadget</p>
                       <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandYellow"}/>
                    </div>
                 </div>
              </div>

              <div className="py-10 col-span-2 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
                 <div>
                    <div className="mb-4">
                       <p className="mb-[2px] text-white">Enjoy</p>
                       <p className="text-2xl font-semibold mb-[2px]">With</p>
                       <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Gadget</p>
                       <Button text="Laptops" bgColor={"bg-white"} textColor={"text-primary"}/>
                    </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Category
