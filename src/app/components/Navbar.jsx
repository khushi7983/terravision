import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className=' bg-black text-white h-24  flex justify-between items-center px-8 '>
      <div className='flex items-center px-10'>
        <img src="./logoo.svg" alt="logo" className='h-20 mt-3 justify-start  '  />
        <span className='text-3xl text-customColor font-semibold font-serif'>TerraVision</span>
      </div>
      <div className='flex gap-10  justify-end  text-2xl pr-24 mr-24 font-serif '>

        < NavbarItem title="Home" />
        < NavbarItem title="About" />
        < NavbarItem title="Features" />
        < NavbarItem title="Contact" />

      </div>
    </div>
  )
}

export default Navbar