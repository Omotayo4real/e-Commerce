

import { menuLinks } from "../constants";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { dropdownLinks } from "../constants";
import DarkMode from "../components/DarkMode";

const Navbar = () => {

const[cartPopup, setCartPopup] = useState(false);

const handleCartPopup = () => {
  setCartPopup(!cartPopup)
};
      
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 px-6">
      <div className="py-4">
          <div className="container mx-auto flex justify-between items-center mt-4 px-4 md:px-8 lg:px-16">
            <div className="flex items-center gap-4">
              <a href="#" className="text-2xl sm:text-3xl text-primary font-semibold tracking-widest uppercase">E-shop</a>

              <div className="hidden lg:block">
                 <ul className="flex items-center gap-4">
                {menuLinks.map((data, index) => (
                 <li key={index}><a href={data.href} className="inline-block 
                            gap-4 text-lg font-semibold text-gray-500 hover:text-black duration-200 dark:hover:text-white" >{data.name}</a></li>
              ))}

              <li className="relative pointer group flex items-center ">
                <a href='#' className=" flex items-center gap-[2px] font-semibold text-gray-500 py-2 hover:text-black dark:hover:text-white ">
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                  </span>
                </a>
                
                <div className="absolute top-5 hidden group-hover:block w-[200px]
                                p-2  rounded-md bg-white shadow-md mt-4 dark:bg-gray-900 dark:text-gray-400 duration-200">
                  <ul className="space-y-2 relative w-full">
                    {dropdownLinks.map((data, index) => (
                      <li key={index} >
                        <a  className='text-gray-500 hover:text-black
                                       hover:bg-primary/20 inline-block
                                       rounded-md font-semibold p-1 w-full
                                       dark:hover:text-white dark:hover:bg-gray-900' href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              </ul>
            </div>
            </div>
           
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block dark:border-gray-800 group:hover:dark:bg-gray-800">
                <input type="text" placeholder="Search" className="search-bar"/>
                <IoMdSearch 
                className="text-gray-600 text-xl absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200 dark:text-gray-400"/>
              </div>
            
              <button className="relative p-3" onClick={handleCartPopup} >
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/> 
                <div className="h-4 w-4 bg-red-500 text-white rounded-full absolute top-0 right-0
                flex items-center justify-center text-xs">4</div>
              </button>
              <div>
                <DarkMode />
              </div>
              {/* Cart Modal */}
              {cartPopup && (
                      <div>
                         <div className="h-screen w-screen fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm">
                            <div className="fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 shadow-md duration-200 w-[300px] bg-white p-4 dark:bg-gray-900">
                              <div className="flex justify-between">
                                  <h2 className="text-black dark:text-white">Shop Now</h2>
                                  <div className="mb-4">
                                      <IoCloseOutline className="text-2xl cursor-pointer" onClick={handleCartPopup}/>
                                  </div>
                              </div>
                              <div>
                                <input type="text" placeholder="Name" className="form-input dark:bg-gray-800 dark:placeholder-white border-gray-700"/>
                                <input type="text" placeholder="Address" className="form-input dark:bg-gray-800 dark:placeholder-white border-gray-700"/>
                                <input type="email" placeholder="Email" className="form-input dark:bg-gray-800 dark:placeholder-white border-gray-700"/>
                               <div className="flex justify-center"> 
                                   <button className="bg-red-600 text-white rounded-full py-2 px-6 " onClick={handleCartPopup}>Shop By Category</button>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              )}
            </div>
          </div>
      </div>    </div>
  
  )
}

export default Navbar
