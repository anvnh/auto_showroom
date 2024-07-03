import React, { useState, useEffect } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo, menu, close } from "../../assets";

import Vehicle from '../elementNavbar/Vehicle';
import ShoppingAssist from '../elementNavbar/ShoppingAssist';

interface SubNavbarProps {
  selectedSection_element: string;
  onNavClick: (section: string) => void;
}

const Navbar: React.FC<SubNavbarProps> = ({
  selectedSection_element,
  onNavClick,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-back",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const [toggle, setToggle] = useState(false);
  const [dropdownVe, setDropdownVe] = useState(false);
  const [dropdownSh, setDropdownSh] = useState(false);
  const [dropdownIn, setDropdownIn] = useState(false);

  const [selectedSection, setSelectedSection] = useState("");
  const handleNavClick = (section: string) => {
    setSelectedSection((prevSection) =>
      prevSection === section ? "" : section
    );
  };

  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsHidden(true); // Cuộn xuống, ẩn navbar
      } else {
        setIsHidden(false); // Cuộn lên, hiện navbar
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedP, setSelectedP] = useState("");

  const handleMouseEnter = (section: string) => {
    setSelectedP(section);
  };

  const handleMouseLeave = () => {
    setSelectedP("");
  };

  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const newScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (newScrollTop !== scrollTop) {
        scrollTop = newScrollTop;

        if (timer) {
          clearTimeout(timer);
        }

        const newTimer = setTimeout(() => setIsVisible(true), 100);
        setTimer(newTimer);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const initialTimer = setTimeout(() => setIsVisible(true), 3800);
    setTimer(initialTimer);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSection = (section: string) => {
    if (selectedSection === section) {
      setIsExpanded(!isExpanded);
    } else {
      setSelectedSection(section);
      setIsExpanded(true);
    }
  };

  return (
    <div className="z-50 fixed top-0 w-full font-poppins transition-transform duration-300">
      {isVisible && (
        <nav
          data-aos="fade"
          className="w-full pt-3 h-14 md:h-16 flex pb-2 bg-gray-950 md:px-12.5 z-50 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img
                data-aos="fade-up"
                src={logo}
                alt="logo"
                className="md:w-[57px] w-[35px] md:h-[50px] h-[35px]"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <Link to="/SignIn">
                <li className="relative group pr-5">
                  <FaUser className="text-white w-[27px] h-[27px] transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </li>
              </Link>
            </ul>
            <button
              className="sm:hidden text-white pr-3 focus:outline-none"
              onClick={() => setToggle(!toggle)}
            >
              <img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[24px] h-[24px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>
            </button>
          </div>
        </nav>
      )}
      {isVisible && (
        <div
          className={`z-50 md:top-12 w-full font-poppins transition-transform duration-300 sm:block ${
            isHidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <nav
            data-aos="fade-up"
            className="w-full pt-4 h-14 opacity-10 text-white md:px-12.5 z-50 relative backdrop-blur-3xl bg-gray-950 bg-opacity-50 sm:block hidden"
          >
            <ul className="list-none sm:flex gap-10 justify-center items-center flex-1">
              <li
                className={`cursor-pointer transition-opacity duration-300 ${
                  selectedP && selectedP !== "vehicles"
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter("vehicles")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleToggleSection("vehicles")}
              >
                <div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
                  <p> Vehicles </p>
                  <div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
                </div>
              </li>
              <li
                className={`cursor-pointer transition-opacity duration-300 ${
                  selectedP && selectedP !== "shopping"
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter("shopping")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleToggleSection("shopping")}
              >
                <div className="relative group  flex transition ease-in-out delay-100  duration-300 select-none">
                  <p> Shopping Assist </p>
                  <div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
                </div>
              </li>
              <li
                className={`cursor-pointer transition-opacity duration-300 ${
                  selectedP && selectedP !== "owners"
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter("owners")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleToggleSection("owners")}
              >
                <div className="relative group flex transition ease-in-out delay-100  duration-300 select-none">
                  <Link to="/owners" >
                    <p> Owners </p>
                    <div className="absolute -bottom-2 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {isExpanded && selectedSection === "vehicles" && (
        <div
        data-aos="slide-up"
        className={`z-1 absolute w-screen h-[450px] ss:h-[900px] font-syncopate bg-opacity-85 bg-gray-900 ${
          isHidden ? 'hidden' : ''
        }`}
      >
         
          <div  data-aos="fade-up" data-aos-delay="1000"   className={`${
          isHidden ? 'hidden' : ''
        }`}
      >
             <Vehicle />
            </div>
        </div>
      )}
      {isExpanded && selectedSection === "shopping" && (
        <div
        data-aos="slide-up"
        className={`z-1 absolute w-screen h-[450px] ss:h-[900px] rounded-b-[20px] font-syncopate px-[10px] lg:px-[50px] pt-[28px] bg-opacity-85 bg-gray-900 ${isHidden ? 'hidden' : ''}`}
      >
            <div  data-aos="fade-up" data-aos-delay="1000"   className={`${
          isHidden ? 'hidden' : ''
        }`}
      >
             <ShoppingAssist />
            </div>
        </div>
      )}

      {toggle && (
        <div data-aos="fade-up" className="sm:hidden opacity-90 h-[620px] relative w-full backdrop-blur-3xl bg-gray-950 bg-opacity-50 text-white">
          <ul className="flex flex-col space-y-5 pt-52 items-center py-2">

            <li
              className={`cursor-pointer transition-opacity duration-300 w-full text-center ${
                selectedP && selectedP !== "vehicles"
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              onMouseEnter={() => handleMouseEnter("vehicles")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleToggleSection("vehicles")}
            >
              <div data-aos="fade-up" 	data-aos-delay="1000" className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none">
                <p> Vehicles </p>
       
              </div>
            </li>
            <li
              className={`cursor-pointer transition-opacity duration-300 w-full text-center ${
                selectedP && selectedP !== "shopping"
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              onMouseEnter={() => handleMouseEnter("shopping")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleToggleSection("shopping")}
            >
              <div data-aos="fade-up" 	data-aos-delay="1200" className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none">
                <p> Shopping Assist </p>   
                </div>    
            </li>
            <li
              className={`cursor-pointer transition-opacity duration-300 w-full text-center ${
                selectedP && selectedP !== "owners"
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              onMouseEnter={() => handleMouseEnter("owners")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleToggleSection("owners")}
            >
              <div data-aos="fade-up" 	data-aos-delay="1400" className="relative group flex justify-center transition ease-in-out delay-100 duration-300 select-none">
                <Link to="/owners">
                  <p> Owners </p>             
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
