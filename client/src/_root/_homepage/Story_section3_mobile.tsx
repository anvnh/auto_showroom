import { useRef, useEffect } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import {  a3 } from "@/assets/audiA5/couple/"

const Story_section3_mobile = () => {
  const founder_txt3 = useRef(null)
  const section_founder3 = useRef(null)
  const founder3_overlay = useRef(null)
  const text3 = new SplitType(".split3", { types: "words" })
  

  useEffect(() => {
    console.log(text3)
    gsap.to(founder3_overlay.current, {
      yPercent: -100,
      scrollTrigger: {
        trigger: section_founder3.current,
        start: "top 90%",
        end: "bottom 60%",
        scrub: true
      }
    })
    // gsap.from(text3.words, {
    //   opacity: 0.1,
    //   stagger: 0.01,
    //   yPercent: 150,
    //   scrollTrigger: {
    //     trigger: section_founder3.current,
    //     start: "top 30%",
    //     end: "bottom top",
    //     markers:true,
    //     toggleActions: "restart reverse restart reverse"
    //   }
    // })

  }, [])
  return (
    <div ref={section_founder3} className="w-screen h-screen  flex xsm:hidden 
        flex-col xsm:flex-row sticky top-0 bg-black overlow-y-hidden">
        <section className=" w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
            <img src={a3} className="w-full h-full"/>
            <div ref={founder3_overlay} className="absolute top-0 w-full h-full bg-black"></div>
          </section>
          <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[50px] ml-[40px]  flex flex-col justify-between">
            <div className="w-full  h-[40%]">
              <p className="w-full  text-[37px] xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate">BMW M3</p>
              <div className="flex gap-x-[15px] ">
                <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center  ">
                  <p>Bmw</p>
                </section>
                <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                  <p>500hp</p>
                </section>                
                <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                  <p>Germany</p>
                </section>
              </div>
            </div>
            <div className="w-[70%] h-[40%]  flex flex-col justify-center gap-y-[20px] ">
              <p ref={founder_txt3} className="split3 text-[20px] md:text-[25px] overflow-y-hidden">
                The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986..
              </p>
            </div>
          </section>
          
        </div>
        
  )
}

export default Story_section3_mobile