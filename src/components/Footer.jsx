
import { footerLinks } from "../constants";
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 pb-10 px-6 ">
       <div className="m-2 lg:m-8">
          <div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5 pb-20 gap-10 sm:text-left">
                   <div className="">
                         <a href="#" className="text-2xl sm:text-3xl text-primary
                            font-semibold tracking-wider uppercase">E-shop</a>
                         <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor<br /> sit amet consectetur,<br /> adipisicing elit. Quae, magni!</p>
                         <p className="mt-4">Made by Tayo</p>
                         <a href="#" target="_blank" className="py-2 rounded-full bg-primary/90 text-white mt-4 text-sm inline-block px-3">Visit our youtube channel</a>
                   </div>

                   <div className="col-span-1/2 grid-cols-2 sm:grid-cols-3 md:pl-10 ">
                       <div className="px-4 sm:text-left">
                         <h1 className="mb-3 text-xl font-bold sm:text-left ">Important Links</h1>
                           <ul className="space-y-3 sm:text-left">
                          {footerLinks.map(
                           (data, index) => (
                              
                              <li key={index}>
                                 <a href={data.link} className="text-gray-600 hover:dark:text-white duration-300 dark:text-gray-400 list-none">
                                    {data.title}
                                 </a>
                              </li>
                              
                           ))}
                         </ul>
                       </div>
                   </div>

                   <div className="col-span-1/2 grid-cols-2 sm:grid-cols-3 md:pl-10 sm:text-left">
                       <div className="px-4">
                       <h1 className="mb-3 text-xl font-bold">Quick Links</h1>
                         <ul className="space-y-3">
                         {footerLinks.map(
                           (data, index) => (
                              
                              <li key={index}>
                                 <a href={data.link} className="text-gray-600 hover:dark:text-white duration-300 dark:text-gray-400 list-none">
                                    {data.title}
                                 </a>
                              </li>
                              
                           ))}
                         </ul>
                       </div>
                   </div>

                     <div className="px-4 col-span-1/2 sm:col-auto">
                       <div>
                          <h1 className="mb-3 sm:text-left text-xl font-bold">Address</h1>

                           <div className="flex items-center gap-3 mt-6">
                              <FaLocationArrow className="text-3xl, hover:text-primary duration-200"/>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           </div>
                           <div className="flex items-center gap-3 mt-6">
                              <FaMobileAlt className="text-2xl, hover:text-primary duration-200"/>
                              <p>+234 9000003000</p>
                           </div>
                           <div className="flex items-center gap-3 mt-6">
                             <FaInstagram className="text-3xl hover:text-primary duration-200"/>
                             <FaFacebook className="text-3xl hover:text-primary duration-200"/>
                             <FaLinkedin className="text-3xl hover:text-primary duration-200"/>
                           </div>
                       </div>
                     </div>
              </div>
          </div>
       </div>  
    </div>
  )
}

export default Footer
