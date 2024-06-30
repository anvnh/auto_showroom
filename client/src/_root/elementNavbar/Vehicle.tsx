import React, { useEffect } from "react";
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
import {
	PresentationChartBarIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
	logomer,
	logoaudi,
	logopos,
	logoroi,
	mernavbar,
	carnb1,
	carnb2,
	carnb3,
} from "../../assets";

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

	return (
		<div className="relative flex">
			<Card className="bg-gray-800 font-poppins text-white h-[calc(89vh-1rem)] w-full max-w-[380px] p-4 shadow-xl shadow-blue-gray-900/5">
				<div className="mb-2 p-4 font-syncopate uppercase">
					<Typography variant="h5" color="blue-gray">
						<span className="text-2xl">car brands</span>
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
									<img src={logomer} alt="Mercedes Logo" />
								</div>
							</AccordionHeader>
						</ListItem>
						<AccordionBody className="py-1">
							<List className="p-0 text-white">
								<ListItem
									onClick={() =>
										handleCarClick("Mercedes AMG CLS")
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
									<img src={logoaudi} alt="Audi Logo" />
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
										handleCarClick("Audi S6 Limousine")
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
									className="text-4xl justify-center items-center flex pt-12"
								>
									Mercedes AMG CLS
								</h1>
								<p
									data-aos="slide-left"
									className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
								>
									$ 26 000
								</p>
                <hr 	data-aos="slide-right"/>
                <div  data-aos="slide-left" className=" absolute  justify-center items-center h-[250px] flex top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-[1520px]"></div> 
								<div className="logo_Car w-[1000px] scale-150 pt-28 h-auto ml-[600px]">
									<img
									data-aos="slide-left"
                  data-aos-delay="1000"
                  className=""
										src={carnb1}
									/>
								</div>
								
								<div className="justify-center items-center flex pt-32">
									<Button 	data-aos="slide-left" className="bg-gradient-to-b from-gray-900 to-gray-400 text-white w-56 h-16 text-3xl">
										View
									</Button>
								</div>
							</>
						)}
						{selectedCar === "Mercedes Benz Maybach 2022" && (
							<>
								<h1
									data-aos="slide-left"
									className="text-4xl justify-center items-center flex pt-12"
								>
									Mercedes Benz Maybay 2022
								</h1>
								<p
									data-aos="slide-left"
									className="animate-pulse pb-4 justify-center items-center pt-5 flex text-3xl"
								>
									$ 679 867
								</p>
                <hr 	data-aos="slide-right"/>
                <div  data-aos="slide-left" className=" absolute  justify-center items-center h-[250px] flex top-[480px] bg-gradient-to-b from-gray-400 to-gray-900 w-[1520px]"></div> 
								<div className="logo_Car w-[1000px] scale-150 pt-28 h-auto ml-[600px]">
									<img
									data-aos="slide-left"
                  data-aos-delay="1000"
                  className="w-00px] h-auto"
										src={carnb3}
									/>
								</div>
								
								<div className="justify-center items-center flex pt-32">
									<Button 	data-aos="slide-left" className="bg-gradient-to-b from-gray-900 to-gray-400 text-white w-56 h-16 text-3xl">
										View
									</Button>
								</div>
							</>
						)}
						{selectedCar === "Audi A5 Coupe" && (
							<>
								<p>Thông tin chi tiết về Audi A5 Coupe...</p>
								<p>Động cơ: 2.0L I4 Turbo</p>
								<p>Công suất: 261 mã lực</p>
								<p>Thời gian tăng tốc 0-100 km/h: 5.6 giây</p>
							</>
						)}
						{selectedCar === "Audi S6 Limousine" && (
							<>
								<p>
									Thông tin chi tiết về Audi S6 Limousine...
								</p>
								<p>Động cơ: 2.9L V6 Turbo</p>
								<p>Công suất: 444 mã lực</p>
								<p>Thời gian tăng tốc 0-100 km/h: 4.5 giây</p>
							</>
						)}
					</Typography>
				</div>
			)}
		</div>
	);
};

export default Vehicle;
