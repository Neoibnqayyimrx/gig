import React from 'react'
import Container from './Container'
import { IoLocationOutline } from "react-icons/io5"
import { IoMdSearch } from "react-icons/io"
import { FaRegEnvelope } from "react-icons/fa6"
import { LuPhone } from "react-icons/lu"

const Header = () => {
  return (
    <div className='bg-bodyColor h-[65px] border-b-[1px] mt-[-15px]'>
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
         {/* Location Field */}

          <div className='flex items-center justify-center gap-2 p-2 border-r-[1px] h-[50px] cursor-pointer hover:text-blue-600'>
          <IoLocationOutline className='text-xl' />
          <p className='text-xl font-bold'>Location</p>
          </div>
         {/* Search Field */}
          <div className='w-full bg-white hidden md:flex items-center 
                gap-x-1 border-[1px] border-lightText/50 
                rounded-full px-4 py-1.5 focus-within:border-red-600 group'>
            <IoMdSearch className='text-gray-500 group-focus-within:text-darkText duration-200' />
            <input type='text' 
                   placeholder='Search'
                   className='placeholder:text-sm flex-1 outline-none'
             />
          </div>

           {/* Help line */}
         <div className='flex items-center justify-center mr-10 gap-2 p-2 border-l-[1px] h-[50px] w-[70%] hover:text-blue-600'>
           <LuPhone />
           <p className='flex items-center space-x-2'> 
            <span>+2347080606000</span> 
            <span>|</span> 
            <span>0700-CALLEMZOR</span>
            </p>
         </div>

         {/* Contact button */}
         <div className='flex items-center justify-center mr-10 gap-2 p-2 border-l-[1px] h-[50px] w-[32%] cursor-pointer hover:text-blue-600'>
           <FaRegEnvelope />
           <p className='font-semibold flex flex-row items-center gap-2 p-2'>Contact us</p>
         </div>

      </Container>
    </div>
  )
}

export default Header