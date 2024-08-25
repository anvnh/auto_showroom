import React, { useEffect, useState } from "react";
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
	carnba8,
	carnb2024,
	logoroi,
	logomer,
	logoaudi,
	carnb1,
	carnb2,
	carnb4,
	carnb5,
	carnbRR, 
carnbRR2,
} from "../../assets";
import { FaAngleLeft } from "react-icons/fa6";

const Vehicle = () => {
	const [open, setOpen] = React.useState(0);
	const [selectedCar, setSelectedCar] = React.useState<string | null>(null);

	const handleOpen = (value: number) => {
		setOpen(open === value ? 0 : value);
	};

	const handleCarClick = (car: string) => {
		setSelectedCar(selectedCar === car ? null : car);
	};

	useEffect(() => {
		AOS.init({
			duration: 900,
			easing: "ease-in-top",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	// repon
	const [currentPage, setCurrentPage] = useState("main");

	const handleNavClick_repon = (section: string) => {
		setCurrentPage(section);
	};

	const handleBackClick_repon = () => {
		setCurrentPage("main");
	};

	return (
		<div>
			<div className="hidden md:block">
				<div className="relative flex">
					<Card className="backdrop-blur-3xl bg-gray-800 bg-opacity-45 font-poppins text-white h-screen w-full max-w-[380px] p-4 shadow-xl shadow-blue-gray-900/5">
						<div className="mb-2 p-4 font-syncopate uppercase">
							<Typography variant="h5" color="blue-gray">
								<p className="text-2xl pb-4">car brands</p>
								<hr />
							</Typography>
						</div>
						<List>
							<Accordion
								open={open === 1}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${
											open === 1 ? "rotate-180" : ""
										}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 1}>
									<AccordionHeader
										onClick={() => handleOpen(1)}
										className="border-b-0 p-3"
									>
										<Typography
											color="blue-white"
											className="mr-auto text-xl font-syncopate uppercase"
										>
											Mercedes
										</Typography>
										<div className="logo_Car w-[90px] h-auto ">
											<img
												src={logomer}
												alt="Mercedes Logo"
											/>
										</div>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-1">
									<List className="p-0 text-white">
										<ListItem
											onClick={() =>
												handleCarClick(
													"Mercedes AMG CLS"
												)
											}
										>
											<ListItemPrefix>
												<ChevronRightIcon
													strokeWidth={3}
													className="h-3 w-5"
												/>
											</ListItemPrefix>
											AMG CLS
										</ListItem>
										<ListItem
											onClick={() =>
												handleCarClick(
													"Mercedes Benz Maybach 2022"
												)
											}
										>
											<ListItemPrefix>
												<ChevronRightIcon
													strokeWidth={3}
													className="h-3 w-5"
												/>
											</ListItemPrefix>
											Benz Maybach 2022
										</ListItem>
									</List>
								</AccordionBody>
							</Accordion>
							<Accordion
								open={open === 2}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${
											open === 2 ? "rotate-180" : ""
										}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 2}>
									<AccordionHeader
										onClick={() => handleOpen(2)}
										className="border-b-0 p-3"
									>
										<Typography
											color="blue-gray"
											className="mr-auto font-syncopate uppercase"
										>
											Audi
										</Typography>
										<div className="logo_Car w-[90px] h-auto ">
											<img
												src={logoaudi}
												alt="Audi Logo"
											/>
										</div>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-1 text-white">
									<List className="p-0">
										<ListItem
											onClick={() =>
												handleCarClick("Audi A5 Coupe")
											}
										>
											<ListItemPrefix>
												<ChevronRightIcon
													strokeWidth={3}
													className="h-3 w-5"
												/>
											</ListItemPrefix>
											A5 Coupe
										</ListItem>
										<ListItem
											onClick={() =>
												handleCarClick(
													"Audi S6 Limousine"
												)
											}
										>
											<ListItemPrefix>
												<ChevronRightIcon
													strokeWidth={3}
													className="h-3 w-5"
												/>
											</ListItemPrefix>
											S6 Limousine
										</ListItem>
										<ListItem
										onClick={() =>
											handleCarClick("R8coupe")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										R8 coupe
									</ListItem>
									<ListItem
										onClick={() =>
											handleCarClick("GT2024")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										E-tron GT 2024
									</ListItem>
									</List>
								</AccordionBody>
							</Accordion>
							<Accordion
								open={open === 3}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${
											open === 1 ? "rotate-180" : ""
										}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 3}>
									<AccordionHeader
										onClick={() => handleOpen(3)}
										className="border-b-0 p-3"
									>
										<Typography
											color="blue-white"
											className="mr-auto text-xl font-syncopate uppercase"
										>
											rolls-royce
										</Typography>
										<div className="logo_Car w-[90px] h-auto ">
											<img
												src={logoroi}
												alt="Mercedes Logo"
											/>
										</div>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-1">
									<List className="p-0 text-white">
										<ListItem
											onClick={() =>
												handleCarClick(
													"Ghost2021"
												)
											}
										>
											<ListItemPrefix>
												<ChevronRightIcon
													strokeWidth={3}
													className="h-3 w-5"
												/>
											</ListItemPrefix>
											Ghost 2021
										</ListItem>
										<ListItem
											onClick={() =>
												handleCarClick(
													"Phantom"
												)
											}
										>
											<ListItemPrefix>
												<ChevronRightIcon
													strokeWidth={3}
													className="h-3 w-5"
												/>
											</ListItemPrefix>
										Phantom Extended series II
										</ListItem>
									</List>
								</AccordionBody>
							</Accordion>
						</List>
					</Card>

					{selectedCar && (
						<div className="text-white rounded-lg shadow-lg w-[1520px]">
							<Typography variant="body1">
								{/* Thông tin chi tiết về xe được chọn */}
								{selectedCar === "Mercedes AMG CLS" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:pl-1 xl:items-center flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Mercedes AMG CLS
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 183 600
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[1000px] lg:w-[450px] scale-150 pt-12 h-auto xl:ml-[300px] lg:ml-[120px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[800px] lg:-top-[10px] xl:-top-[40px] relative"
												src={carnb1}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 relative xl:-top-[70px] items-center flex pt-3 "
										>
											<Link to="/Mercedes-AMG-CLS">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 rounded-md font-bold border-white font-poppins text-center border-r border-t">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 relative lg:top-[30px] xl:-top-[49px] items-center flex"
										>
											<Link to="/shop/product/66ab8c2a2c63f54b95a50d1d">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700 rounded-md font-bold  hover:before:-translate-x-64 font-poppins text-center">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar ===
									"Mercedes Benz Maybach 2022" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:pl-1 xl:items-center flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Mercedes Benz Maybay 2022
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 679 867
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[800px] lg:w-[450px] lg:ml-[140px] scale-150 pt-12 h-auto xl:ml-[260px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[770px] lg:top-[40px] xl:top-[50px] relative"
												src={carnb2}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 pt-20 pb-5 relative items-center flex"
										>
											<Link to="/Mercedes-Benz-Maybach-2022">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 border-white border-r border-t font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-0 items-center flex"
										>
											<Link to="/shop/product/66ab97d42c63f54b95a50dc1">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar === "Audi A5 Coupe" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:pl-1 xl:items-center flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Audi A5 Coupe
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 48 000
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[1000px] lg:w-[450px] lg:ml-[140px] scale-150 pt-20 h-auto xl: xl:ml-[330px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[740px] lg:-top-[50px] xl:-top-[80px] relative"
												src={carnb4}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 relative -top-[25px] items-center flex"
										>
											<Link to="/audi-A5-Couple">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 border-white border-r border-t font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-0 items-center flex"
										>
											<Link to="/shop/product/66cb0bfcbdf7ec719d6d5996">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar === "Audi S6 Limousine" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:items-center xl:pl-3 flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											2024 S6 limousin
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 58 000
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[700px] lg:w-[450px] lg:ml-[150px] scale-150 pt-20 h-auto xl:ml-[270px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[700px] -top-[60px] relative"
												src={carnb5}
											/>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 -top-[25px] relative items-center flex"
										>
											<Link to="/audi-A5-Couple">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 border-white border-t border-r font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-0 items-center flex"
										>
											<Link to="/shop/product/66cb140fbdf7ec719d6d5a48">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar === "R8coupe" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:items-center xl:pl-3 flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Audi R8 coupe
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 208 100
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[800px] lg:w-[450px] lg:ml-[150px] scale-150 pt-20 h-auto xl:ml-[200px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[800px] top-[40px] relative"
												src={carnba8}
											/>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 top-[40px] relative items-center flex"
										>
											<Link to="/Audi-R8-coupe-2022">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 border-white border-t border-r font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-16 items-center flex"
										>
											<Link to="/shop/product/66a3bb07803942c2c831d0aa">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar === "GT2024" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:items-center xl:pl-3 flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Audi E-Tron GT 2024
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 106 500
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[800px] lg:w-[450px] lg:ml-[150px] scale-150 pt-20 h-auto xl:ml-[210px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[800px] top-[20px] relative"
												src={carnb2024}
											/>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 top-[25px] relative items-center flex"
										>
											<Link to="/Audi-e-tron-GT-2024">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 border-white border-t border-r font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-12 items-center flex"
										>
											<Link to="/shop/product/66bfffa6aeeda00e450a9e26">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar === "Ghost2021" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:items-center xl:pl-3 flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Rolls-Royce Ghost 2021
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 332 500
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[700px] lg:w-[450px] lg:ml-[150px] scale-150 pt-20 h-auto xl:ml-[270px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className=" xl:w-[700px] -top-[0px] relative"
												src={carnbRR}
											/>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 pt-12 items-center flex"
										>
											<Link to="/Rolls-Royce-Ghost-2021">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 border-white border-t border-r before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-5 items-center flex"
										>
											<Link to="/shop/product/66bfb4d4598bcf76c770bf1f">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
								{selectedCar === "Phantom" && (
									<>
										<h1
											data-aos="slide-left"
											className="text-4xl xl:justify-center xl:items-center xl:pl-3 flex pt-12 lg:text-center lg:justify-start lg:pl-24"
										>
											Phantom Extended series II
										</h1>
										<p
											data-aos="slide-left"
											className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
										>
											$ 1,65 million
										</p>
										<hr data-aos="slide-right" />
										<div
											data-aos="slide-left"
											className=" absolute  justify-center items-center h-[250px] flex xl:top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[1200px] lg:w-[580px] lg:ml-[100px] scale-150 pt-20 h-auto xl:ml-[240px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[950px] -top-[25px] relative"
												src={carnbRR2}
											/>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 -top-[20px] relative items-center flex"
										>
											<Link to="/Roll-Royce-Phantom">
												<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 border-white border-r border-t before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													View
												</button>
											</Link>
										</div>
										<div
											data-aos="slide-left"
											data-aos-delay="1700"
											className="justify-end pr-24 pt-1 items-center flex"
										>
											<Link to="/shop/product/66bfc096598bcf76c770c008">
												<button className="bg-gradient-to-b from-gray-400 hover:shadow-white hover:shadow-md to-gray-900 text-white w-40 h-12 text-2xl before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 border-white border-l border-b before:duration-700  hover:before:-translate-x-64 font-poppins rounded-md">
													Shop
												</button>
											</Link>
										</div>
									</>
								)}
							</Typography>
						</div>
					)}
				</div>
			</div>
			<div className="block md:hidden">
				{currentPage === "main" ? (
					<List>
						<Accordion
							open={open === 1}
							icon={
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`mx-auto h-4 w-4 transition-transform ${
										open === 1 ? "rotate-180" : ""
									}`}
								/>
							}
						>
							<ListItem className="p-0" selected={open === 1}>
								<AccordionHeader
									onClick={() => handleOpen(1)}
									className="border-b-0 p-3"
								>
									<Typography
										color="blue-white"
										className="mr-auto text-xl font-syncopate uppercase"
									>
										Mercedes
									</Typography>
									<div className="logo_Car w-[90px] h-auto ">
										<img
											src={logomer}
											alt="Mercedes Logo"
										/>
									</div>
								</AccordionHeader>
							</ListItem>
							<AccordionBody className="py-1">
								<List className="p-0 text-white">
									<ListItem
										onClick={() =>
											handleNavClick_repon("AMGCLS")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										 AMG CLS
									</ListItem>
									<ListItem
										onClick={() =>
											handleNavClick_repon("BenZmaybach")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										 Benz Maybach 2022
									</ListItem>
								</List>
							</AccordionBody>
						</Accordion>
						<Accordion
							open={open === 2}
							icon={
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`mx-auto h-4 w-4 transition-transform ${
										open === 2 ? "rotate-180" : ""
									}`}
								/>
							}
						>
							<ListItem className="p-0" selected={open === 2}>
								<AccordionHeader
									onClick={() => handleOpen(2)}
									className="border-b-0 p-3"
								>
									<Typography
										color="blue-gray"
										className="mr-auto font-syncopate uppercase"
									>
										Audi
									</Typography>
									<div className="logo_Car w-[90px] h-auto ">
										<img src={logoaudi} alt="Audi Logo" />
									</div>
								</AccordionHeader>
							</ListItem>
							<AccordionBody className="py-1 text-white">
								<List className="p-0">
									<ListItem
										onClick={() =>
											handleNavClick_repon("A5Coupe")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										 A5 Coupe
									</ListItem>
									<ListItem
										onClick={() =>
											handleNavClick_repon("S6Limousine")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										 S6 Limousine
									</ListItem>
									<ListItem
										onClick={() =>
											handleNavClick_repon("R8coupe")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										 R8 coupe
									</ListItem>
									<ListItem
										onClick={() =>
											handleNavClick_repon("GT2024")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										 E-tron GT 2024
									</ListItem>
								</List>
							</AccordionBody>
					
						</Accordion>
						<Accordion
							open={open === 3}
							icon={
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`mx-auto h-4 w-4 transition-transform ${
										open === 3 ? "rotate-180" : ""
									}`}
								/>
							}
						>
							<ListItem className="p-0" selected={open === 3}>
								<AccordionHeader
									onClick={() => handleOpen(3)}
									className="border-b-0 p-3"
								>
									<Typography
										color="blue-gray"
										className="mr-auto font-syncopate uppercase"
									>
										Roll-roil
									</Typography>
									<div className="logo_Car w-[90px] h-auto ">
										<img src={logoroi} alt="Audi Logo" />
									</div>
								</AccordionHeader>
							</ListItem>
					
							<AccordionBody className="py-1 text-white">
								<List className="p-0">
									<ListItem
										onClick={() =>
											handleNavClick_repon("Ghost2021")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										Ghost 2021
									</ListItem>
									<ListItem
										onClick={() =>
											handleNavClick_repon("Phantom")
										}
									>
										<ListItemPrefix>
											<ChevronRightIcon
												strokeWidth={3}
												className="h-3 w-5"
											/>
										</ListItemPrefix>
										Phantom Extended series II
									</ListItem>
								</List>
							</AccordionBody>
						</Accordion>
					</List>
				) : (
					<div className="pt-4 sm:pt-0">
						<button
							data-aos="fade-right"
							onClick={handleBackClick_repon}
						>
							<FaAngleLeft className="w-6 ml-6 h-auto" />
						</button>
						{currentPage === "AMGCLS" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[600px]  sm:w-[500px] pt-12 sm:pt-0 h-auto">
									<img
										data-aos="fade-left"
										data-aos-delay="500"
										className=""
										src={carnb1}
									/>
								</div>
								<div
								data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-3xl  text-center text-xl">
										Mercedes AMG CLS
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
										$ 183 600
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
									<Link to="/Mercedes-AMG-CLS">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
								<Link to="/shop/product/66ab8c2a2c63f54b95a50d1d">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "BenZmaybach" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="w-[300px] ss:w-[620px] pl-0 ss:pl-12 sm:w-[500px] pt-5 pb-4 sm:pt-0 h-auto ">
									<img
										data-aos="fade-left"
										data-aos-delay="500"
										src={carnb2}
									/>
								</div>
								<div
									data-aos="fade-left"
									data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-2xl text-center text-xl">
										Mercedes Benz Maybay 2022
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
										$ 679 867
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
									<Link to="/Mercedes-Benz-Maybach-2022">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
									<Link to="/shop/product/66ab97d42c63f54b95a50dc1">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "A5Coupe" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[600px]  sm:w-[500px] pt-12 h-auto pb-5">
									<img
											data-aos="fade-left"
										data-aos-delay="500"
										className=""
										src={carnb4}
									/>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-2xl text-center text-xl">
										Audi A5 Coupe
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
										$ 48 000
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
										<Link to="/audi-A5-Couple">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
									<Link to="/shop/product/66bfb4d4598bcf76c770bf1f">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "S6Limousine" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[600px]  sm:w-[500px] pt-12 h-auto pr-1 pb-5">
									<img
										data-aos="fade-left"
										data-aos-delay="500"
										className=""
										src={carnb5}
									/>
								</div>
								<div
									data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-2xl  text-center text-xl">
										2024 S6 limousin
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
										$ 58 000
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
								<Link to="/audi-A5-Couple">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
								<Link to="/shop/product/66bfb4d4598bcf76c770bf1f">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "R8coupe" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[600px]  sm:w-[500px] pt-12 h-auto pr-1 pb-5">
									<img
										data-aos="fade-left"
										data-aos-delay="500"
										className=""
										src={carnba8}
									/>
								</div>
								<div
									data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-2xl  text-center text-xl">
									Audi R8 coupe
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
									$ 208 100
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
							<Link to="/Audi-R8-coupe-2022">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
								<Link to="/shop/product/66a3bb07803942c2c831d0aa">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "GT2024" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[600px]  sm:w-[500px] pt-12 h-auto pr-1 pb-5">
									<img
										data-aos="fade-left"
										data-aos-delay="500"
										className=""
										src={carnb2024}
									/>
								</div>
								<div
									data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-2xl  text-center text-xl">
									Audi E-Tron GT 2024
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
									$ 106 500
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
								<Link to="/Audi-e-tron-GT-2024">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
								<Link to="/shop/product/66bfffa6aeeda00e450a9e26">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "Ghost2021" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[600px] h-auto sm:w-[500px] pt-12 pr-1 pb-5">
									<img
										data-aos="fade-left"
										data-aos-delay="500"
										className=""
										src={carnbRR}
									/>
								</div>
								<div
									data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-3xl  text-center text-xl">
									Rolls-Royce Ghost 2021
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
										$ 332 500
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
									<Link to="/Rolls-Royce-Ghost-2021">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
									<Link to="/shop/product/66bfb4d4598bcf76c770bf1f">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
						{currentPage === "Phantom" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[300px] ss:w-[800px] sm:w-[500px] pt-5 h-auto ss:pt-1/2 pb-5">
									<img
											data-aos="fade-left"
										data-aos-delay="500"
				
										src={carnbRR2}
									/>
								</div>
								<div
									data-aos="fade-left"
										data-aos-delay="700"
								>
									<h1 className="font-syncopate ss:text-2xl  text-center text-xl">
									Phantom Extended series II
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-xl ss:text-3xl">
										$ 1,65 million
									</p>
								</div>
								<div className="flex gap-5">
								<div
									data-aos="fade-left"
										data-aos-delay="900"
									className="pt-5"
								>
									<Link to="/Roll-Royce-Phantom">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white font-poppins before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											View
										</button>
									</Link>
								</div>
								<div
										data-aos="fade-left"
										data-aos-delay="1200"
									className="pt-5"
								>
								<Link to="/shop/product/66bfc096598bcf76c770c008">
										<button className="bg-gradient-to-b from-gray-900 hover:shadow-white hover:shadow-md to-gray-400 text-white w-32 h-10 text-md rounded-md border-t border-r border-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-12  before:bg-white before:opacity-75 before:duration-700  hover:before:-translate-x-64">
											Shop
										</button>
									</Link>
								</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Vehicle;
