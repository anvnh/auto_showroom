import { Navbar } from "../../../_root/_homepage"
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {motion} from "framer-motion"
gsap.registerPlugin(ScrollTrigger);
import "./a5couple.css"
import { bg_1 } from "@/assets/hplat_asset/img/background";
import {
  banner, a5_1, a5_2, a5_3, a5_4, a5_5, a5_6, a5_7, a5_8, a5_9, a5_10, a5_11, a5_12, a5_13, a5_14,
  mam1, backLight, light, noiThat1, power, a5rmbg, a5black, audiMini,
  inside2, audi_banhXeSau, audi_banhXeTruoc, audi_thanXe, road,
} from "@/assets/audiA5/couple"
import { Footer } from "@/_root/_homepage";

import { useFollowPointer } from "./pointer";


const audi_A5_Couple = () => {  
    const ref = useRef(null);
   const { x, y } = useFollowPointer(ref);
  
  const hero_section = useRef(null)
  const audi_hero = useRef(null);
  const hero_txt = useRef(null);
  useEffect(() => {
    const tl2 = gsap.timeline();
    tl2
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
      x: -500,
    }).to(audi_hero.current, {
      xPercent: 50,
      opacity: 0.8,
      duration: 0.9,
    });

    
  }, []); 


  const conAudiMn = useRef(null)
  const conAudiMnTxt = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline()
    tl 
      .set(conAudiMnTxt.current,{
        opacity:0,
        x:-100
      }) 
      .to(conAudiMnTxt.current,{
        x:0,
        opacity:1,
        duration:1
      },)
    ScrollTrigger.create({
      trigger: conAudiMn.current,
      start: "top center",
      end:  "bottom center",
      toggleActions:"play none none none",
      animation: tl,
    })
  },[]) 


  const con1 = useRef(null)
  const con1_h1 = useRef(null)
  const con1_p = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline()
    tl 
      .set([con1_h1.current, con1_p.current],{
        opacity:0,
        x:1000
      })
      .to(con1_h1.current,{
        opacity:1,
        duration:0.7,
        x:0
      })
      .to(con1_p.current,{
        opacity:1,
        duration:0.7,
        x:0
      },0.5)
    ScrollTrigger.create({
      trigger: con1.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse",
      markers:true,
      animation:tl
    })
  },[])

  

  const con2 =  useRef(null)
  const con2_h1 = useRef(null)
  const con2_p = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline()
    tl 
      .set([con2_h1.current, con2_p.current],{
        opacity:0,
        x:-1000
      })
      .to(con2_h1.current,{
        opacity:1,
        duration:0.7,
        x:0
      })
      .to(con2_p.current,{
        opacity:1,
        duration:0.7,
        x:0
      },0.7)
    ScrollTrigger.create({
      trigger: con2.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse",
      markers:true,
      animation:tl
    })
  },[])

