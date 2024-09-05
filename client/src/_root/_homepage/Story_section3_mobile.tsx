import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import SplitType from "split-type"
import gsap from "gsap"
import { bmw_nazca } from "@/assets/homepage/story"
import { ScrollTrigger } from "gsap/all"
const Story_section3_mobile = () => {
  const founder_txt3 = useRef(null)
  const section_founder3 = useRef(null)
  const founder3_overlay = useRef(null)
  const text3 = new SplitType(".split3", { types: "words" })


  useEffect(() => {
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
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [])
  return (
    <div ref={section_founder3} className="flex xsm:hidden 
        flex-col xsm:flex-row w-screen h-screen   sticky top-0 bg-neutral-900 overlow-y-hidden">
      <section className=" w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
        <img src={bmw_nazca} className="w-full h-full object-cover" />
        <div ref={founder3_overlay} className="absolute top-0 w-full h-full bg-neutral-900"></div>
      </section>
      <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[20px] ml-[20px] md:ml-[40px]  flex flex-col justify-between">
        <div className="w-full  h-full">
          <div>
            <p data-aos="fade-up" className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] font-bold font-syncopate">
              BMW Nazca
            </p>
          </div>
          <div data-aos="fade-up" className="hidden ss:flex gap-x-[15px] ">
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
          <div className="w-[85%] mt-[2%]">
            <p data-aos="fade-up" ref={founder_txt3} className="  text-[20px] md:text-[25px] overflow-y-hidden">
              The BMW Nazca is a performance version of the BMW 3 Series, developed by BMW's in-house motorsport division.
              {/* In addition, the windscreen was glued in – not, as with the other E30 models, framed with a window rubber and piping. */}
            </p>
          </div>
          <div data-aos="fade-up" className="mt-[5%] w-full  ">
            <Link to="/shop/product/66ab86b32c63f54b95a50cd3">
              <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450">Shop now</button>
            </Link>
          </div>
        </div>

      </section>

    </div>

  )
}

export default Story_section3_mobile