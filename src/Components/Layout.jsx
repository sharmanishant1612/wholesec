import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./footer/footer"
import TopSection from "./TopSection/TopSection"

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