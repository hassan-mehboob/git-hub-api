import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import SocialCard from "../components/SocialCard"
import userFriends from "../images/user-friends-solid.png"
import box from "../images/box.png"
import cube from "../images/cube.png"
import userFriend from "../images/users-solid.png"
import { useParams } from "react-router-dom"
import Repositories from "../components/Repositories"
import { detailUser } from "../actions/userActions"
import { repoUser } from "../actions/userRepoAction"
import Loader from "../components/Loader"
const UserDetail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const userDetail = useSelector((state) => state.userDetail)
  const { loading, error, detail } = userDetail
  const userRepo = useSelector((state) => state.userRepo)
  const { repo } = userRepo
  useEffect(() => {
    dispatch(detailUser(params.keyword))
    dispatch(repoUser(params.keyword))
  }, [dispatch, params])
  return (
    <>
      <Navbar />
      {/* image and userName, desc, github, social link in section 1 */}
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          {" "}
          <section className='text-gray-50 max-w-6xl m-auto mt-10 flex'>
            <div>
              <img
                src={detail.avatar_url}
                alt='userImage'
                className='h-10/12 w-10/12 rounded-3xl'
              />
            </div>
            <div>
              <h1 className='mt-6'>{detail.login}</h1>
              <p className='mt-3'>{detail.bio}</p>
              <button className='border-2 p-2 px-8 rounded-lg mt-6 shadow-lg hover:shadow-2xl'>
                <a href={detail.html_url}>Visit GitHub Profile</a>
              </button>
              {/* socail media  */}
              <div className='flex mt-6'>
                <div className='px-20 p-1 shadow-lg hover:shadow-2xl rounded-lg justify-center items-center'>
                  <h1 className='text-center'>City</h1>
                  <h2>{detail.location === null ? "null" : detail.location}</h2>
                </div>
                <div className='px-20 p-1 shadow-lg hover:shadow-2xl rounded-lg'>
                  <h1 className='text-center'>Webside</h1>
                  <h2>{detail.blog === "" ? "null" : detail.blog}</h2>
                </div>
                <div className='px-20 p-1 shadow-lg hover:shadow-2xl rounded-lg'>
                  <h1 className='text-center'>Twitter</h1>
                  <h2>
                    {detail.twitter_username === null
                      ? "null"
                      : detail.twitter_username}
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
              number={detail.followers}
            />
            <SocialCard
              imageSrc={userFriends}
              text='Following'
              number={detail.following}
            />
            <SocialCard
              imageSrc={box}
              text='Public Repos'
              number={detail.public_repos}
            />
            <SocialCard
              imageSrc={cube}
              text='Public Gists'
              number={detail.public_gists}
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
      )}
    </>
  )
}

export default UserDetail
