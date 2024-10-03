import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>SWOLE<span className='text-blue-400'>NORMOUS</span></h1>
      </div>
      <p className='text-sm md-text-base font-light'>I hereby declare that the statements made in this affidavit are true and accurate <span className='text-blue-400 font-medium'>to the best of my knowledge and belief.</span> I understand that making false statements under oath is a serious offense and <span className='text-blue-400 font-medium'>may result in criminal penalties.</span> I have read and understand the contents of this affidavit, and I affirm that it is a true and complete statement of the facts.</p>
      <Button func={()=> {
        window.location.href = '#generate'
      }} text = {'Accept & Begin'}></Button>
    </div>
  )
}
