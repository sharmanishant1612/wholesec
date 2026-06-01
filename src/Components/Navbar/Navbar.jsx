




// import React, { useState, useEffect } from "react";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import { Menu, X, ShieldCheck } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   // Detect Active Section
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20);

// //       if (location.pathname !== "/") return;

// //       const sections = ["home", "about", "services", "contact"];

// //       sections.forEach((section) => {
// //         const element = document.getElementById(section);

// //         if (element) {
// //           const rect = element.getBoundingClientRect();

// //           if (rect.top <= 150 && rect.bottom >= 150) {
// //             setActiveSection(section);
// //           }
// //         }
// //       });
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [location.pathname]);

// useEffect(() => {
//   // Set active section from URL hash on refresh
//   const currentHash = window.location.hash.replace("#", "");

//   if (currentHash) {
//     setActiveSection(currentHash);
//   }

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 20);

//     if (location.pathname !== "/") return;

//     const sections = ["home", "about", "services", "contact"];

//     sections.forEach((section) => {
//       const element = document.getElementById(section);

//       if (element) {
//         const rect = element.getBoundingClientRect();

//         if (rect.top <= 150 && rect.bottom >= 150) {
//           setActiveSection(section);

//           // Update URL hash automatically
//           window.history.replaceState(null, "", `/#${section}`);
//         }
//       }
//     });
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => window.removeEventListener("scroll", handleScroll);
// }, [location.pathname]);

//   // Nav Style
//   const navStyle = (section) =>
//     `relative px-5 py-2 rounded-full text-sm lg:text-base font-medium border transition-all duration-300
   
//    ${
//      activeSection === section && location.pathname === "/"
//        ? "border-green-400 text-green-400 bg-green-400/10 shadow-[0_0_15px_rgba(0,255,136,0.25)]"
//        : "border-transparent text-gray-300 hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5"
//    }`;

//   return (
//     <header
//       className={`fixed top-10 left-0 w-full z-50 border-b border-green-500/10 transition-all duration-500
      
//       ${
//         scrolled
//           ? "bg-[#050505]/95 backdrop-blur-xl"
//           : "bg-[#050505]/85 backdrop-blur-lg"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 group">
//           <div
//             className="p-2 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500
//             shadow-[0_0_25px_rgba(0,255,136,0.35)]
//             group-hover:scale-110 transition duration-300"
//           >
//             <ShieldCheck className="w-6 h-6 text-black" />
//           </div>

//           <div>
//             <h1 className="text-white text-lg md:text-xl font-bold">
//               WholeSec
//             </h1>

//             <p className="text-green-400 text-xs tracking-[3px] uppercase">
//               Security
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-4">
          
//           <li>
//             <Link
//               to="/#home"
//               onClick={() => setActiveSection("home")}
//               className={navStyle("home")}
//             >
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="#about"
//               onClick={() => setActiveSection("about")}
//               className={navStyle("about")}
//             >
//               About Us
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/#services"
//               onClick={() => setActiveSection("services")}
//               className={navStyle("services")}
//             >
//               Services
//             </Link>
//           </li>

//           {/* Blogs */}
//           <li>
//             <NavLink
//               to="/blogs"
//               className={({ isActive }) =>
//                 `px-5 py-2 rounded-full text-sm lg:text-base font-medium border transition-all duration-300
                
//                 ${
//                   isActive
//                     ? "border-green-400 text-green-400 bg-green-400/10 shadow-[0_0_15px_rgba(0,255,136,0.25)]"
//                     : "border-transparent text-gray-300 hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5"
//                 }`
//               }
//             >
//               Blogs
//             </NavLink>
//           </li>

//           <li>
//             <Link
//               to="/#contact"
//               onClick={() => setActiveSection("contact")}
//               className={navStyle("contact")}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* CTA */}
//         <Link
//           to="/#contact"
//           className="hidden md:flex items-center justify-center
//           px-5 py-2.5 rounded-xl
//           bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500
//           text-black font-semibold text-sm
//           hover:scale-105 transition duration-300
//           shadow-[0_0_25px_rgba(0,255,136,0.35)]"
//         >
//           Get Protected
//         </Link>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? (
//             <X className="w-7 h-7 text-green-400" />
//           ) : (
//             <Menu className="w-7 h-7 text-green-400" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500
        
//         ${
//           menuOpen ? "max-h-[500px] py-6" : "max-h-0"
//         }
        
//         bg-[#050505]/98 backdrop-blur-2xl border-t border-green-500/10`}
//       >
//         <ul className="flex flex-col items-center gap-5">
          
//           <li>
//             <Link
//               to="/#home"
//               onClick={() => {
//                 setActiveSection("home");
//                 setMenuOpen(false);
//               }}
//               className={navStyle("home")}
//             >
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/#about"
//               onClick={() => {
//                 setActiveSection("about");
//                 setMenuOpen(false);
//               }}
//               className={navStyle("about")}
//             >
//               About Us
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/#services"
//               onClick={() => {
//                 setActiveSection("services");
//                 setMenuOpen(false);
//               }}
//               className={navStyle("services")}
//             >
//               Services
//             </Link>
//           </li>

