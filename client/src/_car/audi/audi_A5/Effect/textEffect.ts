import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function bubbleText_fromBottomToTop(container, text) {

    gsap.set(text, {
        opacity: 0,
        y: 500,
    })
    const timeline = gsap.timeline({
        scrollTrigger: {

            trigger: container,
            start: "top 60%",
            end: "bottom bottom",
        }
    })
    timeline
        .to(text, {
            opacity: 0.7,
            y: 0,
            duration:1,

        })
}