'use client'


const Statistics = ( {number, stat} ) => {
  return (
    <div className="flex flex-col items-center / lg:flex-row">
      <h1 className="mr-2 text-3xl font-bold text-gray-400">{number}</h1>
      <h2 className="text-lg text-center / text-sky-800 font-bold">{stat}</h2>
    </div>
  )
}

export default Statistics