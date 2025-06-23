
import { blogData } from "../constants";

const Blogs = () => {
  return (
      <div className="container px-6 mx:px-12 lg:px-18" id="blogs">

          <h1 className="text-center font-bold text-2xl">Recent News</h1>

          <div className="my-20 over-flow:hidden ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
              {blogData.map((data, index) => (
                <div key={index} className="bg-white dark:bg-gray-900">
                   <div className="overflow-hidden rounded-2xl mb-2">
                       <img src={data.image} alt="" className="w-full h-[220px] hover:scale-105 object-cover duration-500 rounded-2xl"/>  
                   </div>
                   <div className="space-y-2">
                      <p className="text-sm text-gray-500">{data.published}</p>
                      <p className="font-bold line-clamp-1">{data.title}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{data.subtitle}</p>
                   </div>
                </div>
              ))}
          </div>
       </div>
    </div>
  )
}

export default Blogs
