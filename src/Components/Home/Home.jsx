import Hero from '../Hero/Hero.jsx'
import About from '../About/About.jsx'
import Services from '../Services/Services.jsx'
import Contact from '../Contact/Contact.jsx'
import HomeBlogs from '../Blogs/HomeBlogs.jsx'



function Home(){
    return(
        <>
            <Hero />
            <About />
            <Services />
            <HomeBlogs />
            <Contact />
        </>
    );
}

export default Home;