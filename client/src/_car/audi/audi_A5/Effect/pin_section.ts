import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export function pin_pinElement(container, pinElement){
    ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: pinElement,
      });
}
export function pin_imgAppear(container, img) {
    gsap.set(img, {
        x: 300,
        opacity: 0
    })
    const tl5 = gsap.timeline({

        scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
        }
    })
    tl5.to(img, {
        opacity: 1,
        x: 0,
    })
}

export function pin_imgOpacity(container, img){
gsap.set(img, {
        opacity: 0,
      })
      gsap.to(img, {
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        }
      })
}