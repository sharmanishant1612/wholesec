import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar.jsx"
import Footer from "./Footer/Footer.jsx"
import TopSection from "./TopSection/TopSection.jsx"

function Layout(){
    return(
        <>
        <TopSection/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default Layout