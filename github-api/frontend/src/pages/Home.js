import React, { useState } from "react"
import Navbar from "../components/Navbar"
import SearchCard from "./SearchCard"
import { useNavigate } from "react-router-dom"
// import data from "../user"
import axios from "axios"
const Home = () => {
  const [user, setUser] = useState("")
  const [data, setData] = useState([])
  let navigate = useNavigate()
  const searchItems = async (e) => {
    const users = await axios.get(
      `https://api.github.com/search/users?q=${user}`
    )
    const response = users.data.items
    setData(response)
    setUser("")
  }
  const deleteItems = (userName) => {
    navigate(`/user/${userName}`)
  }
  return (
    <>
      <Navbar />
      <section className='max-w-7xl m-auto my-28'>
        <input
          type='search'
          placeholder='Search'
          className='p-2 px-7 rounded-l-lg focus:outline-none shadow-xl hover:shadow-2xl'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchItems()
            }
          }}
        />
        <button
          className='p-2 px-5   bg-[#262932] text-gray-50 text-base rounded-r-lg shadow-xl hover:shadow-2xl'
          onClick={searchItems}
        >
          Search
        </button>
      </section>
      <div className='max-w-7xl m-auto flex flex-wrap gap-4'>
        {data.map((data) => {
          return (
            <SearchCard
              key={data.id}
              image={data.avatar_url}
              userName={data.login}
              id={data.id}
              onSelect={deleteItems}
            />
          )
        })}
      </div>
    </>
  )
}

export default Home
