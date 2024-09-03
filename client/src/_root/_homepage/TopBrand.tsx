import { useRef, useEffect } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
import TopBrand_mobile from "./TopBrand_mobile"
import { topBrandHonda2, topBrandMer2, topBrandToyota2, } from "@/assets/homepage/"
const TopBrand = () => {
    const popularBrand_right = useRef(null)
    const container_popularBrand = useRef(null)
    const box2 = useRef(null)
    const box = useRef(null)
    const box1 = useRef(null)
    const popularBrand_section1 = useRef(null)
    const popularBrand_section2 = useRef(null)
    const popularBrand_section3 = useRef(null)


    useEffect(() => {
        ScrollTrigger.create({
            trigger: container_popularBrand.current,
            start: "top top",
            end: "bottom bottom",
            pin: popularBrand_right.current,
            // animation: ani,
            scrub: true
        })

        gsap.to(box.current, {
            yPercent: -200,
            scrollTrigger: {
                trigger: popularBrand_section2.current,
                start: "top 80%",
                end: "bottom top",
                scrub: true,
            }
        })
        gsap.to(box1.current, {
            yPercent: -200,
            scrollTrigger: {
                trigger: popularBrand_section3.current,
                start: "top 80%",
                end: "bottom top",
                scrub: true,
            }
        })
        // gsap.to(box2.current, {
        //     yPercent: -200,
        //     scrollTrigger: {
        //         trigger: popularBrand_section4.current,
        //         start: "top 80%",
        //         end: "bottom top",
        //         scrub: true,
        //     }
        // })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])


    return (
        <div>
            <div className="bg-neutral-950  w-screen h-[100px]  text-[30px] ss:text-[40px] xsm:text-[50px] md:text-[75px] italic  font-bold text-center">
                TOP <span className="text-red-500">BRAND</span> USER TRUST
            </div>

            <section ref={container_popularBrand} className="bg-neutral-900 w-screen  hidden xsm:flex ">
                <div className="w-1/2 h-full  flex flex-col">

                    <section ref={popularBrand_section1} className=" w-full h-screen  flex justify-center items-center ">
                        <div className="xsm:pl-[20px] w-[450px] h-[350px] flex flex-col ">
                            <section className="w-full h-[60%]   ">
                                <h2 className="h-[52%] md:h-[67%] text-[80px] md:text-[100px] lg:text-[110px]  text-red-500   
                                font-kanit font-bold 
                                ">
                                    TOYOTA
                                </h2>
                                <p className="h-[40%] text-[18px] md:text-[20px] lg:text-[22px] ml-[5px] font-kanit font-semibold">Standard, Elegant, Trusted by many people</p>
                            </section>

                        </div>
                    </section>

                    <section ref={popularBrand_section2} className="w-full h-screen flex  justify-center items-center ">
                        <div className="xsm:pl-[20px] w-[450px] h-[350px] flex flex-col ">
                            <section className="w-full h-[60%]   ">
                                <h2 className="h-[52%] md:h-[67%]  text-[80px] md:text-[100px] lg:text-[110px] text-red-500  font-kanit font-bold ">
                                    HONDA
                                </h2>
                                <p className="h-[40%] text-[18px] md:text-[20px] lg:text-[22px] ml-[5px] font-kanit font-semibold">
                                    Sport, Cheap, Durable engine
                                </p>
                            </section>

                        </div>
                    </section>

                    <section ref={popularBrand_section3} className="w-full h-screen  flex justify-center items-center ">
                        <div className="xsm:pl-[20px] w-[450px] h-[350px] flex flex-col ">
                            <section className="w-full h-[60%]   ">
                                <h2 className="h-[52%] md:h-[67%]  text-[80px] md:text-[100px] lg:text-[110px] text-red-500  font-kanit font-bold">
                                    MERCEDES
                                </h2>
                                <p className="h-[40%] text-[18px] md:text-[20px] lg:text-[22px] ml-[5px] font-kanit font-semibold">
                                    Luxury, Super sport, Expressing personality
                                </p>
                            </section>

                        </div>
                    </section>

                </div>

                <div ref={popularBrand_right} className="w-1/2 overflow-hidden h-screen   relative flex flex-col ">
                    <div className="w-full h-[60%] overflow-y-hidden">
                        <section className="rounded-[20px] overflow-hidden z-40  w-[80%]  h-[50%]  top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] absolute">
                            <img ref={box} src={topBrandToyota2} className=" w-full h-full object-cover" />
                        </section>
                        <section className=" rounded-[20px] z-30 overflow-hidden  top-[50%] left-[50%] translate-x-[-50%] transform translate-y-[-50%] absolute w-[80%]  h-[50%]">
                            <img ref={box1} src={topBrandHonda2} className="w-full h-full object-cover" />
                        </section>
                        <section className="rounded-[20px] z-20 overflow-hidden  absolute w-[80%]  h-[50%]  top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                            <img ref={box2} src={topBrandMer2} className="w-full h-full object-cover" />
                        </section>
                    </div>
                </div>
            </section>
            <TopBrand_mobile />
        </div>
    )
}

export default TopBrand