//           <li>
//             <NavLink
//               to="/blogs"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) =>
//                 `px-5 py-2 rounded-full border transition-all duration-300
                
//                 ${
//                   isActive
//                     ? "border-green-400 text-green-400 bg-green-400/10"
//                     : "border-transparent text-gray-300 hover:text-green-400"
//                 }`
//               }
//             >
//               Blogs
//             </NavLink>
//           </li>

//           <li>
//             <Link
//               to="/#contact"
//               onClick={() => {
//                 setActiveSection("contact");
//                 setMenuOpen(false);
//               }}
//               className={navStyle("contact")}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation,useNavigate } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();

  const location = useLocation();

  // Smooth Scroll Function
 const handleScrollToSection = (sectionId) => {
  // If user is NOT on homepage
  if (location.pathname !== "/") {
    navigate(`/#${sectionId}`);

    // Wait for homepage render
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setActiveSection(sectionId);
      }
    }, 500);

    setMenuOpen(false);
    return;
  }

  // If already on homepage
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(sectionId);

    window.history.replaceState(null, "", `/#${sectionId}`);
  }

  setMenuOpen(false);
};

  // Detect Active Section On Scroll
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");

    if (currentHash) {
      setActiveSection(currentHash);
    }

    const handleScroll = () => {
      if (location.pathname !== "/") return;

      const sections = ["home", "about", "services","blogs", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);

            window.history.replaceState(null, "", `/#${section}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Nav Style
  const navStyle = (section) =>
    `relative px-5 py-2 rounded-full text-sm lg:text-base font-medium border transition-all duration-300
   
   ${
     activeSection === section && location.pathname === "/"
       ? "border-green-400 text-green-400 bg-green-400/10 shadow-[0_0_15px_rgba(0,255,136,0.25)]"
       : "border-transparent text-gray-300 hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5"
   }`;

  return (
    <header
      className="fixed top-10 left-0 w-full z-50 border-b border-green-500/10 transition-all duration-500 bg-black backdrop-blur-xl"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="p-2 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500
            shadow-[0_0_25px_rgba(0,255,136,0.35)]
            group-hover:scale-110 transition duration-300"
          >
            <ShieldCheck className="w-6 h-6 text-black" />
          </div>

          <div>
            <h1 className="text-white text-lg md:text-xl font-bold">
              WholeSec
            </h1>

            <p className="text-green-400 text-xs tracking-[3px] uppercase">
              Holistic Security
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          
          <li>
            <button
              onClick={() => handleScrollToSection("home")}
              className={navStyle("home")}
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("about")}
              className={navStyle("about")}
            >
              About Us
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("services")}
              className={navStyle("services")}
            >
              Services
            </button>
          </li>

          {/* Blogs */}
          {/* <li>
            <NavLink
              to="#blogs"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm lg:text-base font-medium border transition-all duration-300
                
                ${
                  isActive
                    ? "border-green-400 text-green-400 bg-green-400/10 shadow-[0_0_15px_rgba(0,255,136,0.25)]"
                    : "border-transparent text-gray-300 hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5"
                }`
              }
            >
              Blogs
            </NavLink>
          </li> */}

           <li>
            <button
              onClick={() => handleScrollToSection("blogs")}
              className={navStyle("blogs")}
            >
              Blogs
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("contact")}
              className={navStyle("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleScrollToSection("contact")}
          className="hidden md:flex items-center justify-center
          px-5 py-2.5 rounded-xl
          bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500
          text-black font-semibold text-sm
          hover:scale-105 transition duration-300
          shadow-[0_0_25px_rgba(0,255,136,0.35)]"
        >
          Get Protected
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-7 h-7 text-green-400" />
          ) : (
            <Menu className="w-7 h-7 text-green-400" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        
        ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0"
        }
        
        bg-black backdrop-blur-2xl border-t border-green-500/10`}
      >
        <ul className="flex flex-col items-center gap-5">
          
          <li>
            <button
              onClick={() => handleScrollToSection("home")}
              className={navStyle("home")}
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("about")}
              className={navStyle("about")}
            >
              About Us
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("services")}
              className={navStyle("services")}
            >
              Services
            </button>
          </li>

          {/* <li>
            <NavLink
              to="/blogs"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full border transition-all duration-300
                
                ${
                  isActive
                    ? "border-green-400 text-green-400 bg-green-400/10"
                    : "border-transparent text-gray-300 hover:text-green-400"
                }`
              }
            >
              Blogs
            </NavLink>
          </li> */}


          <li>
            <button
              onClick={() => handleScrollToSection("blogs")}
              className={navStyle("blogs")}
            >
              Blogs
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("contact")}
              className={navStyle("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;