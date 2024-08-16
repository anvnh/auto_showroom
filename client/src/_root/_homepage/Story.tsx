import { useRef, useEffect } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { a1, a2, a3 } from "@/assets/audiA5/couple/"
import { nissanR34, supraMk4, bmwM3, bmwM3_vertical, } from "@/assets/homepage/story"
import Story_section1_mobile from "./Story_section1_mobile"
import Story_section3_mobile from "./Story_section3_mobile"
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
    })
    return (
        <div className=" h-[300%] relative box-border">
            <div ref={section_founder1} className="w-screen h-screen hidden xsm:flex flex-col xsm:flex-row sticky top-0 bg-black  ">
                <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-between">
                    <div className="w-full  h-[40%]">
                        <p className="w-full text-[37px] xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate   ">TOYOTA SUPRA MK4</p>
                        <div className="flex gap-x-[15px] ">
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
                    </div>
                    <div className="w-[70%] h-[40%]  flex flex-col justify-center gap-y-[20px] mb-[60px] ">
                        <p ref={founder_txt1} className="split1 text-[20px] md:text-[25px] overflow-y-hidden">
                            The legendary twin-turbo 2JZ-GTE produced 276 HP for Japanese markets, but thanks to upgraded turbos and bigger fuel injectors, the American models were blessed with 321 HP, whilst European models made 326 HP.
                        </p>

                    </div>
                </section>
                <section className=" w-full xsm:w-1/2 h-1/2  xsm:h-full relative overflow-y-hidden">
                    <div ref={founder1_overlay} className="w-full absolute top-0  h-full bg-black overley"></div>
                    <img src={supraMk4} className="w-full h-full object-cover" />
                </section>
            </div>

            <Story_section1_mobile />



            <div ref={section_founder2} className="w-screen h-screen flex 
       flex-col xsm:flex-row sticky top-0 bg-black">
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={nissanR34} className="w-full h-full object-cover" />
                    <div ref={founder2_overlay} className="w-full absolute top-0  h-full bg-black"></div>
                </section>
                <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px] flex flex-col justify-between">
                    <div className="w-full  h-[40%]">
                        <p className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate">
                            NISSAN SKYLINE R34
                        </p>
                        <div className="flex gap-x-[15px] ">
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center  ">
                                <p>Nissan</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>1001hp</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>Japan</p>
                            </section>
                        </div>
                    </div>
                    <div className="w-[85%] h-[40%]  flex flex-col justify-center gap-y-[20px] mb-[60px] ">
                        <p ref={founder_txt2} className="split2 text-[20px] md:text-[25px] overflow-y-hidden">
                            The Nissan Skyline GT-R R34 is an iconic sports car that has captured the hearts of automotive enthusiasts worldwide.
                        </p>

                    </div>
                </section>
            </div>

            <div ref={section_founder3} className="w-screen h-screen hidden xsm:flex 
        flex-col xsm:flex-row sticky top-0 bg-black">
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-between">
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
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={bmwM3_vertical} className="w-full h-full object-cover" />
                    <div ref={founder3_overlay} className="absolute top-0 w-full h-full bg-black"></div>
                </section>
            </div>
            <Story_section3_mobile />
        </div>

    )
}
export default Story

