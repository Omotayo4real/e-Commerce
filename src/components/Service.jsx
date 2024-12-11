
import { serviceData } from "../constants"

const Service = () => {
  return (
    <div>
        <div className="container mt-14 md:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {serviceData.map((data) =>(
                    <div key={data.id} className="flex flex-col items-start sm:flex-row gap-4">
                         {data.icon}
                         <div>
                            <h1 className="text-lg font-bold">{data.title}</h1>
                            <h1 className="text-gray-400 text:sm">{data.description}</h1>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Service
