import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProductManagement from "./ProductManagement";
import ButtonManagement from "./ButtonManagement";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-tailwind/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

import DashBoardRepon from "../AdminBranchRepon/DashBoardRepon";

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState("");
    const [selectedSection, setSelectedSection] = useState("");
    const [showDiv, setShowDiv] = useState(false);

    const handleNavClick_repon = (section: string) => {
        setCurrentPage(section);
        setSelectedSection(section);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
            mirror: true,
            anchorPlacement: "top-bottom",
        });
    }, []);

    const openModal = () => {
        setShowDiv(true);
    };

    const closeModal = () => {
        setShowDiv(false);
    };

    return (
        <div className="w-full h-full flex">
            <div className="hidden xl:block">
                <div className="flex">
                    <div className="bg-gray-700 w-[300px] h-[600px] rounded-xl p-5 space-y-3 font-bold shadow-md">
                        <div
                            onClick={() => handleNavClick_repon("Product_Management")}
                            className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${selectedSection === "Product_Management" ? "bg-gray-300 text-black" : ""}`}
                        >
                            <FaCar className="w-[20px] h-auto" />
                            <p className="pl-5">Product Management</p>
                        </div>
                        <div
                            onClick={() => handleNavClick_repon("Order_Management")}
                            className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${selectedSection === "Order_Management" ? "bg-gray-300 text-black" : ""}`}
                        >
                            <FaShippingFast className="w-[20px] h-auto" />
                            <p className="pl-5">Order Management</p>
                        </div>
                        <div
                            onClick={() => handleNavClick_repon("Statistics")}
                            className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${selectedSection === "Statistics" ? "bg-gray-300 text-black" : ""}`}
                        >
                            <FaChartLine className="w-[20px] h-auto" />
                            <p className="pl-5">Statistics</p>
                        </div>
                        <div
                            onClick={() => handleNavClick_repon("Voucher")}
                            className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${selectedSection === "Voucher" ? "bg-gray-300 text-black" : ""}`}
                        >
                            <MdDiscount className="w-[20px] h-auto" />
                            <p className="pl-5">Voucher</p>
                        </div>
                        <div
                            onClick={() => handleNavClick_repon("Help")}
                            className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${selectedSection === "Help" ? "bg-gray-300 text-black" : ""}`}
                        >
                            <RxQuestionMarkCircled className="w-[20px] h-auto" />
                            <p className="pl-5">Help</p>
                        </div>
                    </div>
                    <div className="flex-1 pl-5">
                        {currentPage === "Product_Management" && (
                            <div data-aos="slide-left" className="grid grid-cols-2 gap-[980px]">
                                <div className="w-[1250px] h-full bg-gray-700 rounded-xl shadow-md">
                                    <ProductManagement />
                                </div>
                                <div className="w-[260px] h-[270px] bg-gray-700 rounded-xl shadow-md flex items-start">
                                    <div className="p-5 space-y-3">
                                        <Button
                                            className="bg-primary bg-opacity-50 text-white w-56 h-10 text-md items-center flex justify-start"
                                            onClick={openModal}
                                        >
                                            <IoIosAddCircleOutline />
                                            <p className="pl-4">Add product</p>
                                        </Button>
                                        <div className="w-[230px] justify-center flex">
                                            <hr className="w-[50%] border-white relative top-3 pb-8" />
                                        </div>
                                        <div data-aos="fade-left" data-aos-delay="700">
                                            <div className="flex gap-32">
                                                <div className="flex gap-4 items-start">
                                                    <div className="space-y-5">
                                                        <div>Quantity</div>
                                                        <div className="flex">
                                                            <p>Color:</p>
                                                            <div className="pl-16 flex gap-5">
                                                                <div className="bg-red-500 w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
                                                                <div className="bg-blue-400 w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
                                                                <div className="bg-black w-[20px] h-[20px] rounded-full cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex w-full gap-3 justify-end items-center pr-5">
                                                            <div>Search:</div>
                                                            <input type="text" className="bg-white w-[150px] border-2 text-black border-gray-400 rounded-md font-normal" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentPage === "Order_Management" && (
                            <div data-aos="slide-left" className="w-[400px] h-[500px] bg-gray-500 rounded-xl shadow-md">
                                Order Management
                            </div>
                        )}
                        {currentPage === "Statistics" && (
                            <div data-aos="slide-left" className="w-[1250px] h-full bg-gray-500 rounded-xl shadow-md shadow-gray-500">
                                Statistics
                            </div>
                        )}
                        {currentPage === "Voucher" && (
                            <div data-aos="slide-left" className="w-[1250px] h-full bg-gray-500 rounded-xl shadow-md shadow-gray-500">
                                Voucher
                            </div>
                        )}
                        {currentPage === "Help" && (
                            <div data-aos="slide-left" className="w-[1250px] h-full bg-gray-500 rounded-xl shadow-md shadow-gray-500">
                                Help
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showDiv && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-25 z-50">
                    <div data-aos="fade-in" className="backdrop-blur-3xl bg-gray-950 bg-opacity-45 p-5 rounded-lg shadow-lg w-96">
                        <div className="flex justify-end">
                            <button onClick={closeModal}>
                                <IoIosClose className="w-[30px] h-[30px]" />
                            </button>
                        </div>
                        <h2 className="text-xl mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt fuga molestias voluptate nobis consequatur est iure sapiente quas soluta omnis, accusamus ratione, maxime labore inventore nihil dolore quisquam eaque?</h2>
                    </div>
                </div>
            )}
            <div className="block xl:hidden w-full ss:pt-12">
                <div className="justify-center w-full flex">
                    <DashBoardRepon />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
