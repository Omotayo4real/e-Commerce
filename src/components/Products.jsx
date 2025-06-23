import ProductCard from "./ProductCard.jsx";
import { productData } from "../constants";

                       
const Products = () => {
  return (
       <div className="container mx-auto px-6 md:px-12 lg:px-18" id="shop">
         <div className="text-center mb-10 space-y-3">
           <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
           <p className="text-sm text-gray-400 dark:text-white">Explore our products</p>
        </div>
         <div>
          <ProductCard data={productData}/>
          <ProductCard data={productData}/>
         </div>
       </div>
  )
}

export default Products
