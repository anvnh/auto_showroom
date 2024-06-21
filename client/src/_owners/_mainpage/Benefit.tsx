import { FaTools, FaWifi } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { LuFileSymlink } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';

const Benefit = () => {
    const benefits = [
        {
            icon: <FaTools className="text-4xl text-white" />,
            title: "Maintenance",
            description: "Keep your car fit. View maintenance schedules, book appointments, and get reminders."
        },
        {
            icon: <FaWifi className="text-4xl text-white" />,
            title: "APP Connect",
            description: "If equipped and eligible, enjoy the smarter convenience of APP Connect’s remote features like lock/unlock, climate control, charging and much more"
        },
        {
            icon: <MdOndemandVideo className="text-4xl text-white" />,
            title: "Videos",
            description: "Enjoy a selection of movies, TV shows, and music on your car's entertainment system."
        },
        {
            icon: <FaMoneyBillAlt className="text-4xl text-white" />,
            title: "Finance",
            description: "You could make your car payments and keep track of payment history."
        },
        {
            icon: <FaCar className="text-4xl text-white" />,
            title: "Warranty",
            description: " Have access to your vehicle’s warranty information conveniently when you need it."
        },
        {
            icon: <LuFileSymlink className="text-4xl text-white" />,
            title: "Manuals",
            description: "Access your car’s owner’s manual and other documents anytime, anywhere."
        },
        {
            icon: <FaCalendarAlt className="text-4xl text-white" />,
            title: "Service Appointments",
            description: "Get priority scheduling for car maintenance appointments and repairs."
        },
        {
            icon: <IoShieldCheckmarkSharp className="text-4xl text-white" />,
            title: "Recalls",
            description: "Receive complimentary roadside assistance services in case of emergencies."
        }
    ]

    useEffect(() => {
		AOS.init({
			duration: 900,

			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);


    return (
        <div className="flex w-full mb-16">
            <div className="w-full">
                <h1
                 data-aos="fade-up"
                className="text-white md:text-4xl text-3xl pt-10 w-full flex justify-center mb-10 font-bold">
                    Owner's Member Benefit
                </h1>
                <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center"> 
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div 
                             data-aos="fade-up"
                            className="bg-gray-600 bg-opacity-90 p-4 rounded-full">
                                {benefit.icon}
                            </div>
                            <h1
                             data-aos="fade-up"
                            className="text-white md:text-2xl text-lg font-bold pt-4">
                                {benefit.title}
                            </h1>
                            <p
                             data-aos="fade-up"
                            className="text-white text-center md:w-3/4 w-full">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefit
