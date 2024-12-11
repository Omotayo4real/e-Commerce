

import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Service from "./components/Service";
import Banner from "./components/Banner";
import image1 from "./assets/mainheadset.png";


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



function App() {

 

  return (
    <>
     <div>
       <Navbar />
       <Hero />
       <Category />
       <Category2 />
       <Service />
       <Banner data={data} />
     </div>
    </>
  )
}

export default App
