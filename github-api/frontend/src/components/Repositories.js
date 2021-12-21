import React from "react"
import linkImage from "../images/link-solid.svg"
import eye from "../images/eye.png"
import star from "../images/star.png"
import utensils from "../images/utensils.png"
const Repositories = ({ repoName, repoDesc, repoView, repoStar, repoFork }) => {
  return (
    <>
      <div className='m-3 text-gray-50 mt-5 bg-[#262932] p-5'>
        <div className='flex items-center'>
          <img src={linkImage} alt='' className='h-12 w-12 pr-3' />
          <h1 className='text-2xl font-bold'>{repoName}</h1>
        </div>
        <p className='pt-2 px-1'>{repoDesc}</p>
        <div className='flex py-4'>
          <div className='flex  opacity-100 w-20 text-sm rounded-full mr-5 px-1 border-2 border-blue-500'>
            <img src={eye} alt='' />
            <h3 className='text-blue-500'>{repoView}</h3>
          </div>
          <div className='flex opacity-100 w-20 text-sm rounded-full mr-5 px-2 border-2 border-green-500'>
            <img src={star} alt='' />
            <h3 className='text-green-500 pl-1'>{repoStar}</h3>
          </div>
          <div className='flex  opacity-100 w-20 text-sm rounded-full mr-5 px-2 border-2 border-yellow-500'>
            <img src={utensils} alt='' />
            <h3 className='text-yellow-500 pl-1'>{repoFork}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Repositories
