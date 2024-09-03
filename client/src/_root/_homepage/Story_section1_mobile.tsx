import { useRef, useEffect } from "react"
import { supra_mk4 } from "@/assets/homepage/story"
import { Link } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
const Story_section1_mobile = () => {
    const founder_txt1 = useRef(null)
    const founder1_overlay = useRef(null)
    const section_founder1 = useRef(null)
    useEffect(() => {
        gsap.to(founder1_overlay.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder1.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div ref={section_founder1} className="flex flex-col xsm:hidden w-screen h-screen  sticky top-0 bg-neutral-900  ">
            <section className=" w-full xsm:w-1/2 h-1/2   xsm:h-full relative overflow-y-hidden">
                <div ref={founder1_overlay} className=" w-full absolute top-0  h-full bg-neutral-900"></div>
                <img src={supra_mk4} className="w-full h-full object-cover" />
            </section>
            <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[20px]  ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                <div className="w-full  h-full">
                    <p className="w-full text-[24px] xs:text-[30px] ss:text-[40px]  font-bold font-syncopate text-white   ">
                        TOYOTA SUPRA MK4
                    </p>
                    <div className="hidden ss:flex mt-[1%]  gap-x-[15px] ">
                        <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
                            <p>Toyota</p>
                        </section>
                        <section className=" w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                            <p>555hp</p>
                        </section>
                        <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                            <p>Japan</p>
                        </section>
                    </div>
                    <div className="mt-[2%] w-[86%]">
                        <p className=" text-[20px] md:text-[25px] overflow-y-hidden">
                            The legendary twin-turbo 2JZ-GTE produced 276 HP for Japanese markets, but thanks to upgraded turbos and bigger fuel injectors.
                            The Supra traces much of its roots back to the 2000GT.
                        </p>
                    </div>
                    <div className="mt-[4%] w-full  ">
                        <Link to="/shop/product/66abaa4dc0a16d17ddeae332">
                            <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450">Show now</button>
                        </Link>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Story_section1_mobile