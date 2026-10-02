import React from 'react'

const Section1 = () => {
  return (
    <div>
      <div className='bg-blue-500 text-center py-[15px] font-bold text-[25px] text-white'>
        <h1>Help Center</h1>
      </div>
      <div className=' text-center py-[15px] font-bold text-[27px] text-gray-500'>
        <h1>How can we help you today?</h1>
      </div>
      <div className='flex text-center justify-center gap-[20px]'>
        <h1 className='shadow-lg h-[100px] p-[30px] text-[25px] cursor-pointer rounded-md font-bold  border text-gray-500 border-gray-500 '>
          I have a question
        </h1>
        <h1 className='shadow-lg h-[100px] p-[30px] text-[25px] cursor-pointer rounded-md font-bold  border text-gray-500 border-gray-500'>
          I have an issue
        </h1>
      </div>
      <div className='my-[100px] text-center'>
        <h1>Can't find what you're looking for?</h1>
        <div className='mt-[50px] flex gap-[20px] justify-center'>
          <h2 className='shadow-lg h-[100px] p-[30px] text-[22px] cursor-pointer rounded-md font-bold  border text-gray-500 border-gray-500'>
            Submit a Request
          </h2>
          <h2 className='shadow-lg h-[100px] p-[30px] text-[22px] cursor-pointer rounded-md font-bold  border text-gray-500 border-gray-500'>
            Message us
          </h2>

        </div>
      </div>
      <div className='flex justify-center gap-[20px] text-[20px] font-bold text-gray-600 align-center mt-[20px] bg-gray-100 py-[70px] '>
        <a href='#' className='text-center'>Free measuring and planing </a>
        <a href="#" className='text-center'>Uplift and removal services</a>
        <a href="#" className='text-center'>We can arrange fitting</a>
        <a href="#" className='text-center'>Interest free credit</a>
        <a href="#" className='text-center'>Our Carpet Price Promise</a>
        <a href="#" className='text-center'>Wear guarantee on every floor</a>
      </div>
    </div>
  )
}

export default Section1
