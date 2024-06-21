import { useState, useEffect , useRef} from 'react';
//assets
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { 
    hero_1, hero_2, hero_3, hero_4, hero_5, hero_6,
} from '../../assets';
import {  supra } from '@/assets/hplat_asset/video';
//library
import {gsap} from "gsap"
import p5 from 'p5';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
	const slides = [
		{ url: hero_1, },
		{ url: hero_2, },
		{ url: hero_3, },
		{ url: hero_4, },
		{ url: hero_5, },
		{ url: hero_6, },
	];
	const [currentIndex, setCurrentIndex] = useState(0);

		const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
		setCurrentIndex((prev) => (prev + 1) % slides.length);
		}, 12000); // Change slide every 12 seconds

		return () => clearInterval(interval);
	}, [slides.length]);
	
	//----Parallax-------//
	useEffect(() => {
    let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");
      gsap.fromTo(section.bg, {
        backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => i ? "top bottom" : "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true // to make it responsive
        }
      });

     });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])


  //text effect
   const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let canvas;
		  const calculateFontSize = () => {
         const baseFontSize = 32; // Kích thước font cơ bản
        const scaleFactor = p.windowWidth / 300;
        return baseFontSize * scaleFactor;
      };
      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(canvasRef.current);
        p.textAlign(p.CENTER, p.CENTER);
		p.textFont('Kanit')
          p.textSize(calculateFontSize());
      };

      p.draw = () => {
        p.noFill(); // Loại bỏ phần tô bên trong của chữ
        p.stroke('#FFFFFF'); // Thiết lập màu đường viền là màu đen
        p.strokeWeight(2); // Thiết lập độ dày của đường viền
        p.text('AAP', p.width / 2, p.height / 2);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);
	
	return (
		
		<div className={`  `}>
			{/* ---------------Parallax-------- */}
        <section className="z-40 relative h-screen w-screen flex justify-center items-center">
          <div 
            className="bg   absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover 
          ">
			<video className='w-full h-full object-cover' muted autoPlay loop>
				<source src={supra}/>
			</video>
		  </div>
          <div ref={canvasRef} className="text-center top-0 left-0  absolute text-[100px] md:text-[150px] mlg:text-[250px] font-embed font-bold  h-full w-full z-10 text-white   ">
			</div>
        </section>
        <section className="z-40 relative h-screen w-screen flex justify-center items-center"  >
          <div
            style={{ backgroundImage: `url(${hero_2})` }}
            className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
          <h1 className="text-center text-[100px] md:text-[150px] mlg:text-[190px] 
            font-kanit   w-full z-10  text-white">QUALITY</h1>
        </section>
        <section className="z-40 relative h-screen w-screen flex justify-center items-center">
          <div style={{ backgroundImage: `url(${hero_3})` }} className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
          <h1 className="text-center text-[100px] md:text-[150px] mlg:text-[190px] font-kanit   w-full z-10 text-white">
			Luxury
			</h1>
        </section>
        <section className="z-40 relative h-screen w-screen flex justify-center items-center">
          <div style={{ backgroundImage: `url(${hero_4})` }} className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
          <h1 className="text-center  text-[60px] sm:text-[80px] md:text-[150px] mlg:text-[190px] font-kanit   w-full z-10  text-white">
			Discovery Now
		  </h1>
        </section>


			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full relative h-[800px] bg-center bg-cover duration-500 z-0'
			></div>
			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-150'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-150'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2 z-0 relative'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'
					>
						<RxDotFilled />
					</div>
				))}
			</div>	
			
		</div>
	)
};


export default Hero

