import { useState, useEffect } from "react";
import { logo, menu, close } from "../../assets";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { kia, audi, bmwMoono, honda_black, hyundai, lambo } from "@/assets/hplat_asset/img/car_logo"
import { kiaSoul, kiaSeltos, kiaSorento, kiaSportage } from '@/assets/hplat_asset/img/dropdownNavBarImage/vehicle/kia';
import { audiA5, audiA8, audiEtron, audiQ5 } from '@/assets/hplat_asset/img/dropdownNavBarImage/vehicle/audi';
import {
	car, note, calculation, money,
	easyBuy, trade, localPrice, testDrive,
} from "@/assets/hplat_asset/img/dropdownNavBarImage/shopping"


const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const [dropdownVe, setDropdownVe] = useState(false);
	const [dropdownSh, setDropdownSh] = useState(false);
	const [dropdownIn, setDropdownIn] = useState(false);

	/**code navbar event */
	const [selectedSection, setSelectedSection] = useState('');
	const handleNavClick = (section: string) => {
		setSelectedSection(prevSection => prevSection === section ? '' : section);
	}
	const section = selectedSection
	// console.log(section)

	const [isHidden, setIsHidden] = useState(false);
	let lastScrollTop = 0;

	useEffect(() => {
		const handleScroll = () => {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				setIsHidden(true); // Cuộn xuống, ẩn navbar
			} else {
				setIsHidden(false); // Cuộn lên, hiện navbar
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);



	return (
		<div className={`z-50 fixed top-0 w-full bg-gray-800 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
			<nav className="w-full flex pt-3 pb-2 justify-between items-center navbar bg-gray-950 md:px-12.5 px-8 bg-opacity-50">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="md:w-[68px] w-[55px] md:h-[60px] h-[55px]"
					/>
				</Link>

				<ul className="list-none sm:flex hidden justify-start items-center flex-1">
					<li
						className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10 ml-5"
						onClick={() => {
							handleNavClick("vehiclesBar");
						}}
					>
						<div
							onClick={() => {
								setDropdownVe(!dropdownVe);
								setDropdownSh(false);
								setDropdownIn(false);
							}}
							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300"
						>
							<p> Vehicles </p>
							{dropdownVe ? (
								<IoIosArrowDown className="ml-2 mt-1" />
							) : (
								<IoIosArrowUp className="ml-2 mt-1" />
							)}
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>
					<li
						className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10"
						onClick={() => {
							handleNavClick("shoppingBar");
						}}
					>
						<div
							onClick={() => {
								setDropdownSh(!dropdownSh);
								setDropdownVe(false);
								setDropdownIn(false);
							}}
							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300"
						>
							<p> Shopping Assist </p>
							{dropdownSh ? (
								<IoIosArrowDown className="ml-2 mt-1" />
							) : (
								<IoIosArrowUp className="ml-2 mt-1" />
							)}
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li
						className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10"
						onClick={() => {
							handleNavClick("inventoryBar");
						}}
					>
						<div
							onClick={() => {
								setDropdownIn(!dropdownIn);
								setDropdownSh(false);
								setDropdownVe(false);
							}}
							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1 hover:text-gray-300 duration-300"
						>
							<p> Inventory </p>
							{dropdownIn ? (
								<IoIosArrowDown className="ml-2 mt-1" />
							) : (
								<IoIosArrowUp className="ml-2 mt-1" />
							)}
						</div>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>

					<li className="relative group font-poppins font-normal cursor-pointer text-[17px] text-white mr-10">
						<Link
							to="/owners"
							className="relative group flex transition ease-in-out delay-100 hover:-translate-y-1  hover:text-gray-300 duration-300"
						>
							<p> Owners </p>
							<MdOpenInNew className="ml-2 mt-1" />
						</Link>
						<div className="absolute -bottom-2 left-0 h-1 w-0 bg-gray-400 group-hover:w-full transition-all duration-300"></div>
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center sticky z-50 ">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[23px] h-[24px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`
					${toggle ? "flex" : "hidden"}
					text-white p-6 bg-gray-950 bg-opacity-70 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50
				`}>
						<ul className="list-none flex justify-end items-start flex-1 flex-col">
							<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
									Vehicles
								</p>
							</li>
							<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
									Shopping Assist
								</p>
							</li>
							<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
								<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
									Inventory
								</p>
							</li>
							<li className="relative group font-poppins font-normal cursor-pointer text-[18px] text-white mb-2.5">
								<Link to="/users">
									<p className="transform group-hover:scale-110 group-hover:text-gray-300 transition-transform duration-300">
										Owners
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    <Link to="/profile">
                        <li className="relative group">
                            <FaUser className="text-white w-[27px] h-[27px] transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        </li>
                    </Link>
				</ul>


			</nav>
			{section === "vehiclesBar" ? <div className={`z-50 absolute top-[81px] w-screen h-[600px] rounded-b-[20px]  px-[10px] lg:px-[50px] pt-[20px] bg-white`}>
				<div className='rounded-[40px] border-t-[2px] border-slate-400px-[10px] pt-[10px]'>
					<img className="w-[60px]  lg:w-[100px]  " src={kia} />
				</div>
				<div className='flex justify-evenly w-screen h-[150px] xs:h-[210px]'>
					<div className="cursor-pointer">
						<div>
							<img className=' sm:w-[190px] lg:w-[250px] hover:scale-110 transition ' src={kiaSoul} />
						</div>
						<p className='font-bold sm:text-[25px]  lg:text-[28px]'>Soul</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div className="cursor-pointer">
						<div>
							<img className=' sm:w-[190px] lg:w-[250px]  hover:scale-110 transition' src={kiaSeltos} />
						</div>
						<p className='font-bold xs:text-[25px] md:text-[28px]'>Seltos</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div className="cursor-pointer">
						<div>
							<img className=' sm:w-[190px] lg:w-[250px] hover:scale-110 transition' src={kiaSportage} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>Soul</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div className="cursor-pointer">
						<div>
							<img className='sm:w-[190px] lg:w-[250px] hover:scale-110 transition' src={kiaSorento} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>Soul</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
				</div>
				<div className='rounded-[40px] border-t-[2px] border-slate-400 px-[10px] pt-[10px]'>
					<img className="w-[60px] lg:w-[100px]" src={audi} />
				</div>
				<div className='flex justify-evenly w-screen h-[150px] xs:h-[210px]'>
				<div className="cursor-pointer">
						<div>
							<img className='sm:w-[190px] lg:w-[250px] hover:scale-110 transiton' src={audiA5} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>A5</p>
						<p className='font-semibold text-[18px]'>$22,190</p>
					</div>
					<div className="cursor-pointer">
						<div>
							<img className=' sm:w-[190px] lg:w-[250px] hover:scale-110 transition' src={audiA8} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>A8</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div className="cursor-pointer">
						<div>
							<img className=' sm:w-[190px]  lg:w-[250px] hover:scale-110 transition' src={audiEtron} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>Etron</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div className="cursor-pointer">
						<div>
							<img className=' sm:w-[190px] lg:w-[250px] hover:scale-110 transition' src={audiQ5} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>Q5</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
				</div>
				{/* <div  className='rounded-[40px] border-t-[2px] border-slate-400 px-[10px] pt-[10px]'>
					<img className="w-[50px] lg:w-[80px]  hover:scale-110 transition" src={bmwMoono}/>
				</div> */}
				{/* <div className='flex justify-evenly w-screen h-[210px]'>
					<div>
						<div>
							<img className='sm:w-[190px] lg:w-[250px]  hover:scale-110 transition' src={audiA5} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>A5</p>
						<p className='font-semibold text-[18px]'>$22,190</p>
					</div>
					<div>
						<div>
							<img className='sm:w-[190px] lg:w-[250px]  hover:scale-110 transition' src={audiA8} />
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>A8</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='sm:w-[190px] lg:w-[250px]  hover:scale-110 transition' src={audiEtron}/>
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>Etron</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
					<div>
						<div>
							<img className='sm:w-[190px] lg:w-[250px]  hover:scale-110 transition' src={audiQ5}/>
						</div>
						<p className='font-bold xs:text-[25px] lg:text-[28px]'>Q5</p>
						<p className='font-semibold text-[18px]'>$20,190</p>
					</div>
				</div> */}
			</div>
				: null}
			{section === "shoppingBar" ? <div className=" z-50 absolute top-[81px] w-screen h-[400px] rounded-b-[20px] xl:px-[100px] bg-white  pt-[40px]   ">
				<div className='h-[200px]   flex justify-evenly  '>
					<div className='lg:w-[300px] xl:w-[400px] cursor-pointer hover:scale-110 transition duration-300 flex-row items-center justify-center text-center '>
						<div className=' lg:w-[300px] xl:w-[400px] flex justify-center  '>
							<img className='w-[40px] sm:w-[50px] ' src={money} />
						</div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Offer and Incentives</p>
					</div>
					<div className='cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px]  text-center '>
						<div className=' lg:w-[300px] xl:w-[400px] flex justify-center'>
							<img className=' w-[40px] sm:w-[50px]' src={car} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Build Your Car</p>
					</div>
					<div className='cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px] text-center '>
						<div className='  lg:w-[300px] xl:w-[400px] flex justify-center'>
							<img className=' w-[40px] sm:w-[50px] ' src={calculation} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Payment Calculator</p>
					</div>
					<div className='cursor-pointer hover:scale-110 transition duration-300  lg:w-[300px] xl:w-[400px] text-center '>
						<div className='lg:w-[300px] xl:w-[400px] flex justify-center'>
							<img className=' w-[40px] sm:w-[50px]' src={note} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Offer and Incentives</p>
					</div>
				</div>
				<div className='h-[200px]   flex justify-evenly  '>
					<div className='cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px]  xl:w-[400px]  flex-row items-center justify-center text-center'>
						<div className=' lg:w-[300px] xl:w-[400px] flex justify-center '>
							<img className=' w-[40px] sm:w-[50px]' src={trade} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Trade In</p>
					</div>
					<div className='cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px]  text-center '>
						<div className='  lg:w-[300px]  xl:w-[400px] flex justify-center'>
							<img className=' w-[40px] sm:w-[50px]' src={localPrice} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Get a Local Price</p>
					</div>
					<div className='cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px] text-center '>
						<div className='lg:w-[300px]  xl:w-[400px] flex justify-center'>
							<img className=' w-[40px] sm:w-[50px]' src={easyBuy} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>AAP EasyBuy</p>
					</div>
					<div className='cursor-pointer hover:scale-110 transition duration-300 lg:w-[300px] xl:w-[400px] text-center '>
						<div className=' lg:w-[300px] xl:w-[400px] flex justify-center'>
							<img className=' w-[40px] sm:w-[50px]' src={testDrive} /></div>
						<p className='font-bold text-[15px] sm:text-[20px]'>Test Drive</p>
					</div>
				</div>

			</div> : null}
			{section === "inventoryBar" ? <div className="z-50 absolute top-[81px] w-screen h-[250px] rounded-b-[20px]  bg-white py-[20px]  ">
				<div className=''>
					<div className='w-screen font-bold text-[30px] text-center mb-[35px] border-b-[3px]'>Choose Your Brand</div>
					<div className='w-screen h-[100px] flex items-center justify-evenly'>
						<div>
							<img className=' w-[80px] md:w-[100px] cursor-pointer hover:scale-110 transition duration-300 ' src={audi} />
						</div>
						<div>
							<img className=' w-[80px] md:w-[100px] cursor-pointer hover:scale-110 transition duration-300' src={bmwMoono} />
						</div>
						<div>
							<img className='w-[80px] md:w-[100px]  cursor-pointer hover:scale-110 transition duration-300' src={kia} />
						</div>
						<div>
							<img className=' w-[80px] md:w-[100px]  cursor-pointer hover:scale-110 transition duration-300' src={hyundai} />
						</div>
						<div>
							<img className=' w-[80px] md:w-[100px] cursor-pointer hover:scale-110 transition duration-300' src={honda_black} />
						</div>
						<div>
							<img className='w-[80px] md:w-[100px] cursor-pointer hover:scale-110 transition duration-300' src={lambo} />
						</div>
					</div>
				</div>
			</div> : null}
		</div>
	);
};

export default Navbar;
