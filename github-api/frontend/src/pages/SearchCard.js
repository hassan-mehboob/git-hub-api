import React from "react"

const SearchCard = ({ image, userName, onSelect }) => {
  return (
    <>
      <section className='text-gray-50 bg-[#262932]  w-2/6  drop-shadow-xl hover:shadow-2xl rounded-3xl m-5 '>
        <div className='flex '>
          <img
            src={image}
            alt='userImage'
            className='rounded-full h-16 w-16 m-3'
          />
          <div className='m-4 mt-5 ml-6'>
            <h1 className='text-2xl'>{userName}</h1>
            <h1
              className='text-gray-500 cursor-pointer'
              onClick={() => {
                onSelect(userName)
              }}
            >
              Visit Profile
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchCard
