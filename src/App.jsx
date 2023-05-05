import { Outlet } from "react-router-dom"
import ErrorPage from "./ErrorPage/ErrorPage"
import Header from "./SharePage.jsx/Header"
import Footer from "./SharePage.jsx/Footer"

function App() {


  return (
    <>
      <Header></Header>
      <div className="h-calc(100%-80%)">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
