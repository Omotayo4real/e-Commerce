import lightMode from "../assets/website/light-mode-button.png";
import darkMode from "../assets/website/dark-mode-button.png";
import { useState, useEffect } from "react";

const DarkMode = () => {
    const[theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
     
    const element = document.documentElement;
     
      useEffect(() => {
        localStorage.setItem(theme, "theme")
        if(theme === "dark"){
            element.classList.add("dark")
            element.classList.add("dark")
        }else{element.classList.add("light")
             element.classList.remove("dark")
        }
    })
 
  return (
    <div className="relative">
       <img 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark") }
          src={darkMode}
           alt="darkMode" 
           className={`w-12 cursor-pointer z-10 absolute top-[1px]
           ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}/>

           <img 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark") }
            src={lightMode}
           alt="darkMode" 
           className={`w-12 cursor-pointer z-10`}/>
    </div>
  )
}

export default DarkMode
