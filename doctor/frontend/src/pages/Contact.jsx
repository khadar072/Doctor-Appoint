import React from 'react'


const Contact = () => {
  return (
    <div className='mt-8 flex flex-col  px-56 gap-4 gap-x-8'>
      <p className='text-center text-xl font-semibold text-gray-800'>CONTACT US</p>
      <p className='text-center text-gray-500'>Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
      <form action="">
        <div className='flex flex-col gap-1 mb-2 mt-6'>
          <label htmlFor="" className='text-gray-500'>Your Email</label>
          <input type="text" className='px-3 py-2 text-sm border rounded-md' placeholder='example@gmail.com' />
        </div>
        <div className='flex flex-col gap-1 mb-2'>
          <label htmlFor="" className='text-gray-500'>Subject</label>
          <input type="text" className='px-3 py-2 text-sm border rounded-md' placeholder='example@gmail.com' />
        </div>
        <div className='flex flex-col gap-1 mb-6'>
          <label htmlFor="" className='text-gray-500'>Your Massega</label>
          <textarea name="" id="" className='border px-3 py-2 rounded-md text-sm active:border-blue-600 focus:border-blue-600' placeholder='Leave a comment'></textarea>
        </div>
        <button className='bg-blue-600 px-3 py-2 rounded text-white mb-10'>Send Message</button>
      </form>
    </div>
    
  )
}

export default Contact
