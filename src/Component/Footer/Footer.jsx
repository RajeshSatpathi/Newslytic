import React from 'react'

function Footer() {
  return (
    <div className='bg-black  w-full  p-5 ' >
      <div className='container mx-auto flex justify-between mt-5 flex-wrap'>
        {/* description  */}
        <div className='max-w-120'>
          <div className='text-white'>
            <h2 className='text-2xl font-semibold mb-3'><span className='text-red-500'>News</span>lytic</h2>
            <p>Newslytic is a web application designed for efficient news search and discovery across multiple sources.
              It offers real-time results with a clean, intuitive interface for seamless browsing.</p>
          </div>
        </div>
        {/* NewsLetter  */}
        <div className='text-white'>
          <h3>Email Newsletter</h3>
          <p className='text-sm mb-1'>Subscribe to recive inspiration,news,and ideas in your inbox</p>
          <input type="text" className='bg-white border-none w-full' />
          <button className='bg-cyan-700 p-1 w-full mt-2 cursor-pointer'>SUBSCRIBE</button>
        </div>
        {/* Help & Support */}
        <div className='text-white'>
          <h3>Help & Support </h3>
          <div className='my-2 flex flex-col gap-2'>
            <p className='text-sm'>Support</p>
            <hr  className='text-gray-500'/>
            <p className='text-sm'>Terms & Condition</p>
            <hr  className='text-gray-500'/>
            <p className='text-sm'>Cumunity Guidelines</p>
            <hr  className='text-gray-500' />
            <p className='text-sm'>About Newslytic</p>
          
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer