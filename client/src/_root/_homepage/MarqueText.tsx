import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const MarqueText = () => {
    //section 3---- maque text
    const container_maqueText = useRef(null)
    const maqueText1 = useRef(null)
    const maqueText2 = useRef(null)
    useEffect(() => {
        gsap.set(maqueText1.current, {
            xPercent: -50
        })
        // gsap.set(gg3.current,{
        //   xPercent:20
        // })
        gsap.to(maqueText1.current, {
            x: "1000px",
            scrollTrigger: {
                trigger: container_maqueText.current,
                scrub: true,
                start: "top 90%",
                end: "bottom top"
            }
        })
        gsap.to(maqueText2.current, {
            x: "-1000px",
            scrollTrigger: {
                trigger: container_maqueText.current,
                scrub: true,
                start: "top 90%",
                end: "bottom top"
            }
        })

    }, [])
    return (
        <div ref={container_maqueText} className="bg-neutral-900 w-screen h-[300px]  overflow-x-hidden flex flex-col justify-between">
            <section ref={maqueText1} className="pt-[20px] whitespace-nowrap w-[400%] leading-none h-[150px]  text-[43px] xs:text-[70px] lg:text-[80px] font-bold font-syncopate italic">
                FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER / FOUNDER
            </section>
            <section ref={maqueText2} className="pt-[20px] border-t whitespace-nowrap w-[300%] leading-none  h-[150px] italic font-syncopate font-bold text-[43px] xs:text-[70px] lg:text-[80px]">
                FROM VKU * FROM VKU *  FROM VKU *  FROM VKU *  FROM VKU *  FROM VKU
            </section>
        </div>
    )
}
export default MarqueText