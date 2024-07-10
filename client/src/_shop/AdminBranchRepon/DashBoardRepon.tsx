import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProductRepon from "./ProductRepon";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleLeft } from "react-icons/fa6";

const DashBoardRepon = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [toggle, setToggle] = useState(true); // Đảm bảo toggle là true để hiển thị dashboard

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const handleNavClick_repon = (section: string) => {
    setCurrentPage(section);
    setSelectedSection(section);
  };

  const handleBackClick_repon = () => {
    setCurrentPage("");
    setSelectedSection("");
  };

  return (
    <div className="px-3 lg:pt-12 ">
      {toggle && (
        <div
          data-aos="fade"
          className="xl:hidden opacity-90 h-screen relative w-full backdrop-blur-3xl bg-opacity-20 text-white"
        >
          {currentPage === "" ? (
            <div className="bg-gray-700 w-[300px] h-[600px] rounded-xl p-5 space-y-3 font-bold shadow-md shadow-gray-500">
              <div
              data-aos="fade-up"
              	data-aos-delay="600"
                onClick={() => handleNavClick_repon("Product_Management")}
                className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
                  selectedSection === "Product_Management"
                    ? "bg-gray-300 text-black"
                    : ""
                }`}
              >
                <FaCar className="w-[20px] h-auto" />
                <p className="pl-5">Product Management</p>
              </div>
              <div
                data-aos="fade-up"
              	data-aos-delay="700"
                onClick={() => handleNavClick_repon("Order_Management")}
                className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
                  selectedSection === "Order_Management"
                    ? "bg-gray-300 text-black"
                    : ""
                }`}
              >
                <FaShippingFast className="w-[20px] h-auto" />
                <p className="pl-5">Order Management</p>
              </div>
              <div
                data-aos="fade-up"
              	data-aos-delay="800"
                onClick={() => handleNavClick_repon("Statistics")}
                className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
                  selectedSection === "Statistics"
                    ? "bg-gray-300 text-black"
                    : ""
                }`}
              >
                <FaChartLine className="w-[20px] h-auto" />
                <p className="pl-5">Statistics</p>
              </div>
              <div
                data-aos="fade-up"
              	data-aos-delay="900"
                onClick={() => handleNavClick_repon("Voucher")}
                className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
                  selectedSection === "Voucher"
                    ? "bg-gray-300 text-black"
                    : ""
                }`}
              >
                <MdDiscount className="w-[20px] h-auto" />
                <p className="pl-5">Voucher</p>
              </div>
              <div
                data-aos="fade-up"
              	data-aos-delay="1000"
                onClick={() => handleNavClick_repon("Help")}
                className={`flex hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out items-center cursor-pointer p-2 rounded ${
                  selectedSection === "Help"
                    ? "bg-gray-300 text-black"
                    : ""
                }`}
              >
                <RxQuestionMarkCircled className="w-[20px] h-auto" />
                <p className="pl-5">Help</p>
              </div>
            </div>
          ) : (
            <div className="pt-5 pl-4">
              <button
                data-aos="fade-right"
                onClick={handleBackClick_repon}
              >
                <FaAngleLeft className="w-6 h-auto" />
              </button>
              {currentPage === "Product_Management" && (
                <div data-aos="fade-right">
                         <ProductRepon />
                </div>
              )}
              {currentPage === "Order_Management" && (
                <div data-aos="fade-right">
                  Order Management
                </div>
              )}
              {currentPage === "Statistics" && (
                <div data-aos="fade-right">
                  Statistics
                </div>
              )}
              {currentPage === "Voucher" && (
                <div data-aos="fade-right">
                  Voucher
                </div>
              )}
              {currentPage === "Help" && (
                <div data-aos="fade-right">
                  Help
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashBoardRepon;
