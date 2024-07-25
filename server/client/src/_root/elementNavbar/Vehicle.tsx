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
	logomer,
	logoaudi,
	carnb1,
	carnb2,
	carnb4,
	carnb5,
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
					<Card className="bg-gray-800 font-poppins text-white h-screen w-full max-w-[380px] p-4 shadow-xl shadow-blue-gray-900/5">
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
											Mercedes AMG CLS
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
											Mercedes Benz Maybach 2022
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
											Audi A5 Coupe
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
											Audi S6 Limousine
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
										<div className="logo_Car xl:w-[1000px] lg:w-[400px] scale-150 pt-12 h-auto xl:ml-[300px] lg:ml-[150px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className=""
												src={carnb1}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 items-center flex pt-3 "
										>
											<Link to="/Mercedes-AMG-CLS">
												<Button className="bg-gradient-to-b from-gray-900 to-gray-400 text-white w-56 h-16 text-3xl">
													View
												</Button>
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
										<div className="logo_Car xl:w-[800px] lg:w-[500px] lg:ml-[80px] scale-150 pt-12 h-auto xl:ml-[100px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[800px]"
												src={carnb2}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 items-center flex"
										>
											<Link to="/Mercedes-Benz-Maybach-2022">
												<Button className="bg-gradient-to-b from-gray-900 to-gray-400 text-white w-56 h-16 text-3xl">
													View
												</Button>
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
											className=" absolute  justify-center items-center h-[250px] flex xl: top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-screen lg:top-[380px]"
										></div>
										<div className="logo_Car xl:w-[1000px] lg:w-[550px] lg:ml-[100px] scale-150 pt-20 h-auto xl: xl:ml-[300px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[840px]"
												src={carnb4}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 items-center flex"
										>
											<Link to="/audi-A5-Couple">
												<Button className="bg-gradient-to-b from-gray-900 to-gray-400 text-white w-56 h-16 text-3xl">
													View
												</Button>
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
										<div className="logo_Car xl:w-[700px] lg:w-[450px] lg:ml-[100px] scale-150 pt-20 h-auto xl:ml-[300px]">
											<img
												data-aos="slide-left"
												data-aos-delay="1000"
												className="w-[740px] w-screen"
												src={carnb5}
											/>
										</div>

										<div
											data-aos="slide-left"
											data-aos-delay="1500"
											className="justify-end pr-24 items-center flex"
										>
											<Link to="/audi-A5-Couple">
												<Button className="bg-gradient-to-b from-gray-900 to-gray-400 text-white w-56 h-16 text-3xl">
													View
												</Button>
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
										Mercedes AMG CLS
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
										Mercedes Benz Maybach 2022
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
										Audi A5 Coupe
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
										Audi S6 Limousine
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
										data-aos="slide-up"
										data-aos-delay="1000"
										className=""
										src={carnb1}
									/>
								</div>
								<div
									data-aos="slide-left"
									data-aos-delay="1200 "
								>
									<h1 className="font-syncopate ss:text-3xl sm:text-2xl  text-center text-xl">
										Mercedes AMG CLS
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-3xl ss:text-3xl">
										$ 183 600 
									</p>
								</div>
								<div
									data-aos="slide-up"
									data-aos-delay="1500"
									className="pt-5"
								>
									<Link to="/Mercedes-AMG-CLS">
										<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-32 h-10 sm:w-40 text-xl items-center flex justify-center">
											View
										</Button>
									</Link>
								</div>
							</div>
						)}
						{currentPage === "BenZmaybach" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[450px] sm:w-[600px] pt-12 sm:pt-0 h-auto pr-12">
									<img
										data-aos="slide-up"
										data-aos-delay="1000"
										className=""
										src={carnb2}
									/>
								</div>
								<div
									data-aos="slide-left"
									data-aos-delay="1200"
								>
									<h1 className="font-syncopate sm:text-2xl text-center text-xl">
										Mercedes Benz Maybay 2022
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-3xl">
										$ 679 867
									</p>
								</div>
								<div
									data-aos="slide-up"
									data-aos-delay="1500"
									className="items-center flex pt-5 "
								>
									<Link to="/Mercedes-Benz-Maybach-2022">
										<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-32 h-10 sm:w-40 text-xl items-center flex justify-center">
											View
										</Button>
									</Link>
								</div>
							</div>
						)}
						{currentPage === "A5Coupe" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[500px] sm:w-[650px] pt-12 h-auto pl-9 pb-5">
									<img
										data-aos="slide-up"
										data-aos-delay="1000"
										className=""
										src={carnb4}
									/>
								</div>
								<div
									data-aos="slide-left"
									data-aos-delay="1200"
								>
									<h1 className="font-syncopate sm:text-2xl text-center text-xl">
										Audi A5 Coupe
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-3xl">
										$ 48 000
									</p>
								</div>
								<div
									data-aos="slide-up"
									data-aos-delay="1500"
									className="flex pt-5 "
								>
									<Link to="/audi-A5-Couple">
										<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-32 h-10 sm:w-40 text-xl items-center flex justify-center">
											View
										</Button>
									</Link>
								</div>
							</div>
						)}
						{currentPage === "S6Limousine" && (
							<div
								data-aos="fade-right"
								className="justify-center items-center flex flex-col"
							>
								<div className="logo_Car w-[350px] sm:w-[550px] pt-12 h-auto pr-1 pb-5">
									<img
										data-aos="slide-up"
										data-aos-delay="1000"
										className=""
										src={carnb5}
									/>
								</div>
								<div
									data-aos="slide-left"
									data-aos-delay="1200"
								>
									<h1 className="font-syncopate sm:text-2xl  text-center text-xl">
										2024 S6 limousin
									</h1>
									<p className="animate-pulse justify-center items-center pt-2 flex text-3xl">
										$ 58 000
									</p>
								</div>
								<div
									data-aos="slide-up"
									data-aos-delay="1500"
									className="flex pt-5 "
								>
									<Link to="/audi-A5-Couple">
										<Button className="bg-gradient-to-b from-gray-700 to-gray-400 text-white w-32 h-10 sm:w-40 text-xl items-center flex justify-center">
											View
										</Button>
									</Link>
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
