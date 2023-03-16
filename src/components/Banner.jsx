import React from 'react'

export default function Banner() {
  return (
    <section className='h-96 border relative'>
      <div className='bg-banner w-full h-full bg-cover opacity-80'></div>
      <div className='absolute top-32 w-full text-center text-white'>
        <h2 className='text-6xl'>Shoppig Mall</h2>
        <p className='text-3xl'>Shopping good</p>
      </div>
    </section>
  )
}
