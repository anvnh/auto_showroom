import { Navbar } from "../../../_root/_homepage";
import { useState, useEffect, useRef, } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";
//---------------------Asset-----------------------------
import {
  abstract1, abstract2,
} from "@/assets/background/index"
import {
  noithat, calang,
  a5_3,
  a5_5,
  a5_6,
  a5_10,
  a5_13,
  light2, backLight2, mam2,
  audi_thanXe, banner,
  road, audiold1, audiold4,
} from "@/assets/audiA5/couple";
import { sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10 } from "@/assets/audiA5/sportback";
import { audiA5_15, audiA5_9, } from "@/assets/audiA5";
//-------------------Component--------------
import "./Effect/style.css";
import { useFollowPointer } from "./Effect/pointer";
import Footer from "@/components/common/Footer";
import { Audi_s8_view } from "@/components/3d";

const AudiS6Limousin = () => {
  //cuon dau trang
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn đến tọa độ (0, 0) - tức là đầu trang
  }, []);

  //smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, [])

  //cursor effect
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  //paralax hero
  const hero_section1 = useRef(null)
  const sec1_txt = useRef(null)
  const hero_section3 = useRef(null)
  const sec3_img1 = useRef(null)
  const sec3_img2 = useRef(null)
  const hero_section4 = useRef(null)
  const sec4_text = useRef(null)
  const bg_sec1 = useRef(null)
  useEffect(() => {

    const tl = gsap.timeline()
    tl
      .set(sec1_txt.current, {
        opacity: 0,
        y: 500,
      })
      .to(sec1_txt.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
    ScrollTrigger.create({

      trigger: hero_section1.current,
      start: "top center",
      end: "bottom 20%",
      animation: tl, toggleActions: "restart none none reverse"
    }
    )


    const tl1 = gsap.timeline()
    tl1.set([sec3_img1.current, sec3_img2.current], {
      y: 500,
      opacity: 0,
    })
      .to([sec3_img1.current, sec3_img2.current], {
        y: 0,
        opacity: 1,
      })

    ScrollTrigger.create({
      trigger: hero_section3.current,
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      animation: tl1
    })



    const tl_sec4 = gsap.timeline()
    tl_sec4
      .set(sec4_text.current, {
        opacity: 0,
        y: 400
      })
      .to(sec4_text.current, {
        opacity: 1,
        y: 0
      })
    ScrollTrigger.create({
      trigger: hero_section4.current,
      start: "top 80%",
      end: "bottom center",
      //scrub:true,
      toggleActions: "restart none none reverse",
      animation: tl_sec4

    })


  }, [])
  //hero
  const container_hero = useRef(null)
  const hero_car = useRef(null)
  const hero_txt = useRef(null)
  const container_slogan = useRef(null);
  const slogan_text = useRef(null);

  useEffect(() => {

    const textTimeline = gsap.timeline();
    textTimeline
      .set(hero_txt.current, {
        opacity: 0,
        x: -200,
      })
      .to(hero_txt.current, {
        opacity: 1,
        duration: 1,
        x: 0,
      });


    if (container_slogan.current && slogan_text.current) {
      const sloganTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container_slogan.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        }
      }
      );
      sloganTimeline.set(slogan_text.current, {
        opacity: 0,
        x: -100,
      }).to(slogan_text.current, {
        x: 0,
        opacity: 1,
        duration: 1,
      });
    }


    //scroll char
    const split = document.querySelectorAll('.type')
    split.forEach((char, i) => {
      const text = new SplitType(char, { types: 'chars' })
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 0.2,
        },
        opacity: 0.2,
        stagger: 0.1
      })
    })
  }, []);

  //-----split1
  const container_split1 = useRef(null)
  const split1_h1 = useRef(null)
  const split1_p = useRef(null)
  const split1_img = useRef(null)
  useEffect(() => {


    if (container_split1.current && split1_img.current) {
      const imgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container_split1.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: true,
        }
      })
      imgTimeline.set(split1_img.current, {
        opacity: 0,
        y: 700,
      })
        .to(split1_img.current, {
          opacity: 1,
          id: "split",
          y: 0,
        })
    }
    //const id = gsap.getById("split") --test hàm gsap.getById
    if (split1_h1.current && split1_p.current && container_split1) {
      const tl = gsap.timeline();
      tl.set([split1_h1.current, split1_p.current], {
        opacity: 0,
        x: 1000,
      })
        .to(split1_h1.current, {
          opacity: 1,
          duration: 0.5,
          x: 0,
        })
        .to(
          split1_p.current,
          {
            opacity: 1,
            duration: 0.5,
            x: 0,
          },
          "-=0.3"
        );
      ScrollTrigger.create({
        trigger: container_split1.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none reverse",
        animation: tl,
      });
    }


  }, []);

  //split2
  const container_split2 = useRef(null)
  const split2_img = useRef(null)
  const split2_h1 = useRef(null)
  const split2_p = useRef(null)
  useEffect(() => {
    if (container_split2.current && split2_img.current) {
      const imgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container_split2.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: true,
        }
      })
      imgTimeline.set(split2_img.current, {
        opacity: 0,
        y: 700,
      })
        .to(split2_img.current, {
          opacity: 1,
          y: 0,
        })
    }

    if (split2_h1.current && split2_p.current && container_split2.current) {
      const tl = gsap.timeline();
      tl.set([split2_h1.current, split2_p.current], {
        opacity: 0,
        x: -1000,
      })
        .to(split2_h1.current, {
          opacity: 1,
          duration: 0.5,
          x: 0,
        })
        .to(
          split2_p.current,
          {
            opacity: 1,
            duration: 0.5,
            x: 0,
          },
          "-=0.2"
        );
      ScrollTrigger.create({
        trigger: container_split2.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none reverse",
        animation: tl,
      });
    }


  }, []);
  // ----------------text--------------
  const txt1 = useRef(null);
  const txt2 = useRef(null);
  const txt3 = useRef(null);
  const txtbox = useRef(null);
  useEffect(() => {
    if (txtbox.current && txt1.current && txt2.current && txt3.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: txtbox.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none none reverse  ",
        }
      });
      tl.set([txt1.current, txt2.current, txt3.current], {
        opacity: 0,
        x: -1000,
      })
        .to(
          txt1.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
          },
        )
        .to(
          txt2.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.5
          },
          "-=0.3"
        )
        .to(
          txt3.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
    }
  }, []);

  //-------------Hisstory ---------------
  const section1 = useRef(null)
  const sec1_img1 = useRef(null)
  const sec1_img2 = useRef(null)
  const sec1_text = useRef(null)
  const section2 = useRef(null)
  const sec2_img1 = useRef(null)
  const sec2_img2 = useRef(null)
  const section22 = useRef(null)
  const sec2_img22 = useRef(null)
  const sec2_img11 = useRef(null)
  useEffect(() => {
    if (sec1_img1.current && sec1_img2.current && section1.current) {
      const timeline_section1 = gsap.timeline()
      timeline_section1
        .set([sec1_img1.current, sec1_img2.current], {
          yPercent: 100,
          opacity: 0
        })
        .to([sec1_img1.current, sec1_img2.current], {
          yPercent: 0,
          opacity: 1,
        })
      ScrollTrigger.create({

        trigger: section1.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: timeline_section1

      })
    }
    if (sec1_text.current && section1.current) {
      const tl_sec1_text = gsap.timeline()
      tl_sec1_text.set(sec1_text.current, {
        opacity: 0,

      })
      tl_sec1_text.to(sec1_text.current, {
        opacity: 1,
        duration: 1,

      })
      ScrollTrigger.create({
        trigger: section1.current,
        start: "top center",
        end: "bottom bottom",
        animation: tl_sec1_text
      })
    }

    if (sec2_img1.current && sec2_img2.current && section2.current) {
      const tl_section2 = gsap.timeline()
      tl_section2
        .set([sec2_img1.current, sec2_img2.current], {
          yPercent: 100,
        })
        .to([sec2_img1.current, sec2_img2.current], {
          opacity: 1,
          yPercent: 0,
        })
      ScrollTrigger.create({
        trigger: section2.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        animation: tl_section2
      })
    }

    if (sec2_img11.current && sec2_img22.current && section22.current) {
      const timeline_section22 = gsap.timeline(
      )
      timeline_section22
        .set([sec2_img11.current, sec2_img22.current], {
          yPercent: 100,
        })
        .to([sec2_img11.current, sec2_img22.current], {
          opacity: 1,
          yPercent: 0,
        })
      ScrollTrigger.create({
        trigger: section22.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        animation: timeline_section22
      })
    }


    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Dọn dẹp khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Dọn dẹp ScrollTriggers
    };

  }, []);
  //-----------Pin Section------------------
  const container_pin = useRef(null)
  const box_left = useRef(null)
  const box_right = useRef(null)
  const right_section1 = useRef(null)
  const section1_img1 = useRef(null)
  const section1_img2 = useRef(null)
  const right_section2 = useRef(null)
  const section2_h1 = useRef(null)
  const section2_p = useRef(null)
  const right_section3 = useRef(null)
  const section3_img = useRef(null)
  const right_section4 = useRef(null)
  const right_section5 = useRef(null)
  const right_section6 = useRef(null)
  const right_section7 = useRef(null)
  useEffect(() => {
    if (container_pin.current) {
      ScrollTrigger.create({
        trigger: container_pin.current,
        start: "top top",
        end: "bottom bottom",
        pin: box_left.current,
      });
    }

    const section1_imgs = gsap.utils.toArray([section1_img1.current, section1_img2.current])
    if (right_section1.current) {
      gsap.set(section1_imgs, {
        opacity: 0,
      })
      gsap.to(section1_imgs, {
        opacity: 1,
        scrollTrigger: {
          trigger: right_section1.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true
        }
      })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: right_section2.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      }
    });
    const sec2_content = gsap.utils.toArray([section2_h1.current, section2_p.current])
    tl.set(sec2_content, {
      x: 500,
      opacity: 0,
    })
      .to(section2_h1.current, {
        x: 0,
        opacity: 1,
      })
      .to(
        section2_p.current,
        {
          x: 0,
          opacity: 1,
        },
        "-=0.4"
      );

    // right section 3  
    gsap.set(section3_img.current, {
      opacity: 0,
    })
    gsap.set(section3_img.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: right_section3.current,
        start: "top center",
        scrub: true,
        invalidateOnRefresh: true
      }
    })



  }, []);



  //--------parallax----------------------
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


  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {



    const handleResize = () => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(newSize);
      console.log(`Width: ${newSize.width}px, Height: ${newSize.height}px`);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "rad" },
  });

  return (

    <div className="">

      <div>
        <div className="flex ">
          <div className="w-full bg-primary">
            <Navbar />
          </div>
        </div>


        <section className="relative h-screen w-screen flex justify-center items-center">
          <div ref={bg_sec1} style={{ backgroundImage: `url(${banner})` }}
            className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover  
          "></div>
          <h1 className="text-center  xs:text-[105px] sm:text-[140px] md:text-[150px] lg:text-[190px] mlg:text-[225px] xl:text-[290px] font-kanit  w-full z-10 text-slate-50 font-bold  ">
            AUDI S6
          </h1>
          <p className="absolute font-syncopate md:text-[40px] lg:text-[50px] text-slate-700 top-[10%] left-[5%] hidden md:block">
            2024
          </p>
          <p className="absolute font-syncopate md:text-[40px] lg:text-[50px] text-slate-700 top-[10%] right-[5%] hidden md:block">
            VIETNAM
          </p>
          <img src={calang} className="absolute w-[150px] h-[70px] right-[5%] bottom-[5%] hidden mlg:block" />
          <img src={noithat} className="absolute w-[150px] h-[70px] left-[5%] bottom-[5%] hidden mlg:block" />
        </section>

        <section className="relative h-screen w-screen flex justify-center items-center bg-slate-50"  >
          <div
            ref={hero_section1}
            //style={{ backgroundImage: `url(${a5_6})` }}
            className="bg z-40 absolute top-0 left-0 w-screen h-screen object-cover
          bg-center bg-no-repeat  bg-cover flex justify-center items-center">
            <p ref={sec1_txt} className="w-full text-[30px] ss:text-[40px]  sm:text-[50px] md:text-[60px] xl:text-[80px] text-center font-kanit text-slate-700">
              Modern but elegant
            </p>
          </div>
        </section>

        <section className="relative h-screen w-screen flex justify-center items-center">
          <div
            ref={hero_section3}
            style={{ backgroundImage: `url(${sport3})` }} className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover 
          bg-center bg-no-repeat   flex justify-center items-center gap-x-[6%]">
            <p
              ref={sec3_img1}
              className="w-[25%] h-[70%] ">
              <img src={sport4} className="w-full h-full object-cover" />
            </p>
            <p
              ref={sec3_img2}
              className="w-[25%] h-[70%] ">
              <img src={sport5} className="w-full h-full object-cover" />
            </p>

          </div>


        </section>

        <section className="relative h-screen w-screen flex justify-center items-center">
          <div
            ref={hero_section4}
            style={{ backgroundImage: `url(${sport6})` }}
            className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover flex justify-center items-center ">
            <h1 ref={sec4_text} className="text-center  text-[70px] ss:text-[80px] sm:text-[115px] md:text-[130px] lg:text-[170px] mlg:text-[210px] xl:text-[250px] font-kanit  w-full z-10 text-slate-50 font-bold   ">
              Discover Now </h1>
          </div>
        </section>


        <div ref={container_hero} className="hero  relative w-screen h-screen">
          <div className="z-10 w-full absolute h-full bg-gradient-to-tr from-slate-950 opacity-50"></div>
          <img className="object-cover w-full h-screen bg-no-repeat opacity-90" src={abstract2} />
          <div
            ref={hero_txt}
            className="z-10 absolute top-[5%]  left-0  text-slate-200 mx-[20px] my-[20px] sm:my-[80px] sm:mx-[50px]"
          >
            <div className="font-bold font-syncopate text-[40px] md:text-[60px] ">
              2024 S6 Limousin
            </div>
            <div className="font-medium font-kanit text-[22px] md:text-[27px]">
              Starting at $58,000
            </div>
          </div>
          <img
            src={audi_thanXe}
            ref={hero_car}
            className=" absolute w-full top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]   object-cover"
          />
        </div>

        <div className="w-screen h-screen">
          <Audi_s8_view />
        </div>

        {/* -------slogan----------- */}
        <div
          ref={container_slogan}
          className=" w-screen h-[300px]  flex justify-center items-center bg-slate-100 "
        >
          <p ref={slogan_text} className="opacity-0 font-syncopate text-[24px] xs:text-[27px] sm:text-[32px] md:text-[40px] xl:text-[50px] text-slate-800">
            Are You Ready?
          </p>
        </div>


        {/*----------Split1------------------------ */}
        <div ref={container_split1} className="relative hidden  lg:flex  w-screen h-screen">
          <div className="h-full w-full flex flex-col justify-center items-center lg:w-[50%] bg-slate-900 ">
            <img ref={split1_img} src={sport10} className="opacity-0 lg:h-[400px] lg:w-[500px] mlg:h-screen mlg:w-screen object-cover" />
            {/* <img src={a5_1} className="lg:h-[400px] lg:w-[500px] mlg:h-screen mlg:w-screen object-cover"/> */}
          </div>
          <div className="h-full  w-full lg:w-[50%]  flex justify-center items-center bg-slate-100 ">
            <div className="w-full h-full mx-[5%] flex justify-center  flex-col text-slate-800">
              <h1
                ref={split1_h1}
                className="opacity-0 font-syncopate  text-center xl:text-start    lg:text-[30px] mlg:text-[33px] xl:text-[50px] font-medium"
              >
                POWER AND PRECISION
              </h1>
              <p ref={split1_p} className="opacity-0 font-kanit   text-center xl:text-start    mlg:text-[20px]  xl:text-[25px]">
                Audi's engines are renowned for their exceptional power delivery
                and precision engineering.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------Split2------------------- */}
        <div ref={container_split2} className="relative hidden lg:flex  w-screen h-screen text-slate-800">
          <div className="h-screen   w-[50%]  flex  justify-center items-center bg-slate-100 ">
            <div className="w-full mx-[5%]  h-full flex justify-center items-center flex-col  ">
              <h1
                ref={split2_h1}
                className="opacity-0 w-full   font-syncopate text-center xl:text-start    lg:text-[30px] mlg:text-[33px] xl:text-[42px] font-medium"
              >
                Quattro® All-Wheel Drive
              </h1>
              <p ref={split2_p} className="opacity-0 font-kanit  text-center xl:text-start    mlg:text-[20px]  xl:text-[25px]">
                Conquer any road, in any condition, with Audi's legendary
                quattro® all-wheel drive system.
              </p>
            </div>
          </div>
          <div className="h-screen w-[50%] flex justify-center items-center bg-slate-900">
            <img ref={split2_img} src={sport9} className="opacity-0 lg:h-[400px] lg:w-[500px] mlg:h-screen mlg:w-screen  object-cover" />
          </div>
        </div>
        {/* ------------------------mobile--------- */}
        <div className=" w-full h-full flex flex-col lg:hidden">
          <div className="w-screen h-[600px]">
            <img src={a5_10} className="w-screen h-full object-cover" />
          </div>
          <div className="w-screen flex flex-col justify-center items-center h-[300px]  bg-slate-100 text-slate-800 ">
            <h1
              className=" font-syncopate  text-[25px] ss:text-[35px]  "
            >
              POWER AND PRECISION
            </h1>
            <p className=" font-kanit  text-center text-[18px] xs:text-[20px] px-[7%] ">
              Audi's engines are renowned for their exceptional power delivery
              and precision engineering.
            </p>
          </div>
        </div>

        <div className="w-screen h-full flex lg:hidden flex-col ">
          <div className="w-screen h-[600px]">
            <img src={a5_13} className="w-full h-full object-cover" />
          </div>
          <div className="w-screen flex flex-col justify-center items-center h-[300px]  bg-slate-100 text-slate-800 ">
            <h1
              className=" font-syncopate  text-[20px] xs:text-[25px] ss:text-[35px]  "
            >
              Quattro® All-Wheel Drive
            </h1>
            <p className=" font-kanit  text-center text-[18px] xs:text-[20px] px-[7%] ">
              Conquer any road, in any condition, with Audi's legendary
              quattro® all-wheel drive system.
            </p>
          </div>
        </div>

        {/* ---------------------text effect------------------ */}
        <div className=" w-screen h-screen bg-primary relative">
          <p className="type text-[38px]  ss:text-[47px] sm:text-[50px] md:text-[55px]  lg:text-[62px]  mlg:text-[70px] text-slate-200 font-syncopate">
            Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8
            Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8
            Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi  A5 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8 Audi S8
          </p>
          <img src={audi_thanXe} className="absolute w-3/4 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] " />
        </div>

        {/* ---------------Parallax-------- */}
        <section className="z-50 relative h-screen w-screen flex justify-center items-center">
          <div style={{ backgroundImage: `url(${sport7})` }}
            className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover 
          "></div>
          <h1 className="text-center  text-[100px] md:text-[150px] mlg:text-[190px] font-kanit  w-full z-10 text-white   ">SPORTS </h1>
        </section>
        <section className="relative h-screen w-screen flex justify-center items-center"  >
          <div
            style={{ backgroundImage: `url(${sport8})` }}
            className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
          <h1 className="text-center text-[100px] md:text-[150px] mlg:text-[190px] 
            font-kanit   w-full z-10  text-white">MODERN</h1>
        </section>
        <section className="relative h-screen w-screen flex justify-center items-center">
          <div style={{ backgroundImage: `url(${a5_5})` }} className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
          <h1 className="text-center text-[100px] md:text-[150px] mlg:text-[190px] font-kanit   w-full z-10 text-white">LUXURY</h1>
        </section>
        <section className="relative h-screen w-screen flex justify-center items-center">
          <div style={{ backgroundImage: `url(${sport6})` }} className="bg  absolute top-0 left-0 w-screen h-screen -z-10 object-cover
          bg-center bg-no-repeat  bg-cover"></div>
          <h1 className="text-center text-[100px] md:text-[150px] mlg:text-[190px] font-kanit   w-full z-10  text-white">GDM</h1>
        </section>


        <div
          ref={txtbox}
          style={{
            backgroundImage: `url(${abstract1})`,
          }}
          className=" bg-slate-900  h-screen flex flex-col sm:flex-row items-center justify-center text-center w-screen gap-y-[20px] text-white bg-cover   "
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

        {/* ----------history  ----- */}
        <div
          ref={section1}
          className="w-screen h-screen  hidden sm:flex flex-col md:flex-row relative  bg-slate-100 text-slate-800 "
        >
          <div ref={sec1_text} className=" w-full md:w-[40%] px-[7%] md:px-[5%] h-[35%] md:h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px]  md:text-[70px] mlg:text-[100px] font-bold font-syncopate ">
              1995
            </div>
            <div className="h-[20%] w-full text-[20px] md:text-[22px] text-center font-playwrite " >
              Step inside an Audi and experience a world of refined luxury. Premium materials, meticulous craftsmanship
            </div>
          </div>
          <div className="w-full md:w-[60%] h-[65%] md:h-full relative">
            <img ref={sec1_img1} src={audiold1} className="opacity-0 absolute top-0 md:top-[15%] lg:top-[20%] mlg:top-[14%] left-[50px] w-[450px] md:w-[500px] mlg:w-[550px]   xl:w-[800px] h-[300px] md:h-[300px] lg:h-[320px] mlg:h-[370px] object-cover" />
            <img ref={sec1_img2} src={audiold4} className="opacity-0 absolute bottom-[12%]  md:bottom-[25%] lg:bottom-[15%] mlg:bottom-[10%] right-[50px] w-[450px] md:w-[500px] mlg:w-[550px]  xl:w-[800px] h-[300px] md:h-[300px] lg:h-[320px] mlg:h-[370px] object-cover" />
          </div>
        </div>
        {/* medium -> */}
        <div
          ref={section2}
          className="w-screen h-screen  hidden md:flex  relative bg-slate-100 text-slate-800   ">
          <div className="w-[60%] h-full relative">
            <img ref={sec2_img1} src={a5_6} className=" absolute top-[20%] md:top-[15%] lg:top-[20%] mlg:top-[14%] left-[50px] w-[350px] md:w-[500px] mlg:w-[550px]   xl:w-[800px] h-[250px] md:h-[300px] lg:h-[320px] mlg:h-[370px] object-cover" />
            <img ref={sec2_img2} src={a5_3} className=" absolute bottom-[25%]  md:bottom-[25%] lg:bottom-[15%] mlg:bottom-[10%] right-[50px] w-[350px] md:w-[500px] mlg:w-[550px]  xl:w-[800px] h-[250px] md:h-[300px] lg:h-[320px] mlg:h-[370px] object-cover" />
          </div>
          <div className="w-[40%] px-[5%] h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px]  md:text-[70px]  mlg:text-[100px] font-bold font-syncopate ">
              2025
            </div>
            <div className="h-[20%] w-full text-[20px] md:text-[22px] text-center font-playwrite  " >
              Ergonomic design create an inviting and comfortable environment for both drivers and passengers.
            </div>
          </div>
        </div>
        {/* sm->md */}
        <div
          ref={section22}
          className="w-screen h-screen  hidden sm:flex md:hidden flex-col  relative bg-slate-100 text-slate-800   "
        >
          <div className=" w-full md:w-[40%] px-[7%] h-[35%] md:h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px]  md:text-[80px] mlg:text-[100px] font-bold font-syncopate ">
              2025
            </div>
            <div className="h-[20%] w-full text-[20px] md:text-[25px] text-center font-playwrite " >
              Ergonomic design create an inviting and comfortable environment for both drivers and passengers.
            </div>
          </div>
          <div className="w-full md:w-[60%] h-[65%] md:h-full relative">
            <img ref={sec2_img11} src={a5_6} className="opacity-0 absolute top-0 md:top-[15%] lg:top-[14%] left-[50px] w-[450px] md:w-[500px] mlg:w-[550px]   xl:w-[800px] h-[300px] md:h-[300px] lg:h-[320px] mlg:h-[370px] object-cover" />
            <img ref={sec2_img22} src={a5_3} className="opacity-0 absolute bottom-[12%]  md:bottom-[25%] lg:bottom-[10%] right-[50px] w-[450px] md:w-[500px] mlg:w-[550px]  xl:w-[800px] h-[300px] md:h-[300px] lg:h-[320px] mlg:h-[370px] object-cover" />
          </div>
        </div>





        {/* -----------mobile------- history */}
        <div className="w-full h-screen flex sm:hidden flex-col bg-slate-100 text-slate-800 " >
          <div className="w-full px-[10%] h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px] font-bold font-syncopate ">
              1995
            </div>
            <div className="h-[20%] w-full text-[20px]  text-center font-playwrite " >
              Step inside an Audi and experience a world of refined luxury. Premium materials, meticulous craftsmanship
            </div>
          </div>
          <div className="w-full h-full relative bg-slate-500">
            <img src={audiold1} className="absolute  w-[350px]  h-[250px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  object-cover" />

          </div>
        </div>
        <div
          className="w-full h-screen flex sm:hidden flex-col  justify-center items-center bg-slate-100 text-slate-800"
        >
          <div className="w-full  px-[10%] h-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center h-[20%] w-full text-[60px]  font-bold font-syncopate ">
              2025
            </div>
            <div className="h-[20%] w-full text-[20px]  text-center font-playwrite " >
              Ergonomic design create an inviting and comfortable environment for both drivers and passengers.
            </div>
          </div>
          <div className="w-full  h-full relative bg-green-800">
            <img src={a5_6} className="absolute w-[350px]  h-[250px]  object-cover left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />

          </div>
        </div>


        {/* --------------desktop-----------Container-Pin-------- */}
        <div
          ref={container_pin}
          className="overflow-x-hidden  hidden md:flex  w-screen h-[400%] bg-slate-100 text-slate-800"
        >
          <div ref={box_left} className="w-[40%]  h-screen  ">
            <div className="h-full w-full flex flex-col justify-center items-center border-r border-r-slate-800 ">
              <p className="w-full h-[15%]  text-center text-[50px] md:text-[60px] mlg:text-[80px]  font-syncopate  ">
                NEW ERA
              </p>
              <p className="w-full h-[20%] px-[5%] text-center  text-[20px] md:text-[23px] mlg:text-[25px] font-kanit ">
                This suite of advanced safety technologies helps to prevent accidents and protect occupants in the event of a collision.
              </p>
            </div>
          </div>

          <div ref={box_right} className="h-[400%] w-[60%]  flex flex-col text-slate-800">
            <div ref={right_section1} className="w-full h-screen flex flex-row justify-evenly items-center">
              <img ref={section1_img1} src={audiA5_15} className="w-[25%] h-[80%] object-cover" />
              <img ref={section1_img2} src={audiA5_9} className="w-[25%] h-[80%] object-cover" />
            </div>
            <div
              ref={right_section2}
              className="w-full px-[20px] mlg:px-[100px] h-[600px] flex flex-col justify-center items-center "
            >
              <h1
                ref={section2_h1}
                className=" font-syncopate text-[30px] md:text-[40px] mlg:text-[50px]"
              >
                POWER AND DREAM
              </h1>
              <p
                ref={section2_p}
                className=" text-center text-[20px] md:text-[23px]  "
              >
                Immerse yourself in a digital world of information and
                entertainment with the Audi virtual cockpit
              </p>
            </div>
            <div
              ref={right_section3}
              className=" w-full h-[400px] md:h-[800px] flex justify-center items-center "
            >
              <img ref={section3_img} src={light2} className="w-[80%] object-cover"></img>
            </div>

            <div
              ref={right_section4}
              className=" w-full h-[400px] md:h-[600px] flex justify-center items-center "
            >
              <p className="font-syncopate text-[40px] md:text-[50px]">
                Back Light
              </p>
            </div>
            <div
              ref={right_section5}
              className=" w-full h-[400px] mlg:h-[600px] xl:h-[700px] flex justify-center items-center "
            >
              <img src={backLight2} className="w-[80%] h-[80%] object-cover" />
            </div>
            <div
              ref={right_section6}
              className="w-full h-[400px] md:h-[600px] flex justify-center items-center"
            >
              <p className="font-syncopate text-[40px] md:text-[50px]">
                Sharp Wheels
              </p>
            </div>
            <div
              ref={right_section7}
              className="w-full h-[400px] md:h-[600px] flex justify-center items-center"
            >
              <img src={mam2} className="w-[80%] h-[80%" />
            </div>
          </div>
        </div>

        {/* -----mobile pin */}
        <div className=" w-screen h-screen px-[10%] flex md:hidden flex-col  justify-center item-center gap-y-[40px] sm:gap-y-0 bg-slate-100 text-slate-800">
          <h1 className="w-full text-[50px] font-syncopate text-center" >
            NEW ERA
          </h1>
          <p className="w-full text-[25px] sm:text-[28px] font-thin text-center">
            This suite of advanced safety technologies helps to prevent accidents and protect occupants in the event of a collision.
          </p>
        </div>

        <div className=" flex md:hidden justify-center items-center w-screen h-screen gap-x-[5%]    ">
          <img src={audiA5_15} className="object-cover w-[170px] xs:w-[200px] sm:w-[270px] h-[60%] xs:h-[70%]" />
          <img src={audiA5_9} className="object-cover w-[170px] xs:w-[200px]  sm:w-[270px] h-[60%] xs:h-[70%]" />
        </div>

        <div className="w-screen h-screen flex md:hidden flex-col justify-center items-center bg-slate-900">
          <h1 className="w-full h-[15%] text-[40px] text-center font-syncopate  text-white">Back Light</h1>
          <img src={backLight2} className="w-[75%] h-[40%] xs:w-[70%] xs:h-[50%] object-cover" />
        </div>

        <div className="w-screen h-screen flex md:hidden flex-col justify-center items-center">
          <h1 className="w-full h-[15%] text-[40px] text-center font-syncopate ">Sharp Wheels</h1>
          <img src={mam2} className="w-[75%] h-[40%] xs:w-[70%] xs:h-[50%] object-cover" />
        </div>

        <div className="bg-primary">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default AudiS6Limousin;
