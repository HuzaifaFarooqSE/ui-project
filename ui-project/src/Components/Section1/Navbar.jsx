import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4 '>
        <h4 className='bg-black text-white px-5 py-2 rounded-full'>Target Audience</h4>
        <button className='bg-black rounded-[20px] text-white px-3 py-2 cursor-pointer hover:bg-gray-600 tracking-wide'>Digital Banking Platfrom</button>
    </div>
  )
}

export default Navbar