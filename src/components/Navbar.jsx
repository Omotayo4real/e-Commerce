
import { menuLinks } from "../constants";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { dropdownLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-4">
              <a href="#" className="text-2xl sm:text-3xl text-primary font-semibold tracking-wider uppercase">E-shop</a>

              <div className="hidden lg:block">
                 <ul className="flex items-center gap-4">
                {menuLinks.map((data, index) => (
                 <li key={index}><a href={data.href} className="inline-block 
                            gap-4 text-lg font-semibold text-gray-500 hover:text-black duration-200">{data.name}</a></li>
              ))}

              <li className="relative pointer group flex items-center ">
                <a href='#' className=" flex items-center gap-[2px] font-semibold text-gray-500 py-2">
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                  </span>
                </a>
                
                <div className="absolute  hidden group-hover:block w-[200px]
                                p-2  rounded-md bg-white shadow-md mt-40">
                  <ul className="space-y-2 relative w-full">
                    {dropdownLinks.map((data, index) => (
                      <li key={index} >
                        <a  className='text-gray-500 hover:text-black
                                       hover:bg-primary/20 inline-block
                                       rounded-md font-semibold p-1 w-full' href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              </ul>
            </div>
            </div>
           
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input type="text" placeholder="Search" className="search-bar"/>
                <IoMdSearch className="text-gray-600 text-xl absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200"/>
              </div>

              <button className="relative p-3">
                <FaCartShopping className="text-xl text-gray-600"/> 
                <div className="h-4 w-4 bg-red-500 text-white rounded-full absolute top-0 right-0
                                 flex items-center justify-center text-xs">4</div>
              </button>

            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Navbar
