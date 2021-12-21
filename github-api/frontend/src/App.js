import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserDetail from "./pages/UserDetail"
function App() {
  document.body.style.backgroundColor = "#393B49"
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:keyword' element={<UserDetail />} />
      </Routes>
    </>
  )
}

export default App
