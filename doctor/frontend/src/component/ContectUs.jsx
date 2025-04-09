import React from 'react'
import { assets } from '../assets/assets'

const ContectUs = () => {
  return (
    <div className='w-full flex flex-col mt-8 '>
        <p className='text-xs xl:text-sm text-center'>Contact us For Need Any Help And Service <span className='text-blue-600'> Lets get Start?</span></p>
        <div className='w-full flex flex-col sm:flex-row  flex-wrap mt-4  overflow-hidden'>
            {/* left part */}
            <div className='w-full sm:w-1/2 px-8 py-8 xl:py-12 bg-[#4D8576] '>
                <p className='text-xl font-semibold'>Why Choose Us?</p>
                <div className='grid grid-cols-2 gap-4 mt-2 '>
                    <div className='flex gap-1 justify-center items-center bg-[#337864] px-3 rounded-lg py-5'>
                        <img className='w-8' src={assets.correct} alt="" />
                        <div className='flex flex-col justify-center items-start text-white  text-xs '>
                            <p className='font-medium'>Advance Care</p>
                            <p>khadar@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-1 justify-center items-center bg-[#337864] px-3 rounded-lg py-5'>
                        <img className='w-8' src={assets.correct} alt="" />
                        <div className='flex flex-col justify-center items-start text-white  text-xs '>
                            <p className='font-medium'>Advance Care</p>
                            <p>khadar@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-1 justify-center items-center bg-[#337864] px-3 rounded-lg py-5'>
                        <img className='w-8' src={assets.correct} alt="" />
                        <div className='flex flex-col justify-center items-start text-white  text-xs '>
                            <p className='font-medium'>Advance Care</p>
                            <p>khadar@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-1 justify-center items-center bg-[#337864] px-3 rounded-lg py-5'>
                        <img className='w-8' src={assets.correct} alt="" />
                        <div className='flex flex-col justify-center items-start text-white  text-xs '>
                            <p className='font-medium'>Advance Care</p>
                            <p>khadar@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right paer */}
            <div className='w-full sm:w-1/2 bg-blue-600 px-7 py-8 xl:py-12 '>
                 <p className='text-white text-2xl font-semibold mb-1'>Emergency?</p>
                 <p className='text-white text-2xl font-semibold mb-1'>Contact Us.</p>
                 <div>
                    <p className='text-xs text-white font-medium'>Have questions or need assistance? We're here to help! Feel </p>
                    <p className='text-xs text-white font-medium'>freeto reach out to us anytime, and we'll get back to you as</p>
                    <p className='text-xs text-white font-medium'>soon as possible.</p>
                 </div>
                 <div className='flex flex-col justify-center items-start'>
                    <div className='flex  items-center gap-2 mt-2'>
                        <img className='w-9 bg-[#3B79FE] py-[2px]' src={assets.whitePhone} alt="" />
                        <div className='flex flex-col justify-center items-start text-white  text-xs '>
                            <p className='font-medium'>Phone Number</p>
                            <p>252977352775</p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2 mt-2'>
                        <img className='w-9 bg-[#3B79FE]' src={assets.whiteMessage} alt="" />
                        <div className='flex flex-col justify-center items-start text-white  text-xs '>
                            <p className='font-medium'>Email</p>
                            <p>khadar@gmail.com</p>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
      
    </div>
  )
}

export default ContectUs
