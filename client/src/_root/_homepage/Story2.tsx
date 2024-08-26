import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { supra_f2f } from "@/assets/homepage"
const Story2 = () => {
    const con_p1 = useRef(null)
    const con_p2 = useRef(null)
    const con_p3 = useRef(null)
    const con_p4 = useRef(null)
    const p1 = useRef(null)
    const p2 = useRef(null)
    const p3 = useRef(null)
    const p4 = useRef(null)
    const container_textBlock = useRef(null)
    //zooom
    const imageZoom_img = useRef(null)
    const container_imageZoom = useRef(null)
    useEffect(() => {
        // gsap.set([p1.current, p2.current, p3.current, p4.current],{
        //   yPercent:100
        // })

        gsap.to(p1.current, {
            yPercent: 100,
            scrollTrigger: {
                trigger: con_p1.current,
                scrub: true,
                start: "top 30%",
                end: "bottom 15%",
            }
        })
        gsap.to(p2.current, {
            yPercent: 100,
            scrollTrigger: {
                trigger: con_p2.current,
                scrub: true,
                start: "top 30%",
                end: "bottom 15%",
                // markers:true
            }
        })
        gsap.to(p3.current, {
            yPercent: 100,
            scrollTrigger: {
                trigger: con_p3.current,
                scrub: true,
                start: "top 30%",
                end: "bottom 15%",
            }
        })
        gsap.to(p4.current, {
            yPercent: 100,
            scrollTrigger: {
                trigger: con_p4.current,
                scrub: true,
                start: "top 30%",
                end: "bottom 15%",
            }
        })


        //zooom
        gsap.to([container_imageZoom.current, container_textBlock.current], {
            backgroundColor: "#121212",
            scrollTrigger: {
                trigger: container_imageZoom.current,
                start: "top 90%",
                end: "bottom center",
                scrub: true
            }
        })
        const anii = gsap.to(imageZoom_img.current, {
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            duration: 1
        })
        ScrollTrigger.create({
            trigger: container_imageZoom.current,
            pin: container_imageZoom.current,
            scrub: true,
            animation: anii,
            start: "top 0%",
            end: "bottom top"
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div>
            <section className="bg-black">
                <div ref={container_textBlock} className=" w-screen bg-white  text-black h-screen flex flex-col justify-center items-center">
                    <section ref={con_p1} className=" w-[80%] h-[11%] leading-none  overflow-y-hidden">
                        <p ref={p1} className=" font-[600] italic font-kanit h-full text-center  text-[60px] xsm:text-[80px] md:text-[100px] lg:text-[120px]">
                            DISCOVER
                        </p>
                    </section>
                    <section ref={con_p2} className="w-[80%] h-[11%] leading-none  overflow-y-hidden">
                        <p ref={p2} className="font-kanit italic  h-full text-center text-[60px] xsm:text-[80px] md:text-[100px] lg:text-[120px]">
                            the best in
                        </p>
                    </section>
                    <section ref={con_p3} className="font-[600] font-kanit w-[80%] h-[11%] leading-none  overflow-y-hidden">
                        <p ref={p3} className="  h-full text-center text-[60px] xsm:text-[80px] md:text-[100px] lg:text-[120px]">
                            AAP
                        </p>
                    </section>
                    <section ref={con_p4} className="font-kanit font-[600] w-[80%] h-[11%] leading-none  overflow-y-hidden">
                        <p ref={p4} className="italic  h-full text-center text-[50px] sm:text-[60px] xsm:text-[80px] md:text-[100px] lg:text-[120px]">
                            SHOWROOM
                        </p>
                    </section>
                </div>
            </section>

            <div ref={container_imageZoom} className="w-screen h-screen bg-white  flex justify-center items-center ">
                <img ref={imageZoom_img} src={supra_f2f} className="w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-[1000px]  object-cover" />
            </div>
        </div>
    )
}

export default Story2
