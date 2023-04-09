import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Slider from './slider'

const UserLayout = () => {
    return <div>
        <Header/>
        <Slider/>
        {/* Content */}
        <Outlet />
        <Footer/>
    </div>
}

export default UserLayout