import Link from 'next/link';
import React from 'react';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import Challenges from './components/Challenges';

const Page = () => {
  return (
    <div 
      className='relative bg-black text-white min-h-full overflow-hidden ' 
      style={{ backgroundImage: `url('space.png')`, backgroundSize: 'cover', backgroundPosition: 'center' , filter: 'contrast(1.19)'  }}
    >
      {/* Adding a semi-transparent overlay for the page container */}
      <div className='absolute inset-0   z-0 backdrop-blur-sm  bg-[rgba(0,0,0,0.3)];
'></div>
      
      {/* Section with bgImage.jpg */}
      <div 
        className='relative z-10 h-screen w-full bg-cover bg-center'
        style={{ backgroundImage: `url('./bgImage.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for bgImage.jpg */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10">
          <h1 className='text-3xl sm:text-5xl md:text-6xl pt-24 mx-4 sm:mx-20 font-serif leading-tight'>
            ANALYZE <br />
            CLOUD OPTIMIZED <br />
            GEOTIFF IMAGES!
          </h1>
          <h3 className='text-base leading-tight my-8 sm:text-lg md:text-xl mx-4 sm:mx-20 pt-5 font-serif  '>
            Unlock the potential of geospatial data <br />
            with TerraVision innovative tools.
          </h3>
          <Link href='/login'className='mx-5 my-5 sm:mx-20 pt-5 '>
            <span className='bg-customColor p-3 sm:p-4 rounded-md font-semibold text-base sm:text-lg hover:bg-blue-800 cursor-pointer font-serif'>
              Start Exploring
            </span>
          </Link>
        </div>
        <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-950 to-transparent z-10'></div>

      </div>

      <div className='h-screen'>
        <Dashboard />
      </div>

      <div className='h-screen mx-20'>
        <Cards />
      </div>

      
      <div>
        <Challenges />
      </div>


      <div className='flex gap-8 items-center justify-center h-auto p-16 rounded-3xl relative  bg-opacity-5 backdrop-blur-lg shadow-2xl mx-40 my-20  border-2 bg-white border-white/10'>
        <div>
          <img className='rounded-[34px] h-96' src='https://www.isro.gov.in/media_isro/image/media/Missions/Missionsaccomplished/resized/spacecraft_large.png.webp' />
        </div>
        <div className='text-xl md:w-1/2 px-8 md:px-0 text-justify'>
          <h2 className='text-5xl font-bold font-serif mb-3'>Our Mission</h2>
          <p className='mt-5 mb-5 font-serif'>
            We are dedicated to transforming the accessibility and usability of INSAT satellite data through advanced Cloud Optimized GeoTIFFs (COGs). Our platform streamlines the conversion of INSAT Level 1 data into efficient COGs, enabling selective streaming, partial downloads, and real-time manipulation of spectral bands. Designed for meteorologists and researchers, our tools offer enhanced data handling with minimal bandwidth usage and seamless cloud-based integration. Our mission is to empower users with cutting-edge solutions for improved weather forecasting and environmental analysis.
          </p>
          <Link href='./about' className='mt-5'>
            <span className='bg-customColor p-2 mt-10 sm:p-4 rounded-md font-semibold text-base sm:text-lg hover:bg-blue-800 cursor-pointer font-serif'>
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;


