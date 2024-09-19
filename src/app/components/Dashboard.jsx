import React from 'react';

const Dashboard = () => {
  return (
    <div className='relative bg-white bg-opacity-5 backdrop-blur-lg shadow-2xl flex flex-col items-center rounded-[34px] p-4 justify-center mx-40 my-24 h-auto pb-8 border-2 border-white/10'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold font-serif text-white text-center'>Our Dashboard</h1>
      </div>
      <div className='w-full flex justify-center'>
        <img src="dashoard.png" className='h-[550px] w-[550] rounded-2xl shadow-lg pb-3' alt="Dashboard Image" />
      </div>
    </div>
  );
};

export default Dashboard;
