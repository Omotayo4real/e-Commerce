/* eslint-disable react/prop-types */



const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
        <div className="container">
            <div 
               style={{backgroundColor: data.bgColor}}
               className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                <div className="p-6 sm:p-8">
                    <p className="text-sm">{data.discount}</p>
                    <h1 className="text-4xl uppercase font-bold lg:text-7xl">
                        {" "}
                        {data.title}</h1>
                    <p className="text-sm">{data.date}</p>
                </div>

                <div className="h-full flex items-center">
                    <img src={data.image} alt=""
                     className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"/>    
                </div>

                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                    <p className="font-bold text-xl">{data.title2}</p>
                    <p className="text-3xl sm:text-5xl">{data.title3}</p>
                    <p className="text-sm tracking-wide leading-5">{data.title4}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
