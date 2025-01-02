
import Heading from "./shared/Heading";
import ProductCard from "./ProductCard.jsx";
import { productData } from "../constants";




                       
const products = () => {
  
  return (
    <div className="">
       <div className="container">
        <div>
          <Heading title="Our Products" subtitle={"Explore Our Products"}/>
        </div>
         <div>
          <ProductCard data={productData}/>
         </div>
       </div>
    </div>
  )
}

export default products
