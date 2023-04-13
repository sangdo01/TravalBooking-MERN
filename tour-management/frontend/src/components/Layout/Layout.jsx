import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import { useLocation } from 'react-router-dom'
import Slidebar from "../../Admin-site/Sidebar/Sidebar"
import TopNav from '../../Admin-site/TopNav/TopNav'

const Layout = () => {

    const location = useLocation();
    return (<>
        {location.pathname.startsWith("/admin") ? <TopNav /> : <Header /> }
        <div>
            <Routers />
        </div>

        {location.pathname.startsWith("/admin") ? <Slidebar /> : <Footer /> }


        {/* <Footer /> */}
    </>)
}

export default Layout