import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import {logo} from "@/assets";

const Footer = () => {
    return (
        <footer className="bg-gray-950 bg-opacity-50 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <img src={logo} alt="logo" className="h-12" />
                    </div>
                    {/* Navigation */}
                    <nav className="w-full md:w-1/2 mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center">
                            <li className="mr-6"><a href="#">About Us</a></li>
                            <li className="mr-6"><a href="#">Services</a></li>
                            <li className="mr-6"><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="w-full md:w-1/4 text-center">
                        <a href="#" className="mr-4"><FaFacebook /></a>
                        <a href="#" className="mr-4"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-4">
                    <p>&copy; 2023 APP Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
