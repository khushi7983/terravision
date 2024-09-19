import React from 'react'
import NavbarItem from './NavbarItem'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-black text-white h-24  flex justify-between items-center px-8 border-b border-gray-700 ' >
      <Link href='/' className='flex items-center px-10'>
        <img src="./logoo.svg" alt="logo" className='h-20 mt-3 justify-start  '  />
        <span className='text-3xl text-customColor font-semibold font-serif'>TerraVision</span>
      </Link>
      <div className='flex gap-10  justify-end  text-2xl pr-8 mr-8 font-serif '>

        < NavbarItem title="Home" />
        < NavbarItem title="About" />
        < NavbarItem title="Features" />
        < NavbarItem title="Contact" />

      </div>
    </div>
  )
}

export default Navbar   