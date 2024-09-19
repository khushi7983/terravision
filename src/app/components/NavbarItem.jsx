import React from 'react'
import Link from 'next/link'

const NavbarItem = ({title}) => {
  return (
    <span className='hover:underline decoration-white underline-offset-4 cursor-pointer'>
      <Link href={`/${title.toLowerCase()}`}>{title}</Link>
    </span>
  )
}

export default NavbarItem
