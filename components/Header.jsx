import React from 'react'
import {BsSearch} from 'react-icons/bs'
import Link from 'next/link' 

const bssearchh = <BsSearch/>
const Header = () => {
  return (
    <div className='bg-slate-200 shadow-md '>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link href='/'>
     <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
      <span className='text-slate-500'>Mandarin</span>
      <span className='text-slate-700'>Properties</span>
     </h1>
     </Link>
     <form className='bg-slate-100 p-3 rounded-lg flex justify-center items-center transition-all border-[2px] gap-1'>
      <input type="text" placeholder="Search.." className='w-24 sm:w-64 border-b-2 focus:border-slate-500 bg-transparent focus:outline-none '/>
      <BsSearch/>
     </form>
     <ul className='flex gap-4'>
        <Link href='/'><li className='hidden sm:inline text-slate-700 hover:underline-offset-2 hover:underline cursor-pointer'>Home</li></Link>
        <Link href='/about'><li className='hidden sm:inline text-slate-700 hover:underline-offset-2 hover:underline cursor-pointer'>About</li></Link>
        <Link href='/sign-in'><li className='sm:inline text-slate-700 hover:underline-offset-2 hover:underline cursor-pointer'>Sign in</li></Link>
     </ul>
    </div>
    </div>
  )
}

export default Header
