import React, { useState, useEffect, useRef } from "react";
import { logo } from "../assets";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Infor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsHovered(false);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-top",
		});
	}, []);
  return (
    <div className="hidden md:block">
      <div className="fixed bottom-0 right-0 flex items-end p-7 pr-10 z-20">
        {isVisible && (
          <div
            data-aos="fade-down"
						data-aos-delay="4000"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex flex-col "
          >
            {isHovered && (
              <div className=" top-0 right-full flex flex-col items-center space-y-6 bg-gray-800 bg-opacity-75 p-3 rounded-lg shadow-lg transition-transform transform scale-100">
                <Link title="Github" to="https://github.com/anvnh"  className="text-white">
                  <SiGithub className="text-3xl hover:text-purple-600 transition-all duration-300 hover:scale-110 ease-in-out" />
                </Link>
                <Link title="Intagram" to="https://www.instagram.com/nvtank/"  className="text-white">
                  <FaInstagram className="text-3xl hover:text-pink-600 transition-all duration-300 hover:scale-110 ease-in-out" />
                </Link>
                <Link to="https://www.facebook.com/hplatdev" className="text-white">
                  <FaFacebook title="Facebook" className="text-3xl hover:text-blue-600 transition-all duration-300 hover:scale-110 ease-in-out " />
                </Link>
              </div>
            )}
            <div title="Learn more" className="w-[60px] mt-5 p-3 h-[60px] bg-gray-800 rounded-full flex items-center justify-center text-white transition-transform transform hover:scale-110 duration-300 shadow-md shadow-white" >
              <img src={logo}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Infor;
