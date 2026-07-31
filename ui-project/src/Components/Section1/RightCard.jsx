import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full relative rounded-3xl bg-red-500 w-70 shrink-0 overflow-hidden'>
      <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className='absolute top-0 h-full w-full   p-6 flex flex-col justify-between'>
          <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
          <div >
            <p className='mb-5 text-lg text-white leading-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio vitae ea rerum mollitia libero </p>
            <div>
              <button className='bg-blue-500 p-3 rounded-4xl'>Satisfy</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default RightCard
