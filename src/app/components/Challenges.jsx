import React from 'react';

const Challenges = () => {
  return (
    <div className='relative flex justify-center items-center h-screen  px-16'>
      {/* Central Circle */}
      <div className='relative w-40 h-40 bg-white/10 text-white flex justify-center items-center rounded-full z-10 backdrop-blur-lg shadow-lg border border-white/20 transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'>
        <span className='text-2xl font-bold'>Challenges</span>
      </div>

      <div className='absolute w-full h-full flex justify-center items-center '>
        <div className='absolute w-40 h-40 bg-white/10 z-10 text-white flex justify-center items-center rounded-full border border-white/20 backdrop-blur-lg shadow-lg p-2 transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'
          style={{ top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <span className='font-bold text-xl'>Security</span>
        </div>

        <div className='absolute w-40 h-40 bg-white/10 z-10 text-white flex justify-center items-center rounded-full border border-white/20 backdrop-blur-lg shadow-lg transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'
          style={{ top: '30%', right: '35%', transform: 'translate(50%, -50%)' }}>
          <span className='font-bold text-xl'>Privacy</span>
        </div>

        <div className='absolute w-40 h-40  text-white flex justify-center items-center rounded-full bg-white/10 z-10   border border-white/20 backdrop-blur-lg shadow-lg transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'
          style={{ top: '65%', right: '35%', transform: 'translate(50%, -50%)' }}>
          <span className='font-bold text-xl p-2'>Data Handling</span>
        </div>

        <div className='absolute w-40 h-40 bg-white/10 text-white flex justify-center items-center rounded-full border border-white/20 backdrop-blur-lg shadow-lg transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'
          style={{ top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <span className='font-bold text-xl'>Testing</span>
        </div>

        <div className='absolute w-40 h-40 bg-white/10 text-white flex justify-center items-center rounded-full border border-white/20 backdrop-blur-lg shadow-lg transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'
          style={{ top: '65%', left: '35%', transform: 'translate(-50%, -50%)' }}>
          <span className='font-bold text-xl'>User Friendly</span>
        </div>

        <div className='absolute w-40 h-40 bg-white/10 text-white flex justify-center items-center rounded-full border border-white/20 backdrop-blur-lg shadow-lg p-2 transition-trasform transform hover:scale-110 hover:backdrop-blur-lg'
          style={{ top: '35%', left: '35%', transform: 'translate(-50%, -50%)' }}>
          <span className='font-bold text-xl'>Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
