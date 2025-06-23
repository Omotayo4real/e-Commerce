
import { IoCloseOutline } from "react-icons/io5"

import { useState } from "react";

const Popup = ( ) => {

     const[orderPopup, setOrderPopup] = useState(false);

      const handleOrderPopup = () => {
        setOrderPopup(!orderPopup)
      };
  return (
    <>
{orderPopup && (
    <div>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 shadow-md duration-200 w-[300px] bg-white p-4 dark:bg-gray-900 dark:text-white">
                <div className="flex justify-between">
                    <h2 className="text-7xl text-black">Order Now</h2>
                    <div>
                        <IoCloseOutline className="text-6xl cursor-pointer" onClick={handleOrderPopup}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    
    
    </>
   
  )
}

export default Popup
