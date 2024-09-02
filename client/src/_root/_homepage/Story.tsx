import { useRef, useEffect } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { a1, a2, a3 } from "@/assets/audiA5/couple/"
import { nissan_r35, supra_mk4, bmw_nazca, } from "@/assets/homepage/story"
import Story_section1_mobile from "./Story_section1_mobile"
import Story_section2_mobile from "./Story_section2_mobile"
import Story_section3_mobile from "./Story_section3_mobile"
import { ScrollTrigger } from "gsap/all"
import { Link } from "react-router-dom"
const Story = () => {
    const founder_txt1 = useRef(null)
    const founder_txt2 = useRef(null)
    const founder_txt3 = useRef(null)
    const section_founder3 = useRef(null)
    const section_founder1 = useRef(null)
    const section_founder2 = useRef(null)
    const founder1_overlay = useRef(null)
    const founder2_overlay = useRef(null)
    const founder3_overlay = useRef(null)
    useEffect(() => {
        const text1 = new SplitType(".split1", { types: "words" })
        const text2 = new SplitType(".split2", { types: "words" })
        const text3 = new SplitType(".split3", { types: "words" })

        gsap.to(founder1_overlay.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder1.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })
        gsap.to(founder2_overlay.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder2.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })
        gsap.to(founder3_overlay.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder3.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })
        gsap.to(section_founder1.current, {
            // scale: 0.6,
            scrollTrigger: {
                trigger: section_founder2.current,
                start: "top 80%",
                end: "bottom top",
                scrub: true
            }
        })
        gsap.to(section_founder2.current, {
            // scale: 0.6,
            scrollTrigger: {
                trigger: section_founder3.current,
                start: "top 80%",
                end: "bottom top",
                scrub: true
            }
        })

        gsap.from(text1.words, {
            opacity: 0.2,
            stagger: 0.01,
            yPercent: 150,
            scrollTrigger: {
                trigger: section_founder1.current,
                start: "top 35%",
                end: "bottom top",
                toggleActions: "restart reverse restart reverse"
            }
        })
        gsap.from(text2.words, {
            opacity: 0.1,
            stagger: 0.01,
            yPercent: 150,
            scrollTrigger: {
                trigger: section_founder2.current,
                start: "top 35%",
                end: "bottom top",
                toggleActions: "restart reverse restart reverse"
            }
        })
        gsap.from(text3.words, {
            opacity: 0.1,
            stagger: 0.01,
            yPercent: 150,
            scrollTrigger: {
                trigger: section_founder3.current,
                start: "top center",
                end: "bottom top",
                toggleActions: "restart reverse restart reverse"
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div className="bg-neutral-900 h-[300%] relative box-border">
            <div ref={section_founder1} className="w-screen h-screen hidden xsm:flex flex-col xsm:flex-row sticky top-0   ">
                <section className="md:pl-[2%] w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                    <div className="w-full  h-full ">
                        <div>
                            <p className="w-full  xsm:text-[28px] md:text-[34px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate   ">
                                TOYOTA SUPRA MK4
                            </p>
                        </div>
                        <div className="mt-[2%] flex gap-x-[15px] ">
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center  ">
                                <p>Toyota</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>555hp</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>Japan</p>
                            </section>
                        </div>
                        <div className="mt-[7%] w-[85%]">
                            <p ref={founder_txt1} className="split1 text-justify text-[20px] md:text-[25px] overflow-y-hidden">
                                The legendary twin-turbo 2JZ-GTE produced 276 HP for Japanese markets, but thanks to upgraded turbos and bigger fuel injectors, the American models were blessed with 321 HP, whilst European models made 326 HP.
                                The Supra traces much of its roots back to the 2000GT owing to an inline-6 layout. The first three generations were offered with a direct descendant to the Crown's and 2000GT's M engine.
                                {/* Interior aspects were also similar, as was the chassis code "A". */}
                                {/* Along with this name, Toyota also included its own logo for the Supra. */}
                            </p>
                        </div>
                        <div className="w-full xsm:mt-[15%] md:mt-[5%]">
                            <Link to={"/shop/product/66abaa4dc0a16d17ddeae332"}>
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450 ">Show now</button>
                            </Link>
                        </div>
                    </div>

                </section>
                <section className=" w-full xsm:w-1/2 h-1/2  xsm:h-full relative overflow-y-hidden">
                    <div ref={founder1_overlay} className="w-full absolute top-0  h-full bg-neutral-900 overley"></div>
                    <img src={supra_mk4} className="w-full h-full object-cover" />
                </section>
            </div>

            <Story_section1_mobile />



            <div ref={section_founder2} className="hidden xsm:flex  w-screen h-screen  
        sticky top-0 ">
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={nissan_r35} className="w-full h-full object-cover" />
                    <div ref={founder2_overlay} className="w-full absolute top-0  h-full bg-neutral-900"></div>
                </section>
                <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px] flex flex-col justify-start">
                    <div className="w-full  h-full">
                        <p className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate">
                            NISSAN SKYLINE R34
                        </p>
                        <div className="flex gap-x-[15px] ">
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
                        <div className="mt-[5%] w-[85%]">
                            <p ref={founder_txt2} className="split2 text-justify text-[20px] md:text-[25px] overflow-y-hidden">
                                The Nissan Skyline GT-R R34 is an iconic sports car that has captured the hearts of automotive enthusiasts worldwide.
                                After a 16-year hiatus, the GT-R name was revived in 1989 as the BNR32 ("R32") Skyline GT-R. Group A specification versions of the R32 GT-R were used to win the Japanese Touring Car Championship for four years in a row. The R32 GT-R also had success in the Australian Touring Car Championship.
                                The original Skyline was launched by the Prince Motor Company.
                                {/* The later iteration launched in 1964 called the Prince Skyline GT was powered by a 2.0-litre G7 inline-6 engine shared with the up market Prince Gloria sedan. */}
                            </p>
                        </div>
                        <div className="w-full xsm:mt-[15%] md:mt-[5%]">
                            <Link to="/shop/product/66ab9def2c63f54b95a50e6c">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450 ">Show now</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Story_section2_mobile />

            <div ref={section_founder3} className="hidden xsm:flex 
        flex-col xsm:flex-row w-screen h-screen  sticky top-0 ">
                <section className="md:pl-[2%] w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                    <div className="w-full  h-full">
                        <div>
                            <p className="w-full   xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate">
                                BMW Nazca
                            </p>
                        </div>
                        <div className="mt-[2%] flex gap-x-[15px] ">
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
                        <div className="mt-[7%] w-[85%]">
                            <p ref={founder_txt3} className="split3 text-justify text-[20px] md:text-[25px] overflow-y-hidden">
                                The BMW Nazca is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986..
                                Variants of the 3 Series since then have seen the M3 produced as a saloon,
                                until 2020, when the M3 was produced as an estate (Touring) for the first time, alongside the saloon variant
                            </p>
                        </div>
                        <div className="w-full xsm:mt-[15%] md:mt-[5%]">
                            <Link to="/shop/product/66ab86b32c63f54b95a50cd3">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450 ">Show now</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={bmw_nazca} className="w-full h-full object-cover" />
                    <div ref={founder3_overlay} className="absolute top-0 w-full h-full bg-neutral-900"></div>
                </section>
            </div>
            <Story_section3_mobile />
        </div>

    )
}
export default Story

