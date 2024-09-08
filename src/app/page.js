import React from 'react'

const page = () => {
  return (
    <div 
    className='h-screen w-full bg-cover bg-center text-white relative  '
    style={{backgroundImage:`url('./bgImage.jpg')`}}>
      <h1 className='items-center text-5xl pt-32 mx-20 font-serif leading-tight'>ANALYZE <br />
      CLOUD OPTIMIZED <br /> GEOTIFF IMAGES!</h1>
      <h3 className='text-lg mx-20 pt-7 font-serif'>Unlock the potential of geospatial data <br /> with TerraVision innovative tools.</h3>
      <div className='mx-20 pt-10 '><span className='bg-customColor p-4 rounded-3xl font-semibold text-lg
       hover:bg-blue-800 cursor-pointer'>Start Exploring</span></div>
    
   
    </div>
  )
}

export default page
