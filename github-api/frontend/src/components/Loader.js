import React from "react"

const Loader = () => {
  return (
    <div className='h-screen w-screen bg-[#262932] grid place-items-center max-w-full'>
      <div className='w-24 border-b-4 border-gray-50 rounded-full animate-spin h-24'></div>
    </div>
  )
}

export default Loader
