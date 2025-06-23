/* eslint-disable react/prop-types */

const Heading = ({title, subtitle}) => {
  return (
    <div>
        <div className="text- mb-10 min-w-[600px] space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
    </div>
  )
}

export default Heading;
 