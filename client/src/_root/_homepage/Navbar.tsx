import { useState, useEffect, useRef } from "react";
import {
	logo,
	menu,
	close,
	logomer,
	logoaudi,
	logopos,
	logoroi,
	carnb1,
	carnb2,
	carnb3,
	VideoLogo,
} from "../../assets";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	const [toggle, setToggle] = useState(false);
	const [dropdownVe, setDropdownVe] = useState(false);
	const [dropdownSh, setDropdownSh] = useState(false);
	const [dropdownIn, setDropdownIn] = useState(false);

	/**code navbar event */
	const [selectedSection, setSelectedSection] = useState("");
	const handleNavClick = (section: string) => {
		setSelectedSection((prevSection) =>
			prevSection === section ? "" : section
		);
	};
	const section = selectedSection;

	const [isHidden, setIsHidden] = useState(false);
	let lastScrollTop = 0;

	useEffect(() => {
		const handleScroll = () => {
			let scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				setIsHidden(true); // Cuộn xuống, ẩn navbar
			} else {
				setIsHidden(false); // Cuộn lên, hiện navbar
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	//------------------------------
	//------------------------------

	// hiệu ứng cho video------------------------------
	const [selectedP, setSelectedP] = useState("");

	const handleMouseEnter = (section) => {
		setSelectedP(section);
	};

	const handleMouseLeave = () => {
		setSelectedP("");
	};

// hiệu hiển thị sau
const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState(null); // Thêm state để lưu trữ timer

  useEffect(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Kiểm tra xem thanh cuộn có di chuyển không
      if (newScrollTop !== scrollTop) {
        scrollTop = newScrollTop; // Cập nhật vị trí scroll

        // Nếu timer đang chạy, hãy xóa nó và tạo timer mới
        if (timer) {
          clearTimeout(timer);
        }

        const newTimer = setTimeout(() => setIsVisible(true), 100); // Timer 1 giây
        setTimer(newTimer); // Lưu timer mới
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Timer ban đầu 4 giây
    const initialTimer = setTimeout(() => setIsVisible(true), 3800);
    setTimer(initialTimer);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []); 


  //
useEffect(() => {
	const handleScroll = () => {
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > lastScrollTop) {
			videoRef.current.style.display = "none";
		} else {
			videoRef.current.style.display = "none";
		}
	};
	window.addEventListener("scroll", handleScroll);
	return () => {
		window.removeEventListener("scroll", handleScroll);
	};
}, []);
	return (
		<div className="z-50 fixed top-0 w-full font-poppins transition-transform duration-300">
			{isVisible && (
				<nav
					data-aos="fade"
					className="w-full pt-3 h-16 flex pb-2 bg-gray-950 md:px-12.5 z-50 relative"
				>
					<div className="absolute  left-1/2 transform -translate-x-1/2">
						<Link to="/">
							<img
								data-aos="fade-up"
								src={logo}
								alt="logo"
								className="md:w-[57px] w-[55px] md:h-[50px] h-[55px]"
							/>
						</Link>
					</div>
					<ul className="list-none sm:flex hidden justify-end items-center flex-1">
						<Link to="/SignIn">
							<li className="relative group pr-5">
								<FaUser className="text-white w-[27px] h-[27px] transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
							</li>
						</Link>
					</ul>
				</nav>
			)}
			{isVisible && (
				<div
					className={`z-50 top-0 w-full font-poppins transition-transform duration-300 ${
						isHidden ? "-translate-y-full" : "translate-y-0"
					}`}
				>
					<nav
						data-aos="fade-in"
						className="w-full pt-3 h-16 flex opacity-10 pb-2 text-white md:px-12.5 z-50 relative backdrop-filter backdrop-blur-3xl"
					>
						<ul className="list-none sm:flex gap-10 justify-center items-center flex-1">
							<li
								className={`cursor-pointer transition-opacity duration-300 ${
									selectedP && selectedP !== "vehicles"
										? "opacity-50"
										: "opacity-100"
								}`}
								onMouseEnter={() =>
									handleMouseEnter("vehicles")
								}
								onMouseLeave={handleMouseLeave}
							>
								<div
									onClick={() => {
										setDropdownVe(!dropdownVe);
										setDropdownSh(false);
										setDropdownIn(false);
									}}
									className="relative group flex transition ease-in-out delay-100  duration-300 select-none"
								>
									<p> Vehicles </p>
								</div>
							</li>
							<li
								className={`cursor-pointer transition-opacity duration-300 ${
									selectedP && selectedP !== "shopping"
										? "opacity-50"
										: "opacity-100"
								}`}
								onMouseEnter={() =>
									handleMouseEnter("shopping")
								}
								onMouseLeave={handleMouseLeave}
							>
								<div
									onClick={() => {
										setDropdownVe(!dropdownVe);
										setDropdownSh(false);
										setDropdownIn(false);
									}}
									className="relative group  flex transition ease-in-out delay-100  duration-300 select-none"
								>
									<p> Shopping Assist </p>
								</div>
							</li>
							<li
								className={`cursor-pointer transition-opacity duration-300 ${
									selectedP && selectedP !== "inventory"
										? "opacity-50"
										: "opacity-100"
								}`}
								onMouseEnter={() =>
									handleMouseEnter("inventory")
								}
								onMouseLeave={handleMouseLeave}
							>
								<div
									onClick={() => {
										setDropdownVe(!dropdownVe);
										setDropdownSh(false);
										setDropdownIn(false);
									}}
									className="relative group flex transition ease-in-out delay-100  duration-300 select-none"
								>
									<p> Inventory </p>
								</div>
							</li>
							<li
								className={`cursor-pointer transition-opacity duration-300 ${
									selectedP && selectedP !== "owners"
										? "opacity-50"
										: "opacity-100"
								}`}
								onMouseEnter={() => handleMouseEnter("owners")}
								onMouseLeave={handleMouseLeave}
							>
								<div
									onClick={() => {
										setDropdownVe(!dropdownVe);
										setDropdownSh(false);
										setDropdownIn(false);
									}}
									className="relative group flex transition ease-in-out delay-100  duration-300 select-none"
								>
									<Link
							to="/owners"

						

						>
									<p> Owners </p>
									</Link>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			)}
		
		</div>
	);
};

export default Navbar;
