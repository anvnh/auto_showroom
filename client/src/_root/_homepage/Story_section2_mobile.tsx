import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import SplitType from "split-type"
import gsap from "gsap"
import { nissan_r35 } from "@/assets/homepage/story"
import { ScrollTrigger } from "gsap/all"
const Story_section2_mobile = () => {
    const founder_txt2 = useRef(null)
    const section_founder2 = useRef(null)
    const founder2_overlay = useRef(null)
    const text2 = new SplitType(".split2", { types: "words" })


    useEffect(() => {
        gsap.to(founder2_overlay.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder2.current,
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
        <div ref={section_founder2} className="w-screen h-screen  flex xsm:hidden 
        flex-col xsm:flex-row sticky top-0 bg-neutral-900 overlow-y-hidden">
            <section className=" w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                <img src={nissan_r35} className="w-full h-full object-cover" />
                <div ref={founder2_overlay} className="absolute top-0 w-full h-full bg-neutral-900"></div>
            </section>
            <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[20px] ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                <div className="w-full  h-full">
                    <p className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] font-bold font-syncopate">
                        Nissan Skyline R34
                    </p>
                    <div className="hidden ss:flex gap-x-[15px] ">
                        <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
                            <p>Nissan</p>
                        </section>
                        <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                            <p>1001hp</p>
                        </section>
                        <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                            <p>Japan</p>
                        </section>
                    </div>
                    <div className="w-[86%] mt-[2%]">
                        <p ref={founder_txt2} className="  text-[20px] md:text-[25px] overflow-y-hidden">
                            The Nissan Skyline GT-R R34 is an iconic sports car that has captured the hearts of automotive enthusiasts worldwide.
                            After a 16-year hiatus, the GT-R name was revived.
                            {/* Group A specification versions of the R32 GT-R were used to win the Japanese Touring Car Championship for four years in a row. */}
                        </p>
                    </div>
                    <div className="mt-[5%] w-full  ">
                        <Link to="/shop/product/66ab86b32c63f54b95a50cd3">
                            <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450">Show now</button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Story_section2_mobile