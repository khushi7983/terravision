import React from 'react'

const Cards = () => {
  return (
    <div className='py-16 px-20 flex  gap-16 font-serif  items-center ' 
    >
      {/* COG Conversion Card */}
      <div className='relative bg-white bg-opacity-5  backdrop-blur-lg shadow-2xl  flex flex-col items-center  p-[10px] px-[16px] justify-center h-auto w-[450px] pb-10 rounded-[34px] border-2 border-white/10 transition-trasform transform hover:scale-110 hover:backdrop-blur-lg '>
        <div className='w-full mb-4'>
          <img src="COG-Img.svg" className='h-auto w-full rounded-xl ' alt="COG-Coversion" />
        </div>
        <h1 className='text-3xl mb-4 font-bold text-yellow-400 '> COG <br /> Coversion</h1>
        <p className='text-lg text-gray-300 text-center'>
        Converts INSAT Level 1 data into Cloud Optimized GeoTIFFs with support for multiple spectral bands.

        </p>
      </div>



         {/* Selective Streaming Card */}
         <div className='relative bg-white bg-opacity-5  backdrop-blur-lg shadow-2xl  flex flex-col items-center rounded-3xl p-5 justify-center h-auto w-[450px] pb-10 border-2 border-white/10 transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'>
        <div className='w-full mb-4'>
          <img src="streaming3.png" className='h-auto w-full rounded-xl ' alt="SelectiveStreaming" />
        </div>
        <h1 className='text-3xl mb-4 font-bold text-yellow-400 pl-16'>Selective Streaming</h1>
        <p className='text-lg text-gray-300 text-center'>
        Implement selective streaming and partial downloads for targeted data access and reduced bandwidth usage.
        </p>
      </div>





      {/* Real-Time Manipulation Card */}
      <div className='relative bg-white bg-opacity-5  backdrop-blur-lg shadow-2xl  flex flex-col items-center rounded-[34px] p-[10px] px-[16px] justify-center h-auto w-[450px] pb-10 border-2 border-white/10 transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'>
        <div className='w-full mb-4'>
          <img src="manipulation.svg" className='h-auto w-full rounded-xl ' alt="Real-Time Manipulation" />
        </div>
        <h1 className='text-3xl mb-4 font-bold text-yellow-400 pl-10'>Real-Time 
          Manipulation</h1>
        <p className='text-lg text-gray-300 text-center'>
          Develop tools for on-the-fly spectral band adjustments and integrate them into a user-friendly cloud-based interface.
        </p>
      </div>
    </div>
  )
}

export default Cards
