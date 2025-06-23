

import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Service from "./components/Service";
import Banner from "./components/Banner";
import image1 from "./assets/hero/headphone.png";
import Products from "./components/Products";
import image2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
// import Popup from "./components/Popup";




const data = {
   discount: "30% OFF",
   title: "fine smile",
   date: "10 Jan to 28 Jan",
   image: image1,
   title2: "Air Solo Bass",
   title3: "Winter Sale",
   title4: "Lorem ipsum, dolor sit amet consecture dispicing elit. Eaque reiciendis",
   bgColor: "#f42c37"
}

const data2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: image2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consecture dispicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f"
}

function App() {

  return (
    <>
     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
       <Navbar/>
       <Hero />
       <Category />
       <Category2 />
       <Service />
       <Banner data={data} />
       <Products />
       <Banner data={data2} />
       <Blogs />
       <Partners />
       <Footer />
       {/* <Popup/>  */}
     </div>

    </>
  )
}

export default App