const txt1 = useRef(null)
  const txt2 = useRef(null)
  const txt3 = useRef(null)
  const txtbox = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline() 
    tl  
      .set([txt1.current, txt2.current, txt3.current],{
        opacity:0,
        x:-1000
      })
      .to(txt1.current,{
        opacity:1,
        x:0

      }, 0.2)
      .to(txt2.current,{
        opacity:1,
        x:0
      },0.4)
      .to(txt3.current,{
        opacity:1,
        x:0
      },0.6)
    ScrollTrigger.create({
        trigger: txtbox.current,
        start: "top center",
        end: "bottom center",
        animation:tl,
        markers:true,
        toggleActions:"restart reverse restart reverse  "
      })
  },[])


  return (
    <div className="">
      <motion.div  ref={ref}  style={{ x, y }}   className="z-50 cursor fixed top-0  left-0  bg-purple-700 opacity-50  border-slate-700 h-[200px] w-[200px] border rounded-[50%]"/>
      <div className="">
        <div className="flex items-start justify-center">
          <div className="w-screen bg-primary">
            <Navbar />
          </div>
        </div>
        
        <div ref={hero_section} className="hero relative">
          <img className="object-cover w-screen h-screen" src={road} />
          <div ref={hero_txt}  className="absolute z-10 top-[5%]  text-slate-200 mx-[20px] my-[20px] sm:my-[80px] sm:mx-[50px]">
            <div className="font-bold font-syncopate text-[40px] lg:text-[60px] ">
              2024 A5 Coupe
            </div>
            <div className="font-medium font-kanit lg:text-[27px]">
              Starting at $48,000
            </div>
          </div>
          <img ref={audi_hero} src={audi_thanXe} className="absolute w-[1500px] bottom-[10%] left-0  object-cover"/>
          <div className="bg-gradient-to-b from-slate-700   absolute top-0 left-0 h-[70%] w-screen backdrop-blur-md opacity-40  "></div>
          <div className="bg-gradient-to-t from-slate-600   absolute bottom-0 left-0 h-[30%] w-screen backdrop-blur-sm opacity-40  z-50"></div> 
        </div>

        <div ref={conAudiMn} className=" w-screen h-[300px] relative flex justify-center items-center ">
          <p ref={conAudiMnTxt} className="font-kanit text-[50px]">DO YOU WANT TO RIDE?</p>  
        </div>

        <div ref={con1} className="relative flex w-screen h-screen">
          <div className="h-screen w-1/2 bg-yellow-200">
            <img src={a5_10} className="h-screen w-screen object-cover"/>
          </div>
          <div className="h-screen w-1/2 flex justify-center items-center bg-slate-100 ">
              <div className="w-[700px] h-[500px] flex justify-center items-center flex-col  border-red-500 border-2">
                <h1 ref={con1_h1} className="opacity-0 font-syncopate text-center text-[55px] font-medium">POWER AND PRECISION</h1>
                <p ref={con1_p} className=" opacity-0 font-kanit text-center">Audi's engines are renowned for their exceptional power delivery and precision engineering. Experience the thrill of TFSI® and TDI® technology, delivering exhilarating performance while maintaining impressive fuel efficiency.
                </p>
              </div>
          </div>
        </div>

        <div ref={con2} className="relative flex w-screen h-screen"> 
          <div className="h-screen w-1/2 flex justify-center items-center bg-slate-100 ">
              <div className="w-[700px] h-[500px] flex justify-center items-center flex-col  border-red-500 border-2">
                <h1 ref={con2_h1} className="opacity-0 font-syncopate text-center text-[55px] font-medium">Quattro® All-Wheel Drive</h1>
                <p ref={con2_p} className="opacity-0 font-kanit text-center">Conquer any road, in any condition, with Audi's legendary quattro® all-wheel drive system. This intelligent technology provides unmatched traction, stability, and control, ensuring a confident and dynamic driving experience.
                </p>
              </div>
          </div>
          <div className="h-screen w-1/2 bg-yellow-200">
            <img src={a5_13} className="h-screen w-screen object-cover"/>
          </div>
        </div>

        <div ref={txtbox} style={{
          backgroundImage: `url(${bg_1})`
        }} className="bg-primary  h-screen flex flex-col sm:flex-row items-center justify-center text-center w-screen gap-y-[20px] text-white " >
          <div ref={txt1} className="z-10 w-[300px] pb-[20px]  border-b sm:border-b-0 border-slate-600 sm:border-r">
            <div className="lg:text-[18px]">EPA-estimated fuel economy</div>
            <div className="text-[30px] lg:text-[35px]">27 MPG</div>
            <div className="lg:text-[18px]">View key MPG info</div>
          </div>
          <div ref={txt2} className="z-10 w-[300px] pb-[20px] border-b sm:border-b-0 border-slate-600 sm:border-r">
            <div className="lg:text-[18px]">Transmission</div>
            <div className="text-[30px] lg:text-[35px] ">7-speed</div>
            <div className="lg:text-[18px]">S tronic</div>
          </div>
          <div ref={txt3} className="z-10 w-[300px]   ">
            <div className="lg:text-[18px]">Matrix-design</div>
            <div className="text-[30px] lg:text-[35px]">LED headlights</div>
            <div className="lg:text-[18px]">Full LED</div>
          </div>
        </div>

        <div  className=" overflow-x-hidden w-screen h-screen bg-primary relative">

        </div>
        <div className="bg-primary"><Footer></Footer></div>
      </div>

    </div>
  )
}

export default audi_A5_Couple 