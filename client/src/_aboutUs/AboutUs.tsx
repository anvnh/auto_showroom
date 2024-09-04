import { useEffect, useRef } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { MarqueText } from "@/_root/_homepage"
import {
    aap_jepg, icon1, icon2, icon3, icon4, icon5, icon6,
    an, anh, phat, an1, anh1, hplat1,
} from "@/assets/aboutUs"
import { smoothScroll_lenis } from "@/_car/audi/audi_A5/Effect"
import Navbar from "@/_shop/common/Navbar"
import Footer from "@/components/common/Footer"
const AboutUs = () => {
    gsap.registerPlugin(ScrollTrigger)
    const founder_txt1 = useRef(null)
    const founder_txt2 = useRef(null)
    const founder_txt3 = useRef(null)
    const section_founder3 = useRef(null)
    const section_founder1 = useRef(null)
    const section_founder1_mobile = useRef(null)
    const section_founder2 = useRef(null)
    const section_founder3_mobile = useRef(null)
    const section_founder2_mobile = useRef(null)
    const founder1_overlay = useRef(null)
    const founder1_overlay_mobile = useRef(null)
    const founder2_overlay = useRef(null)
    const founder2_overlay_mobile = useRef(null)
    const founder3_overlay = useRef(null)
    const founder3_overlay_mobile = useRef(null)

    useEffect(() => {
        smoothScroll_lenis()
    }, [])
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

        // mobile
        gsap.to(founder1_overlay_mobile.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder1_mobile.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })
        gsap.to(founder2_overlay_mobile.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder2_mobile.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })
        gsap.to(founder3_overlay_mobile.current, {
            yPercent: -100,
            scrollTrigger: {
                trigger: section_founder3_mobile.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true
            }
        })



        // --- Test Effect ---
        // gsap.from(text1.words, {
        //     opacity: 0.2,
        //     stagger: 0.01,
        //     yPercent: 150,
        //     scrollTrigger: {
        //         markers: true,
        //         trigger: section_founder1.current,
        //         start: "top 80%",
        //         end: "bottom top",
        //         toggleActions: "restart reverse restart reverse"
        //     }
        // })
        // gsap.from(text2.words, {
        //     opacity: 0.2,
        //     stagger: 0.01,
        //     yPercent: 150,
        //     scrollTrigger: {
        //         markers: true,
        //         trigger: section_founder2.current,
        //         start: "top 80%",
        //         end: "bottom top",
        //         toggleActions: "restart reverse restart reverse"
        //     }
        // })
        // gsap.from(text3.words, {
        //     opacity: 0.2,
        //     stagger: 0.01,
        //     yPercent: 150,
        //     scrollTrigger: {
        //         markers: true,
        //         trigger: section_founder3.current,
        //         start: "top 80%",
        //         end: "bottom top",
        //         toggleActions: "restart reverse restart reverse"
        //     }
        // })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div className="bg-neutral-100">

            <Navbar />
            <div className="   w-screen h-screen flex flex-col justify-center items-center  select-none">
                <section className="mt-[8%] h-[30%] w-[80%]">
                    <h2 className="text-[40px] font-kanit font-bold w-full text-center text-stone-700">
                        WE ARE FOUNDER FROM VKU, WHO HAVE A PASSION FOR CARS AND BUSINESS,
                        CAR ARE OUR LIFE.

                    </h2>
                </section>
                <section className=" mb-[3%] h-[60%] w-full flex justify-center items-center ">
                    <img src={aap_jepg} className="w-[95%] h-full object-cover rounded-[20px]" />
                </section>
            </div>

            <div className="w-screen h-[50%] bg-neutral-800 flex gap-x-[2%] justify-center items-center">
                <section className="ml-[2%] h-1/2 w-[30%]">
                    <p className="text-[30px] text-neutral-200 font-bold">
                        Studio based in the
                        city of free and
                        creative people - Ngu Hanh Son,
                        Da Nang
                    </p>
                </section>
                <section className="h-1/2 w-[30%]">
                    <p className="text-[17px] text-neutral-200 font-semibold">
                        Our projects are grounded on the combination of creative
                        view and commercial value, where:
                        - It’s critical for us not only to create beautiful images but
                        also to offer customer-oriented and high-quality service.
                        Check out our client’s feedback on the website.
                        - We create influential and eye-catching visuals that capture
                        people’s attention to your brand. You can see the symbiosis
                        of the artistic vision and commercial implementation in our
                        case studies.
                    </p>
                </section>
                <section className="h-1/2 w-[30%]">
                    <p className="text-[17px] text-neutral-200 font-semibold">
                        Our inspired and enthusiastic team of 3D specialists can
                        bring your ideas into volumetric reality. Scroll below to see
                        each team player.
                        Utopia 513 studio develops progressive directions, such as
                        AR/VR/XR, and brings the 3D environment to the foreground.
                        For example, the MARTHA project shows how we tell stories
                        through details.
                    </p>
                </section>
            </div>

            <div className="w-screen h-[70%] flex flex-col bg-neutral-100 text-neutral-700">
                <section className="w-screen h-1/2  flex justify-evenly">
                    <div className="w-[40%] h-[90%]  flex flex-col justify-center items-center">
                        <h3 className="text-[100px]">
                            35
                        </h3>
                        <p className="text-[22px]">
                            Projects started in 2023
                        </p>
                    </div>
                    <div className="w-[40%] h-[90%] flex flex-col justify-center items-center">
                        <h3 className="text-[100px]">
                            15+
                        </h3>
                        <p className="text-[22px]">
                            Talents on board and growing
                        </p>
                    </div>
                </section>
                <section className="w-screen h-1/2  flex  justify-evenly">
                    <div className="w-[40%] h-[90%] flex flex-col justify-center items-center">
                        <h3 className="text-[100px]">
                            50+
                        </h3>
                        <p className="text-[22px]">
                            Clients worldwide
                        </p>
                    </div>
                    <div className="w-[40%] h-[90%] flex flex-col justify-center items-center">
                        <h3 className="text-[100px]">
                            2
                        </h3>
                        <p className="text-[22px]">
                            Years experience
                        </p>
                    </div>
                </section>
            </div>

            <div className="w-screen h-1/2 flex flex-col bg-neutral-800">
                <section className="w-full h-1/2 flex justify-evenly ">
                    <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
                        <img src={icon1} className="w-[50px] h-[50px]" />
                        <p className="text-[20px] font-kanit font-semibold">
                            HIGH-QUALITY RENDERS: STUNNING VISUALS TO  BRING YOUR IDEAS TO LIFE
                        </p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
                        <img src={icon2} className="w-[50px] h-[50px] " />
                        <p className="text-[20px] font-kanit font-semibold">
                            DIVERSE EXPERTISE: SKILLED TEAM WITH VARIOUS INDUSTRIES & STYLES EXPERTISE
                        </p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
                        <img src={icon3} className="w-[50px] h-[50px] " />
                        <p className="text-[20px] font-kanit font-semibold">
                            COLLABORATIVE APPROACH: WORK CLOSELY WITH CLIENTS TO MEET THEIR EXPECTATIONS
                        </p>
                    </div>
                </section>
                <section className="w-full h-1/2 flex justify-evenly ">
                    <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
                        <img src={icon4} className="w-[50px] h-[50px]" />
                        <p className="text-[20px] font-kanit font-semibold">
                            FAST TURNAROUND: EFFICENT DELIVERY AND NON-COMPROMISING QUALITY
                        </p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
                        <img src={icon5} className="w-[50px] h-[50px] " />
                        <p className="text-[20px] font-kanit font-semibold">
                            CUSTOMIZABLE SOLUTIONS: TAILORED 3D SOLUTIONS FOR YOUR UNIQUE REQUIREMENTS
                        </p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center gap-x-[2%]">
                        <img src={icon6} className="w-[50px] h-[50px] " />
                        <p className="text-[20px] font-kanit font-semibold">
                            CUTTING-EDGE TECHNOLOGY: LATEST SOFTWARE & HARDWARE FOR TOP-NOTCH RESULTS
                        </p>
                    </div>
                </section>
            </div>

            <MarqueText />

            <div className="w-screen h-screen flex justify-evenly items-center ">
                <section className="w-[28%] h-full ">
                    <img src={an} className="w-full h-[80%] object-cover" />
                    <div className="w-full h-[40%]">
                        <h2 className="text-[30px] font-kanit font-semibold ">VO NGUYEN HOANG AN</h2>
                        <p className="text-[17px] font-kanit font-semibold">FOUNDER</p>
                    </div>
                </section>
                <section className="w-[28%] h-full">
                    <img src={anh} className="w-full h-[80%] object-cover" />
                    <div className="w-full h-[40%]">
                        <h2 className="text-[30px] font-kanit font-semibold ">NGUYEN VAN TUAN ANH</h2>
                        <p className="text-[17px] font-kanit font-semibold">FOUNDER</p>
                    </div>
                </section>
                <section className="w-[28%] h-full">
                    <img src={phat} className="w-full h-[80%] object-cover" />
                    <div className="w-full h-[40%]">
                        <h2 className="text-[30px] font-kanit font-semibold ">LA TRUONG HOANG PHAT</h2>
                        <p className="text-[17px] font-kanit font-semibold">FOUNDER</p>
                    </div>
                </section>
            </div>


            <div ref={section_founder1} className="hidden xsm:flex  w-screen h-screen ">
                <section className="md:pl-[2%] w-full  xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                    <div className="w-full  h-full ">
                        <div>
                            <p data-aos="fade-up" className="w-full  xsm:text-[28px] md:text-[34px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate   ">
                                HOANG AN
                            </p>
                        </div>
                        <div data-aos="fade-up" className="mt-[2%] flex gap-x-[15px] ">
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center  ">
                                <p>2005</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>Hue</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>VKU</p>
                            </section>
                        </div>
                        <div className="mt-[7%] w-[85%]">
                            <p data-aos="fade-up" ref={founder_txt1} className="split1 text-justify text-[20px] md:text-[25px] overflow-y-hidden">
                                I am an ambitious, enterprising person. I find a way to overcome the difficulties that challenge me,
                                not afraid of anything.
                                Don’t tell me what do you think about that I want to hear.Tell me the truth

                            </p>
                        </div>
                        <div data-aos="fade-up" className="w-full xsm:mt-[15%] md:mt-[5%]">
                            <Link to={"https://www.facebook.com/aanvnh?comment_id=Y29tbWVudDoxNTA0OTUyMTIwMTM3OTg3XzM5MjQwNTExMTExNTE2NzM%3D"}>
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450 ease-in-out  ">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>

                </section>
                <section className=" w-full xsm:w-1/2 h-1/2  xsm:h-full relative overflow-y-hidden">
                    <div ref={founder1_overlay} className="w-full absolute top-0  h-full bg-neutral-900 overley"></div>
                    <img src={an1} className="w-full h-full object-cover" />
                </section>
            </div>
            {/* section1 mobile */}
            <div ref={section_founder1_mobile} className="flex flex-col xsm:hidden w-screen h-screen  sticky top-0 bg-neutral-900  ">
                <section className=" w-full xsm:w-1/2 h-1/2   xsm:h-full relative overflow-y-hidden">
                    <div ref={founder1_overlay_mobile} className=" w-full absolute top-0  h-full bg-neutral-900"></div>
                    <img src={an1} className="w-full h-full object-cover" />
                </section>
                <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[20px]  ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                    <div className="w-full  h-full">
                        <p className="w-full text-[24px] xs:text-[30px] ss:text-[40px]  font-bold font-syncopate text-white   ">
                            HOANG AN
                        </p>
                        <div className="hidden ss:flex mt-[1%]  gap-x-[15px] ">
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
                                <p>2005</p>
                            </section>
                            <section className=" w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>Hue</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>VKU</p>
                            </section>
                        </div>
                        <div className="mt-[2%] w-[86%]">
                            <p className="split1 text-[20px] md:text-[25px] overflow-y-hidden">
                                I am an ambitious, enterprising person. I find a way to overcome the difficulties that challenge me,
                                not afraid of anything.
                                Don’t tell me what do you think about that I want to hear.Tell me the truth
                            </p>
                        </div>
                        <div className="mt-[4%] w-full  ">
                            <Link to="https://www.facebook.com/aanvnh?comment_id=Y29tbWVudDoxNTA0OTUyMTIwMTM3OTg3XzM5MjQwNTExMTExNTE2NzM%3D">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* section2 */}
            <div ref={section_founder2} className="hidden xsm:flex  w-screen h-screen">
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={anh1} className="w-full h-full object-cover" />
                    <div ref={founder2_overlay} className="w-full absolute top-0  h-full bg-neutral-900"></div>
                </section>
                <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px] flex flex-col justify-start">
                    <div className="w-full  h-full">
                        <p data-aos="fade-up" className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate">
                            TUAN ANH
                        </p>
                        <div data-aos="fade-up" className="flex gap-x-[15px] ">
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
                                <p>2005</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>Quang Tri</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>VKU</p>
                            </section>
                        </div>
                        <div data-aos="fade-up" className="mt-[5%] w-[85%]">
                            <p ref={founder_txt2} className="split2 text-justify text-[20px] md:text-[25px] overflow-y-hidden">
                                I am a person with a passion for information technology, especially software technology.
                                Web and App are part of my life.
                                The closer you let people get to you, the easier it gets for them to hurt you
                            </p>
                        </div>
                        <div data-aos="fade-up" className="w-full xsm:mt-[15%] md:mt-[5%]">
                            <Link to="https://www.facebook.com/profile.php?id=100032385616885">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450 ">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* section2 mobile */}
            <div ref={section_founder2_mobile} className="w-screen h-screen  flex xsm:hidden 
        flex-col xsm:flex-row sticky top-0 bg-neutral-900 overlow-y-hidden">
                <section className=" w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={anh1} className="w-full h-full object-cover" />
                    <div ref={founder2_overlay_mobile} className="absolute top-0 w-full h-full bg-neutral-900"></div>
                </section>
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[20px] ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                    <div className="w-full  h-full">
                        <p className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] font-bold font-syncopate">
                            TUAN ANH
                        </p>
                        <div className="hidden ss:flex gap-x-[15px] ">
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
                                <p>2005</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>Quang Tri</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>VKU</p>
                            </section>
                        </div>
                        <div className="w-[86%] mt-[2%]">
                            <p ref={founder_txt2} className="  text-[20px] md:text-[25px] overflow-y-hidden">
                                I am a person with a passion for information technology, especially software technology.
                                Web and App are part of my life.
                                The closer you let people get to you, the easier it gets for them to hurt you
                            </p>
                        </div>
                        <div className="mt-[5%] w-full  ">
                            <Link to="https://www.facebook.com/profile.php?id=100032385616885">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* section3 */}
            <div ref={section_founder3} className="hidden xsm:flex 
         w-screen h-screen   ">
                <section className="md:pl-[2%] w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-start">
                    <div className="w-full  h-full">
                        <div>
                            <p data-aos="fade-up" className="w-full   xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate">
                                HOANG PHAT
                            </p>
                        </div>
                        <div data-aos="fade-up" className="mt-[2%] flex gap-x-[15px] ">
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center  ">
                                <p>2005</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>Quang Ngai</p>
                            </section>
                            <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                                <p>VKU</p>
                            </section>
                        </div>
                        <div data-aos="fade-up" className="mt-[7%] w-[85%]">
                            <p ref={founder_txt3} className="split3 text-justify text-[20px] md:text-[25px] overflow-y-hidden">
                                I am a person with a passion for cars. Since childhood, I have been exposed to cars a lot,
                                because it has instilled such a great passion in me.
                                Enjoy the little things in life for one day you’ll look back and realize they were the big things.
                            </p>
                        </div>
                        <div data-aos="fade-up" className="w-full xsm:mt-[15%] md:mt-[5%]">
                            <Link to="https://www.facebook.com/hplatdev">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450 ">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={hplat1} className="w-full h-full object-cover" />
                    <div ref={founder3_overlay} className="absolute top-0 w-full h-full bg-neutral-900"></div>
                </section>
            </div>
            {/* section3 mobile */}
            <div ref={section_founder3_mobile} className="flex xsm:hidden 
        flex-col xsm:flex-row w-screen h-screen   sticky top-0 bg-neutral-900 overlow-y-hidden">
                <section className=" w-full xsm:w-1/2 h-1/2 xsm:h-full relative overflow-y-hidden">
                    <img src={hplat1} className="w-full h-full object-cover" />
                    <div ref={founder3_overlay_mobile} className="absolute top-0 w-full h-full bg-neutral-900"></div>
                </section>
                <section className="w-full xsm:w-1/2 h-1/2 xsm:h-full mt-[20px] ml-[20px] md:ml-[40px]  flex flex-col justify-between">
                    <div className="w-full  h-full">
                        <div>
                            <p className="w-full  text-[24px] xs:text-[30px] ss:text-[40px] font-bold font-syncopate">
                                HOANG PHAT
                            </p>
                        </div>
                        <div className="hidden ss:flex gap-x-[15px] ">
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center  ">
                                <p>2005</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>Quang Ngai</p>
                            </section>
                            <section className="w-[65px] xs:w-[100px] h-[30px] xs:h-[40px] text-[13px] xs:text-[16px] border rounded-[20px] flex justify-center items-center ">
                                <p>VKU</p>
                            </section>
                        </div>
                        <div className="w-[85%] mt-[2%]">
                            <p ref={founder_txt3} className="  text-[20px] md:text-[25px] overflow-y-hidden">
                                I am a person with a passion for cars. Since childhood, I have been exposed to cars a lot,
                                because it has instilled such a great passion in me.
                                Enjoy the little things in life for one day you’ll look back and realize they were the big things.
                            </p>
                        </div>
                        <div className="mt-[5%] w-full  ">
                            <Link to="https://www.facebook.com/hplatdev">
                                <button className="w-[200px] h-[50px] border hover:bg-white hover:text-neutral-800 transition-all duration-450">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>

                </section>

            </div>

            <Footer />
        </div>
    )
}
export default AboutUs