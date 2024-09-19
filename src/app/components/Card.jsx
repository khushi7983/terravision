// import React from 'react'

// const Card = () => {
//   return (
//     <div className='py-16 px-20 flex gap-4 font-serif'>

//        <div className='bg-customColor flex gap-4 rounded-3xl p-4 justify-center items-center h-[300px] w-[550px] relative z-1'>
//        <div className='flex-1'><img src="COG-Img.svg" className='h-auto w-full' /></div>
//         <div className='flex flex-1 flex-col justify-center '>
//           <h1 className='text-3xl mb-4 font-bold text-pink-500'>COG Conversion</h1>
//           <p className=' text-xl'>Converts INSAT Level 1 data into Cloud Optimized GeoTIFFs with support for multiple spectral bands.</p>
//         </div>

//       </div>

//       <div className='bg-customColor flex gap-4 rounded-3xl p-4 justify-center items-center h-[300px] w-[550px]  mt-72 absolute left-80 z-2'>
//        <div className='flex-1'><img src="streaming.svg" className='h-auto w-full' /></div>
//         <div className='flex flex-1 flex-col justify-center '>
//           <h1 className='text-3xl mb-4 font-bold text-red-700'>Selective
//           Streaming</h1>
//           <p className=' text-xl'>Implement selective streaming and partial downloads for targeted data access and reduced bandwidth usage.</p>
//         </div>

//       </div>

//       <div className='bg-customColor flex gap-4 rounded-3xl p-4 justify-center items-center h-[300px] w-[550px]  relative left-9 top-16    z-3'>
//        <div className='flex-1'><img src="manipulation.svg" /></div>
//         <div className='flex flex-1 flex-col justify-center '>
//           <h1 className='text-3xl mb-4 font-bold text-customPurple'>Real-Time Manipulation</h1>
//           <p className=' text-xl'>Develop tools for on-the-fly spectral band adjustments and integrate them into a user-friendly cloud-based interface.</p>
//         </div>

//       </div>
      
//     </div>
    
//   )
// }

// export default Card






// import React from 'react';

// const Card = () => {
//   return (
//     <div className='py-16 px-20 flex flex-col gap-16 font-serif bg-black'>
//       {/* COG Conversion Card */}
//       <div className='bg-gray-800 shadow-lg flex gap-4 rounded-3xl p-6 justify-center items-center h-[300px] w-[550px] relative z-10'>
//         <div className='flex-1'>
//           <img src="COG-Img.svg" className='h-auto w-full' alt="COG Conversion" />
//         </div>
//         <div className='flex flex-1 flex-col justify-center'>
//           <h1 className='text-3xl mb-4 font-bold text-yellow-400'>COG Conversion</h1>
//           <p className='text-lg text-gray-300'>
//             Converts INSAT Level 1 data into Cloud Optimized GeoTIFFs with support for multiple spectral bands.
//           </p>
//         </div>
//       </div>

//       {/* Selective Streaming Card */}
//       <div className='bg-gray-800 shadow-lg flex gap-4 rounded-3xl p-6 justify-center items-center h-[300px] w-[550px] relative z-20'>
//         <div className='flex-1'>
//           <img src="streaming.svg" className='h-auto w-full' alt="Selective Streaming" />
//         </div>
//         <div className='flex flex-1 flex-col justify-center'>
//           <h1 className='text-3xl mb-4 font-bold text-yellow-400'>Selective Streaming</h1>
//           <p className='text-lg text-gray-300'>
//             Implement selective streaming and partial downloads for targeted data access and reduced bandwidth usage.
//           </p>
//         </div>
//       </div>

//       {/* Real-Time Manipulation Card */}
//       <div className='bg-gray-800 shadow-lg flex gap-4 rounded-3xl p-6 justify-center items-center h-[300px] w-[550px] relative z-30'>
//         <div className='flex-1'>
//           <img src="manipulation.svg" className='h-auto w-full' alt="Real-Time Manipulation" />
//         </div>
//         <div className='flex flex-1 flex-col justify-center'>
//           <h1 className='text-3xl mb-4 font-bold text-yellow-400'>Real-Time Manipulation</h1>
//           <p className='text-lg text-gray-300'>
//             Develop tools for on-the-fly spectral band adjustments and integrate them into a user-friendly cloud-based interface.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;




import React from 'react';

const Card = () => {
  return (
    <div className='py-16 px-20 flex  gap-16 font-serif  items-center  bg-black' 
    >
      {/* COG Conversion Card */}
      <div className=' shadow-lg flex flex-col items-center rounded-3xl p-6 justify-center h-auto w-[450px] ' style={{ 
          background: 'linear-gradient(269.97deg, #5A6EC2 1.47%, #192D84 27.42%, #1C2B6E 50.52%, #000000 90.7%)',
           backdropFilter: 'blur(10px)',
          opacity: '1.5'
        }}
      >
        <div className='w-full mb-4'>
          <img src="COG-Img.svg" className='h-auto w-full rounded-xl' alt="COG Conversion" />
        </div>
        <h1 className='text-3xl mb-4 font-bold text-yellow-400'>COG Conversion</h1>
        <p className='text-lg text-gray-300 text-center'>
          Converts INSAT Level 1 data into Cloud Optimized GeoTIFFs with support for multiple spectral bands.
        </p>
      </div>

      {/* Selective Streaming Card
      <div className=' relative bg-transparent shadow-lg  flex flex-col items-center rounded-3xl p-6 justify-center h-auto w-[450px]' >
        <div className='w-full mb-4'>
          <img src="streaming.svg" className='h-auto w-full rounded-xl' alt="Selective Streaming" />
        </div>
        <div className='relative w-full text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4'>
        <h1 className='text-3xl mb-4 font-bold text-yellow-400'>Selective Streaming</h1>
        <p className='text-lg text-gray-300 text-center'>
          Implement selective streaming and partial downloads for targeted data access and reduced bandwidth usage.
        </p>
        </div>
      </div> */}

         {/* Selective Streaming Card */}
<div className='relative bg-white bg-opacity-5 backdrop-blur-lg shadow-xl flex flex-col items-center rounded-3xl p-6 justify-center h-auto w-[450px]'>
  <div className='w-full mb-4'>
    <img src="streaming.svg" className='h-auto w-full rounded-xl' alt="Selective Streaming" />
  </div>
  <div className='relative w-full text-center bg-black bg-opacity-20 backdrop-blur-md rounded-2xl p-4'>
    <h1 className='text-3xl mb-4 font-bold text-yellow-400'>Selective Streaming</h1>
    <p className='text-lg text-gray-300'>
      Implement selective streaming and partial downloads for targeted data access and reduced bandwidth usage.
    </p>
  </div>
</div>





      {/* Real-Time Manipulation Card */}
      <div className='relative bg-white bg-opacity-5  backdrop-blur-lg shadow-2xl  flex flex-col items-center rounded-3xl p-6 justify-center h-auto w-[450px]'>
        <div className='w-full mb-4'>
          <img src="manipulation.svg" className='h-auto w-full rounded-xl ' alt="Real-Time Manipulation" />
        </div>
        <h1 className='text-3xl mb-4 font-bold text-yellow-400 pl-10'> Real-Time Manipulation</h1>
        <p className='text-lg text-gray-300 text-center'>
          Develop tools for on-the-fly spectral band adjustments and integrate them into a user-friendly cloud-based interface.
        </p>
      </div>
    </div>
  );
}

export default Card;
