import { useRef, useEffect } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { bmwM3 } from "@/assets/homepage/story"
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
        <img src={bmwM3} className="w-full h-full object-cover" />
        <div ref={founder3_overlay} className="absolute top-0 w-full h-full bg-black"></div>
      </section>
      <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-between">
        <div className="w-full  h-[40%]">
          <p className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] font-bold font-syncopate">
            BMW M3
          </p>
          <div className="flex gap-x-[15px] ">
            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
              <p>Bmw</p>
            </section>
            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
              <p>500hp</p>
            </section>
            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
              <p>Germany</p>
            </section>
          </div>
        </div>
        <div className="w-[85%] h-[60%]  flex flex-col justify-center gap-y-[20px] ">
          <p ref={founder_txt3} className="split3 text-[20px] md:text-[25px] overflow-y-hidden">
            The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH.
          </p>
        </div>
      </section>

    </div>

  )
}

export default Story_section3_mobile