import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import {logo} from "@/assets";

const Footer = () => {
    return (
        <footer className="bg-gray-800 bg-opacity-50 text-white">
            <div className="c">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="w-screen flex justify-center mb-[10px] md:hidden">
                        <img src={logo} alt="logo" className="h-12" />
                    </div>
                    {/* Navigation */}
                    <nav className="w-screen">
                        <ul className="  flex   justify-around mb-[20px] justify-between md:hidden text-[13px] ">
                            <li className=""><a href="#">About Us</a></li>
                            <li className=""><a href="#">Services</a></li>
                            <li className=""><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="w-screen flex-row  flex justify-center md:hidden">
                        <ul className='flex flex-row'>
                        <a href="#" className="mr-4"><FaFacebook /></a>
                        <a href="#" className="mr-4"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        </ul>
                    </div>
                </div>
                

                {/**footer medium 1064px */}
                <div className='hidden md:flex justify-between w-screen h-[200px] '>
                    <div className='w-[500px] flex flex-col gap-y-[20px] items-center justify-center pl-[100px]'>
                            
                    <div>Follow Us</div>
                    <div className='flex '>
                        <a href="#" className="mr-4 text-[25px]"><FaFacebook /></a>
                        <a href="#" className="mr-4 text-[25px]"><FaTwitter /></a>
                        <a href="#" className='text-[25px]'><FaInstagram /></a>
                        </div>  

                    </div>
                        <div className='w-[500px] flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <img className='w-[100px]' src={logo} />
                                <p className='font-bold text-[25px] '> AAP</p>
                            </div>
                            <div className='mt-[10px]'>
                                <button className='w-[200px] rounded-[40px] border bg-slate-800 text-white mr-[20px]'>Try AAP</button>
                                <button className='w-[200px] rounded-[40px] border bg-white text-slate-800'> Watch Demo</button>
                            </div>
                        </div>
                    <div className='w-[500px] flex gap-x-[20px] justify-center items-center gap-y-[10px]'>
                        <div className='flex flex-col gap-y-[3px]'>
                            <p>Home</p>
                            <p>Product</p>
                            <p>Customer</p>
                            <p>Pricing</p>
                        </div>
                        <div className='flex flex-col gap-y-[3px]'>
                            <p>Vehicle</p>
                            <p>Shopping Assist</p>
                            <p>Inventory</p>
                            <p>Owners</p>
                        </div>
                    </div> 

                </div>

                {/* Copyright */}
                <div className=" mt-[20px] text-[12px] w-screen text-center">
                    <p>&copy; 2023 APP Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
