import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import SocialCard from "../components/SocialCard"
import userFriends from "../images/user-friends-solid.png"
import box from "../images/box.png"
import cube from "../images/cube.png"
import userFriend from "../images/users-solid.png"
import { useParams } from "react-router-dom"
import axios from "axios"
import Repositories from "../components/Repositories"
const UserDetail = () => {
  const [response, setResponse] = useState([])
  const [repo, setRepo] = useState([])
  const params = useParams()
  const userDetail = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${params.keyword}`
    )
    const repositories = await axios.get(
      `https://api.github.com/users/${params.keyword}/repos?per_page=10`
    )
    const data = response.data
    setResponse(data)
    setRepo(repositories.data)
  }
  useEffect(() => {
    userDetail()
  }, [params.keyword])
  return (
    <>
      <Navbar />
      {/* image and userName, desc, github, social link in section 1 */}
      <section className='text-gray-50 max-w-6xl m-auto mt-10 flex'>
        <div>
          <img
            src={response.avatar_url}
            alt='userImage'
            className='h-10/12 w-10/12 rounded-3xl'
          />
        </div>
        <div>
          <h1 className='mt-6'>{response.login}</h1>
          <p className='mt-3'>{response.bio}</p>
          <button className='border-2 p-2 px-8 rounded-lg mt-6 shadow-lg hover:shadow-2xl'>
            <a href={response.html_url}>Visit GitHub Profile</a>
          </button>
          {/* socail media  */}
          <div className='flex mt-6'>
            <div className='px-20 p-1 shadow-lg hover:shadow-2xl rounded-lg justify-center items-center'>
              <h1 className='text-center'>City</h1>
              <h2>{response.location === null ? "null" : response.location}</h2>
            </div>
            <div className='px-20 p-1 shadow-lg hover:shadow-2xl rounded-lg'>
              <h1 className='text-center'>Webside</h1>
              <h2>{response.blog === "" ? "null" : response.blog}</h2>
            </div>
            <div className='px-20 p-1 shadow-lg hover:shadow-2xl rounded-lg'>
              <h1 className='text-center'>Twitter</h1>
              <h2>
                {response.twitter_username === null
                  ? "null"
                  : response.twitter_username}
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* Follower, Followind etc are in section 2 */}
      <section className='max-w-6xl m-auto mt-14 flex'>
        <SocialCard
          imageSrc={userFriend}
          text='Followers'
          number={response.followers}
        />
        <SocialCard
          imageSrc={userFriends}
          text='Following'
          number={response.following}
        />
        <SocialCard
          imageSrc={box}
          text='Public Repos'
          number={response.public_repos}
        />
        <SocialCard
          imageSrc={cube}
          text='Public Gists'
          number={response.public_gists}
        />
      </section>
      {/* Some latest repositories are in section 3 */}
      <h1 className='m-auto max-w-6xl text-2xl font-bold text-gray-50 mt-5'>
        Latest Repositories
      </h1>
      <section className='m-auto max-w-6xl '>
        {repo.map((repo) => {
          return (
            <Repositories
              repoName={repo.name}
              repoDesc={repo.description}
              repoView={repo.watchers}
              repoStar={repo.stargazers_count}
              repoFork={repo.forks_count}
              key={repo.id}
            />
          )
        })}
      </section>
    </>
  )
}

export default UserDetail
