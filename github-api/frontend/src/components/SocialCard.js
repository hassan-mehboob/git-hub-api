import React from "react"

const SocialCard = ({ imageSrc, text, number }) => {
  return (
    <>
      <section className='text-gray-50 bg-[#262932] px-10 m-3 shadow-2xl rounded-xl'>
        <div className='flex  items-center justify-center'>
          <div className='m-3 mb-4 mt-5 ml-6'>
            <h1 className='text-gray-500'>{text}</h1>
            <h1 className='font-bold'>{number}</h1>
          </div>
          <img
            src={imageSrc}
            alt='userImage'
            className='h-10 w-10 m-3'
          />
        </div>
      </section>
    </>
  )
}

export default SocialCard
