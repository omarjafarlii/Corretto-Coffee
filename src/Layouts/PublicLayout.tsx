import Header from '../Components/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Slider from '../Components/Home/Slider'

const PublicLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default PublicLayout