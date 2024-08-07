import { useState, useEffect, useRef } from "react";

import { VideoLogo, bannn } from "../../assets";
import { supra } from "@/assets/hplat_asset/video";
import { gsap } from "gsap";

import SplitType from "split-type";
import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { Car, Bmw, Honda, View } from "@/components/3d";
const Hero = () => {
	// //----Parallax-------//
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

	// //text effect
	// const canvasRef = useRef(null);

	// useEffect(() => {
	// 	const sketch = (p) => {
	// 		let canvas;
	// 		const calculateFontSize = () => {
	// 			const baseFontSize = 32; // Kích thước font cơ bản
	// 			const scaleFactor = p.windowWidth / 300;
	// 			return baseFontSize * scaleFactor;
	// 		};
	// 		p.setup = () => {
	// 			canvas = p.createCanvas(p.windowWidth, p.windowHeight);
	// 			canvas.parent(canvasRef.current);
	// 			p.textAlign(p.CENTER, p.CENTER);
	// 			p.textFont("Kanit");
	// 			p.textSize(calculateFontSize());
	// 		};

	// 		p.draw = () => {
	// 			p.noFill(); // Loại bỏ phần tô bên trong của chữ
	// 			p.stroke("#FFFFFF"); // Thiết lập màu đường viền là màu đen
	// 			p.strokeWeight(2); // Thiết lập độ dày của đường viền
	// 			p.text("AAP", p.width / 2, p.height / 2);
	// 		};
	// 		p.windowResized = () => {
	// 			p.resizeCanvas(p.windowWidth, p.windowHeight);
	// 		};
	// 	};
	// }, []);

	// useEffect(() => {
	// 	const split = document.querySelectorAll(".type");
	// 	split.forEach((char, i) => {
	// 		const text = new SplitType(char, { types: "chars" });
	// 		gsap.from(text.chars, {
	// 			scrollTrigger: {
	// 				trigger: char,
	// 				start: "top 80%",
	// 				end: "bottom 30%",
	// 				scrub: 0.2,
	// 			},
	// 			opacity: 0.2,
	// 			stagger: 0.1,
	// 		});
	// 	});
	// }, []);

	// gsap.config({
	// 	autoSleep: 60,
	// 	force3D: false,
	// 	nullTargetWarn: false,
	// 	units: { left: "%", top: "%", rotation: "rad" },
	// });

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
	// herro
	useEffect(() => {
		const tl = gsap.timeline()
		tl.to(".overley", {
			delay: 0.5,
			yPercent: -100,
			duration: 1,
			ease: "circ.inOut"
		})
			.from(".txt1", {
				yPercent: 100,
				duration: 0.5
			})
			.from(".txt2", {
				yPercent: 100,
				duration: 0.5
			}, "-=0.5")
			.from(".txt3", {
				yPercent: 100,
				duration: 0.5
			}, "-=0.5")
			.from(".btn2", {
				xPercent: -300,
				duration: 0.5
			}, "-=0.5")
			.from(".btn1", {
				xPercent: -300,
				duration: 0.5
			}, "-=0.5")
	}, [])
	return (
		<div className={`  `}>
			{/* ---------------Parallax-------- */}
			<section className="z-40 relative h-screen w-screen flex justify-center items-center">
				<div className="bg absolute top-0 left-0 w-screen h-screen -z-10 object-cover bg-center bg-cover flex">
					{isVisible && (
						<div className="relative z-50 w-screen h-screen flex justify-center items-start">
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
						<video
							data-aos="fade-up"
							className="w-full h-full object-cover"
							muted
							autoPlay
							loop
						>
							<source src={supra} />
						</video>
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
		</div>
	);
};

export default Hero;
