import Image from 'next/image'
import React from 'react'
import EmzorL from "@/assets/logo.png"
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image src={EmzorL} 
               alt='logo' 
               width={70} 
               height={70} 
               className='h-24 w-24 cursor-pointer' />
    </Link>
  )
}

export default Logo