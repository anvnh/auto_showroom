import { useState, useEffect, useRef } from "react";
import Bmw_view from "@/components/3d/Bmw_view";
import { VideoLogo, bannn } from "../../assets";
import { supra } from "@/assets/hplat_asset/video";
import { gsap } from "gsap";

import SplitType from "split-type";
import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { Car, Bmw, Honda, View } from "@/components/3d/child_component";
const Hero = () => {
	useEffect(() => {
		gsap.config({ nullTargetWarn: false });
	}, [])
	//----Parallax-------//
	// useEffect(() => {
	// 	let getRatio = (el) =>
	// 		window.innerHeight / (window.innerHeight + el.offsetHeight);
	// 	gsap.utils.toArray("section").forEach((section, i) => {
	// 		section.bg = section.querySelector(".bg");
	// 		gsap.fromTo(
	// 			section.bg,
	// 			{
	// 				backgroundPosition: () =>
	// 					i
	// 						? `50% ${-window.innerHeight * getRatio(section)}px`
	// 						: "50% 0px",
	// 			},
	// 			{
	// 				backgroundPosition: () =>
	// 					`50% ${window.innerHeight * (1 - getRatio(section))}px`,
	// 				ease: "none",
	// 				scrollTrigger: {
	// 					trigger: section,
	// 					start: () => (i ? "top bottom" : "top top"),
	// 					end: "bottom top",
	// 					scrub: true,
	// 					invalidateOnRefresh: true, // to make it responsive
	// 				},
	// 			}
	// 		);
	// 	});

	// 	return () => {
	// 		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	// 	};
	// }, []);


	// hiệu ứng cho video------------------------------
	const [selectedP, setSelectedP] = useState("");

	const handleMouseEnter = (section) => {
		setSelectedP(section);
	};

	const handleMouseLeave = () => {
		setSelectedP("");
	};
	const videoRef = useRef(null); // Ref để truy cập đối tượng video
	const [isVisible, setIsVisible] = useState(true); // State để theo dõi trạng thái hiển thị của video
	let lastScrollTop = 0;
	useEffect(() => {
		const animationDuration = 3800; // Thời gian hiệu ứng ban đầu
		const scrollAnimationDuration = animationDuration / 2; // Thời gian khi cuộn được cuộn

		const timer = setTimeout(() => {
			if (videoRef.current) {
				videoRef.current.style.transition = `transform ${scrollAnimationDuration / 1000
					}s, opacity ${scrollAnimationDuration / 1000}s`;
				videoRef.current.style.transform =
					"scale(0.75) translateY(-125%)";
				videoRef.current.style.opacity = "0";
			}
			setTimeout(() => setIsVisible(false), scrollAnimationDuration); // Cập nhật trạng thái sau khi hoàn tất hiệu ứng
		}, animationDuration); // Thực hiện hiệu ứng ban đầu

		return () => clearTimeout(timer);
	}, []);

	// Xử lý khi hoàn tất hiệu ứng thu nhỏ và mờ dần
	const handleTransitionEnd = () => {
		if (!isVisible && videoRef.current) {
			videoRef.current.style.display = "none"; // Ẩn video khi hoàn tất hiệu ứng
		}
	};
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
	// hiệu hiển thị sau
	const [isVisibles, setIsVisibles] = useState(false);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;

		const handleScroll = () => {
			const newScrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			// Kiểm tra xem thanh cuộn có di chuyển không
			if (newScrollTop !== scrollTop) {
				scrollTop = newScrollTop; // Cập nhật vị trí scroll

				// Nếu timer đang chạy, hãy xóa nó và tạo timer mới
				if (timer) {
					clearTimeout(timer);
				}

				const newTimer = setTimeout(() => setIsVisibles(true), 1000); // Timer 1 giây
				setTimer(newTimer); // Lưu timer mới
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Timer ban đầu 4 giây
		const initialTimer = setTimeout(() => setIsVisibles(true), 4200);
		setTimer(initialTimer);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, []);

	const [data, setData] = useState(1.5)
	const handleDataFromView = (data) => {
		setData(data)
	}
	useEffect(() => {

		handleDataFromView
		// window.addEventListener("resize",handleDataFromView)
	}, [])

	return (
		<div className="bg-black w-screen h-screen">


			{/* ---------------Parallax-------- */}
			<section className="z-10 relative h-screen w-screen flex justify-center items-center">
				<div className="bg absolute top-0 left-0 w-screen h-screen -z-10 object-cover bg-center bg-cover flex">
					{isVisible && (
						<div className=" absolute top-0 z-50 w-screen h-screen flex justify-center items-start">
							<video
								ref={videoRef}
								className="w-[800px] h-[900px] object-cover"
								muted
								autoPlay
								loop
								onTransitionEnd={handleTransitionEnd}
							>
								<source src={VideoLogo} type="video/mp4" />
							</video>
						</div>
					)}
					{isVisibles && (
						// <video
						// 	data-aos="fade-up"
						// 	className="w-full h-full object-cover"
						// 	muted
						// 	autoPlay
						// 	loop
						// >
						// 	<source src={supra} />
						// </video>
						<section className="w-full h-screen flex flex-col">
							<div className="w-full h-[40%] bg-neutral-950 text-neutral-100 flex flex-col justify-end items-center gap-y-[10px] xs:gap-y-[0px] lg:gap-y-[10px]  pb-[50px] xs:pb-[65px] xsm:pb-[30px] lg:pb-[50px]">
								<p className="w-[620px] h-[30px] xs:h-[70px] ss:h-[80px] xsm:h-[90px]  font-kanit font-bold text-[45px] xs:text-[54px] ss:text-[65px] xsm:text-[70px] lg:text-[80px]  border-t border-orange-300 border-none lg:rounded-t-[10px] flex justify-center gap-x-[15px] ss:gap-x-[22px] ">
									YOUR <span className="text-orange-400 ">PASSION</span>
								</p>
								<p className="h-[90px] font-kanit font-bold flex justify-center items-center gap-x-[15px] ss:gap-x-[20px] text-[45px] xs:text-[54px] ss:text-[65px] xsm:text-[70px] lg:text-[80px]  ">
									OUR <span>CARE</span>
									<span className=" border border-orange-300  flex justify-center items-center rounded-[35px] overflow-hidden">
										<video className="w-[100px] xs:w-[140px] overflow-hidden " loop autoPlay muted>
											<source src={supra} />
										</video>
									</span>
								</p>
							</div>
							<div className="w-full h-[60%] bg-neutral-950 flex">
								<Bmw_view />
							</div>
						</section >
					)}
				</div>
			</section>



			{/* <section className="z-40 relative h-screen w-screen flex justify-center items-center"  >
				<div
					style={{ backgroundImage: `url(${bannn})` }}
					className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
				<h1 className="text-center text-[100px] md:text-[150px] mlg:text-[190px] 
            font-syncopate font-bold   w-full z-10  text-white">APP</h1>
			</section> */}


		</div >
	);
};

export default Hero;
