import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserDetail from "./pages/UserDetail"
import Loader from "./components/Loader"
function App() {
  document.body.style.backgroundColor = "#393B49"
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:keyword' element={<UserDetail />} />
        <Route path='/about' element={<Loader />} />
      </Routes>
    </>
  )
}

export default App
