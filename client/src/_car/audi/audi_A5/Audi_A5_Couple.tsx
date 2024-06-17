import { Navbar } from "../../../_root/_homepage";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";
//---------------------Asset-----------------------------
import { bg_1 } from "@/assets/hplat_asset/img/background";
import {
  banner,
  a5_1,
  a5_2,
  a5_3,
  a5_4,
  a5_5,
  a5_6,
  a5_7,
  a5_8,
  a5_9,
  a5_10,
  a5_11,
  a5_12,
  a5_13,
  a5_14,
  mam1,
  backLight,
  light,
  noiThat1,
  power,
  a5rmbg,
  a5black,
  audiMini,
  inside2,
  audi_banhXeSau,
  audi_banhXeTruoc,
  audi_thanXe,
  road,
} from "@/assets/audiA5/couple";
import { audiA5_15, audiA5_1 } from "@/assets/audiA5";
import "./style.css";
//-------------------Component--------------
import { Footer } from "@/_root/_homepage";
import { useFollowPointer } from "./pointer";





const audi_A5_Couple = () => {
  //cuon dau trang
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn đến tọa độ (0, 0) - tức là đầu trang
  }, []);

  //smooth scroll
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  //cursor effect
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  //hero
  const container_hero = useRef(null)
  const audi_hero = useRef(null);
  const hero_txt = useRef(null);
  useEffect(() => {
    const text = gsap.timeline();
    text
      .set(hero_txt.current, {
        opacity: 0,
        x: -200,
      })
      .to(hero_txt.current, {
        opacity: 1,
        duration: 1,
        x: 0,
      });

    const tl = gsap.timeline();
    tl.set(audi_hero.current, {
      xPercent: -50,
    }).to(audi_hero.current, {
      xPercent: 10,
      duration: 1,
    });
    const tl3 = gsap.timeline();
    tl3
      .set(audi_hero.current, {
        xPercent: 10,
      })
      .to(audi_hero.current, {
        xPercent: 100,
        opacity: 0.1,
        duration: 2,
      });
    ScrollTrigger.create({
      trigger: container_hero.current,
      start: "center 40%",
      animation: tl3,
      scrub: true,
    });
  }, []);

  const conAudiMn = useRef(null);
  const conAudiMnTxt = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(conAudiMnTxt.current, {
      opacity: 0,
      x: -100,
    }).to(conAudiMnTxt.current, {
      x: 0,
      opacity: 1,
      duration: 1,
    });
    ScrollTrigger.create({
      trigger: conAudiMn.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
      animation: tl,
    });
  }, []);

  const con1 = useRef(null);
  const con1_h1 = useRef(null);
  const con1_p = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([con1_h1.current, con1_p.current], {
      opacity: 0,
      x: 1000,
    })
      .to(con1_h1.current, {
        opacity: 1,
        duration: 0.7,
        x: 0,
      })
      .to(
        con1_p.current,
        {
          opacity: 1,
          duration: 0.7,
          x: 0,
        },
        0.5
      );
    ScrollTrigger.create({
      trigger: con1.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse",
      animation: tl,
    });
  }, []);

  const con2 = useRef(null);
  const con2_h1 = useRef(null);
  const con2_p = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([con2_h1.current, con2_p.current], {
      opacity: 0,
      x: -1000,
    })
      .to(con2_h1.current, {
        opacity: 1,
        duration: 0.7,
        x: 0,
      })
      .to(
        con2_p.current,
        {
          opacity: 1,
          duration: 0.7,
          x: 0,
        },
        0.7
      );
    ScrollTrigger.create({
      trigger: con2.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse",
      animation: tl,
    });
  }, []);

  const txt1 = useRef(null);
  const txt2 = useRef(null);
  const txt3 = useRef(null);
  const txtbox = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([txt1.current, txt2.current, txt3.current], {
      opacity: 0,
      x: -1000,
    })
      .to(
        txt1.current,
        {
          opacity: 1,
          x: 0,
        },
        0.6
      )
      .to(
        txt2.current,
        {
          opacity: 1,
          x: 0,
        },
        0.4
      )
      .to(
        txt3.current,
        {
          opacity: 1,
          x: 0,
        },
        0.2
      );
    ScrollTrigger.create({
      trigger: txtbox.current,
      start: "top center",
      end: "bottom center",
      animation: tl,
      toggleActions: "play none none none  ",
    });
  }, []);

  //-----------Pin Section------------------
  const container_pin = useRef(null);
  const box_left = useRef(null);
  const box_right = useRef(null);
  const box_right_section1 = useRef(null);
  const box_right_section1_h1 = useRef(null);
  const box_right_section1_p = useRef(null);
  const box_right_section2 = useRef(null);
  const box_right_section3 = useRef(null);
  const box_right_section4 = useRef(null);
  useEffect(()=>{
        //box right section1
        const tl = gsap.timeline();
        tl.set([box_right_section1_h1.current, box_right_section1_p.current], {
          x: 1000,
          opacity: 0,
        })
          .to(box_right_section1_h1.current, {
            x: 0,
            opacity: 1,
            duration: 0.7,
          })
          .to(
            box_right_section1_p.current,
            {
              x: 0,
              opacity: 1,
              duration: 1,
            },
            "-=0.5"
          );
        ScrollTrigger.create({
          trigger: box_right_section1.current,
          start: "top top",
          end: "bottom center",
          toggleActions: "restart none none none",
          animation: tl,
        });
    
        gsap.to(box_left.current, {
          xPercent: 100,
          duration: 1,
          scrollTrigger: {
            trigger: box_right_section2.current,
            start: "top top",
            end: "bottom  bottom",
            scrub: true,
          },
        });
         return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
  };
  },[])
  //-------------Horizontal scroll---------------
  const container_horizon = useRef(null);
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  useEffect(() => {
    let sections = gsap.utils.toArray([sec1, sec2]);
    let scrollTween = gsap.to(container_horizon.current, {
      xPercent: -100 * (sections.length - 1),
      x: () => window.innerWidth, //Hàm này được gọi mỗi khi cuộn để đảm bảo phần tử container_horizon luôn được căn chỉnh với cạnh trái của viewport (cửa sổ trình duyệt).
      scrollTrigger: {
        trigger: container_horizon.current,
        scrub: 0.5,
        pin: true,
      },
    });

    ScrollTrigger.create({
      trigger: container_pin.current,
      start: "top top",
      end: "bottom bottom",
      pin: box_left.current,
      markers: true,
    });


  }, []);




	useEffect(() => {
		window.scrollTo(0, 0); // Cuộn đến tọa độ (0, 0) - tức là đầu trang
	}, []);

  return (
    <div className="">
      <motion.div
        ref={ref}
        style={{ x, y }}
        className="z-50 cursor fixed top-1/2  left-1/2  bg-purple-700 opacity-50  border-slate-700 h-[100px] w-[100px] rounded-[50%]"
      />
      <div>
        <div className="flex ">
          <div className="w-full bg-primary">
            <Navbar />
          </div>
        </div>

        <div ref={container_hero} className="hero relative w-screen h-screen">
          <img className="object-cover w-full h-screen" src={road} />
          <div
            ref={hero_txt}
            className="absolute top-[5%] left-0  text-slate-200 mx-[20px] my-[20px] sm:my-[80px] sm:mx-[50px]"
          >
            <div className="font-bold font-syncopate text-[40px] lg:text-[60px] ">
              2024 A5 Coupe
            </div>
            <div className="font-medium font-kanit lg:text-[27px]">
              Starting at $48,000
            </div>
          </div>
          <img
            ref={audi_hero}
            src={audi_thanXe}
            className="absolute w-[1500px] bottom-[10%] left-0  object-cover"
          />
        </div>

        <div
          ref={conAudiMn}
          className=" w-screen h-[300px] relative flex justify-center items-center "
        >
          <p ref={conAudiMnTxt} className="font-syncopate text-[50px]">
            DO YOU WANT TO RIDE?
          </p>
        </div>

        <div ref={con1} className="relative flex w-screen h-screen">
          <div className="h-screen w-1/2 bg-yellow-200">
            <img src={a5_10} className="h-screen w-screen object-cover" />
          </div>
          <div className="h-screen w-1/2 flex justify-center items-center bg-slate-100 ">
            <div className="w-[700px] h-[500px] flex justify-center items-center flex-col">
              <h1
                ref={con1_h1}
                className="opacity-0 font-syncopate text-center text-[55px] font-medium"
              >
                POWER AND PRECISION
              </h1>
              <p ref={con1_p} className=" opacity-0 font-kanit text-center">
                Audi's engines are renowned for their exceptional power delivery
                and precision engineering. Experience the thrill of TFSI® and
                TDI® technology, delivering exhilarating performance while
                maintaining impressive fuel efficiency.
              </p>
            </div>
          </div>
        </div>

        <div ref={con2} className="relative flex w-screen h-screen">
          <div className="h-screen w-1/2 flex justify-center items-center bg-slate-100 ">
            <div className="w-[700px] h-[500px] flex justify-center items-center flex-col  ">
              <h1
                ref={con2_h1}
                className="opacity-0 font-syncopate text-center text-[55px] font-medium"
              >
                Quattro® All-Wheel Drive
              </h1>
              <p ref={con2_p} className="opacity-0 font-kanit text-center">
                Conquer any road, in any condition, with Audi's legendary
                quattro® all-wheel drive system. This intelligent technology
                provides unmatched traction, stability, and control, ensuring a
                confident and dynamic driving experience.
              </p>
            </div>
          </div>
          <div className="h-screen w-1/2 bg-yellow-200">
            <img src={a5_13} className="h-screen w-screen object-cover" />
          </div>
        </div>

        <div
          ref={txtbox}
          style={{
            backgroundImage: `url(${bg_1})`,
          }}
          className="bg-primary  h-screen flex flex-col sm:flex-row items-center justify-center text-center w-screen gap-y-[20px] text-white "
        >
          <div
            ref={txt1}
            className="z-10 w-[300px] pb-[20px]  border-b sm:border-b-0 border-slate-600 sm:border-r  opacity-0"
          >
            <div className="lg:text-[18px]">EPA-estimated fuel economy</div>
            <div className="text-[30px] lg:text-[35px]">27 MPG</div>
            <div className="lg:text-[18px]">View key MPG info</div>
          </div>
          <div
            ref={txt2}
            className="z-10 w-[300px] pb-[20px] border-b sm:border-b-0 border-slate-600 sm:border-r  opacity-0"
          >
            <div className="lg:text-[18px]">Transmission</div>
            <div className="text-[30px] lg:text-[35px] ">7-speed</div>
            <div className="lg:text-[18px]">S tronic</div>
          </div>
          <div ref={txt3} className="z-10 w-[300px]   opacity-0">
            <div className="lg:text-[18px]">Matrix-design</div>
            <div className="text-[30px] lg:text-[35px]">LED headlights</div>
            <div className="lg:text-[18px]">Full LED</div>
          </div>
        </div>
        {/* Container-Horizontal */}
        <div
          ref={container_horizon}
          className="w-[200vw] flex flex-nowrap relative  h-screen bg-red-500"
        >
          <div
            ref={sec1}
            className="w-screen h-screen flex justify-center items-center bg-green-500"
          >
            <p className="text-[100px]">Section1</p>
          </div>
          <div
            ref={sec2}
            className="w-screen h-screen flex justify-center items-center bg-yellow-500"
          >
            <p className="text-[100px]">SECTION2</p>
          </div>
        </div>
        {/* Container-Pin */}
        <div
          ref={container_pin}
          className="overflow-x-hidden flex  w-screen h-[300%]"
        >
          <div ref={box_left} className="w-1/2  h-screen bg-red-500  ">
            <img src={audiA5_1} className="w-full h-screen object-cover" />
          </div>

          <div ref={box_right} className="h-[400vh] w-1/2  flex flex-col">
            <div
              ref={box_right_section1}
              className="w-full h-screen flex flex-col justify-center items-center "
            >
              <h1
                ref={box_right_section1_h1}
                className=" font-syncopate text-[50px]"
              >
                POWER AND DREAM
              </h1>
              <p
                ref={box_right_section1_p}
                className=" text-center text-[20px] "
              >
                Immerse yourself in a digital world of information and
                entertainment with the Audi virtual cockpit
              </p>
            </div>
            <div
              ref={box_right_section2}
              className=" w-full h-screen bg-red-600"
            >
              <img src={a5_2} className="w-full h-full object-cover"></img>
            </div>
            <div
              ref={box_right_section3}
              className=" w-full h-screen bg-red-700"
            >
              <img src={a5_1} className="w-full h-full object-cover" />
            </div>
            <div
              ref={box_right_section4}
              className=" w-full h-screen bg-red-800"
            ></div>
          </div>
        </div>
        <div className="w-screen h-screen bg-black"></div>

        <div className="bg-primary">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default audi_A5_Couple;