import { useRef, useEffect } from "react"
import gsap from "gsap"
import { hero_1, hero_2, hero_3, hero_4, hero_5, hero_6 } from "@/assets"
import { topBrandToyota, topBrandAudi, topBrandMer, topBrandHonda } from "@/assets/homepage/"
const TopBrand_mobile = () => {
    const section1 = useRef(null)
    const section1_txt1 = useRef(null)
    const section1_txt2 = useRef(null)
    const section2 = useRef(null)
    const section2_txt1 = useRef(null)
    const section2_txt2 = useRef(null)
    const section3 = useRef(null)
    const section3_txt1 = useRef(null)
    const section3_txt2 = useRef(null)
    const section4 = useRef(null)
    const section4_txt1 = useRef(null)
    const section4_txt2 = useRef(null)
    useEffect(() => {
        gsap.from([section1_txt1.current, section1_txt2.current], {
            yPercent: 100,
            duration: 0.7,
            scrollTrigger: {
                trigger: section1.current,
                start: "top center",
                end: "bottom 70%",
                scrub: true,
            }
        })

        gsap.from([section2_txt1.current, section2_txt2.current], {
            yPercent: 100,
            duration: 0.7,
            scrollTrigger: {
                trigger: section2.current,
                start: "top center",
                end: "bottom 70%",
                scrub: true,
            }
        })

        gsap.from([section3_txt1.current, section3_txt2.current], {
            yPercent: 100,
            duration: 0.7,
            scrollTrigger: {
                trigger: section3.current,
                start: "top center",
                end: "bottom 70%",
                scrub: true,
            }
        })

        gsap.from([section4_txt1.current, section4_txt2.current], {
            yPercent: 100,
            duration: 0.7,
            scrollTrigger: {
                trigger: section4.current,
                start: "top center",
                end: "bottom 70%",
                scrub: true,
            }
        })
    }, [])
    return (
        <div>
            <section className="w-screen h-[400%] relative">
                <div ref={section1} className=" w-screen h-screen flex flex-col justify-between items-center  sticky top-0  ">
                    <section className="w-full h-full absolute top-0 left-0">
                        <img src={topBrandToyota} className="w-full h-full object-cover" />
                    </section>
                    <div className="mt-[10%] overflow-y-hidden  w-full  h-[20%]  backdrop-blur-[5px] ">
                        <p ref={section1_txt1} className="text-[75px] xs:text-[100px] ss:text-[120px] w-full text-center font-bold font-kanit">
                            TOYOTA
                        </p>
                    </div>
                    <div className="overflow-y-hidden z-50 w-full  h-[20%] flex justify-center">
                        <p ref={section1_txt2} className="text-[20px] ss:text-[21.5px]  sm:text-[23px] md:text-[25px]  w-[98%]  xs:w-[80%] text-center font-bold font-kanit">
                            Toyota's origins lie in the Japanese weaving industry when Sakichi Toyoda invented the world's first automatic loom and, subsequently.
                        </p>
                    </div>
                    <div className="w-full z-0 absolute top-0 h-full bg-stone-800 mix-blend-color  flex justify-center items-center ">
                    </div>
                </div>

                <div ref={section2} className=" w-screen h-screen flex flex-col justify-between items-center sticky top-0  ">
                    <section className="w-full h-full absolute top-0 left-0 ">
                        <img src={topBrandHonda} className="w-full h-full object-cover" />
                    </section>
                    <div className="mt-[10%] overflow-y-hidden  w-full  h-[20%]  backdrop-blur-[5px] ">
                        <p ref={section2_txt1} className="text-[75px] xs:text-[100px] ss:text-[120px] w-full text-center font-bold font-kanit">
                            Honda
                        </p>
                    </div>
                    <div className="overflow-y-hidden z-50 w-full  h-[20%] flex justify-center">
                        <p ref={section2_txt2} className="text-[20px] ss:text-[21.5px]  sm:text-[23px] md:text-[25px] w-[98%] xs:w-[80%] text-center font-bold font-kanit">
                            The guiding ideals that still shape Honda to this day are formed. The company principle is enshrined: “Maintaining a global viewpoint.
                        </p>
                    </div>
                    <div className="w-full z-0 absolute top-0 h-full bg-stone-800 mix-blend-color  flex justify-center items-center ">
                    </div>
                </div>

                <div ref={section3} className=" w-screen h-screen flex flex-col justify-between items-center sticky top-0  ">
                    <section className="w-full h-full absolute top-0 left-0 ">
                        <img src={topBrandMer} className="w-full h-full object-cover" />
                    </section>
                    <div className="mt-[10%] overflow-y-hidden  w-full  h-[20%]  backdrop-blur-[5px] ">
                        <p ref={section3_txt1} className="text-[75px] xs:text-[100px] ss:text-[120px] w-full text-center font-bold font-kanit">
                            Mercedes
                        </p>
                    </div>
                    <div className="overflow-y-hidden z-50 w-full  h-[20%] flex justify-center">
                        <p ref={section3_txt2} className="text-[20px] ss:text-[21.5px]  sm:text-[23px] md:text-[25px] w-[98%] xs:w-[80%] text-center font-bold font-kanit">
                            The age of the motorized motor coach dawns on 18 March 1895. The world’s first motor coach, ordered on 19 December 1894 from Benz & Co.
                        </p>
                    </div>
                    <div className="w-full z-0 absolute top-0 h-full bg-stone-800 mix-blend-color  flex justify-center items-center ">
                    </div>
                </div>

                <div ref={section4} className=" w-screen h-screen flex flex-col justify-between items-center sticky top-0  ">
                    <section className="w-full h-full absolute top-0 left-0 ">
                        <img src={topBrandAudi} className="w-full h-full object-cover" />
                    </section>
                    <div className="mt-[10%] overflow-y-hidden  w-full  h-[20%]  backdrop-blur-[5px] ">
                        <p ref={section4_txt1} className="text-[75px] xs:text-[100px] ss:text-[120px] w-full text-center font-bold font-kanit">
                            Audi
                        </p>
                    </div>
                    <div className="overflow-y-hidden z-50 w-full  h-[20%] flex justify-center">
                        <p ref={section4_txt2} className="text-[20px] ss:text-[21.5px]  sm:text-[23px] md:text-[25px] w-[98%] xs:w-[80%] text-center font-bold font-kanit">The history of AUDI AG extends back to the 19th century. Find out more about the great personalities from the company’s 100-plus years of history.

                        </p>
                    </div>
                    <div className="w-full z-0 absolute top-0 h-full bg-stone-800 mix-blend-color  flex justify-center items-center ">
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopBrand_mobile