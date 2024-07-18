import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Freebook from "../components/Freebook"
import Navbar from "../components/Navbar"

function home() {
  return (
    <>
    <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  )
}

export default home
