/* eslint-disable react/prop-types */

import Button from "./shared/Button";
const ProductCard = ({data}) => {
  return (
    <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {data.map((data) => (
                <div  key={data.id} className="group">
                    <div className="relative">
                        <img src={data.img} alt="" className="h-[180px] w-[260px] object-fit rounded-md"/>

                        <div className="hidden absolute top-1/2 -translate-y-1/2 left-1/2 
                                                               -translate-x-1/2 w-full backdrop-blur-sm group-hover:flex
                                                               h-full text-center justify-center items-center">
                        <Button text={"Add To Cart"}
                                 bgColor={"bg-primary"}
                                 textColor={"text-white"} />
                        </div>
                    </div>

                    <div className="leading-7 text-center">
                        <h2 className="font-semibold">{data.title}</h2>
                        <h2 className="font-bold">${data.price}</h2>
                    </div>
                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCard
