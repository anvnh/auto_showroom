import { useEffect, useRef } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
const AboutUs = () => {
  const container_whoweare = useRef(null)
  useEffect(() => {
    const split = new SplitType(".whoweare_txt", { types: "chars,words" })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container_whoweare.current,
        start: "top 40%",
        end: "bottom top",
        toggleActions: "restart reverse restart reverse"
      }
    })
    tl.from(split.chars, {
      yPercent: 100,
      duration: 1,
      stagger: 0.009
      // stagger:{
      //   amount:0.5
      // }
    })
    gsap.from(container_whoweare.current, {
      backgroundColor: "#121212",
      duration: 1.25,
      scrollTrigger: {
        trigger: container_whoweare.current,
        start: "top 40%",
        end: "bottom 90%",
        scrub: true
      }
    })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [])
  return (
    <div ref={container_whoweare} className=" bg-[#fafafa] w-screen h-screen flex flex-col justify-center items-center ">
      <section className="w-full h-[10%]  flex justify-center items-center">
        <p className="text-[25px] text-black opacity-30 font-[600]">
          Who we are
        </p>
      </section>
      <section className="w-full h-[20%]  ">
        <div className="overflow-hidden w-full h-full flex justify-center items-center ">
          <p className="whoweare_txt text-neutral-800  font-semibold text-[30px] ss:text-[40px] lg:text-[45px] text-center  w-[80%] sm:w-[65%] md:w-[60%] lg:w-[50%]" >
            The most prestigious car showroom in VietNam
          </p>
        </div>
      </section>
      <section className="w-full h-[20%] flex justify-center items-center ">
        <button className="w-[150px] h-[50px] text-slate-900 rounded-[50px] border border-slate-900" >
          Learn more
        </button>
      </section>
    </div>
  )
}
export default AboutUs