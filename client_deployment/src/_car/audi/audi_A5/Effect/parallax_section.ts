import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export function paraHero_section1(container, txt){
const tl = gsap.timeline()
      tl
        .set(txt, {
          opacity: 0,
          y: 500,
        })
        .to(txt, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })
      ScrollTrigger.create({

        trigger: container,
        start: "top center",
        end: "bottom 20%",
        animation: tl, toggleActions: "restart none none reverse"
      }
      )

}

export function paraHero_section2(container, img1, img2){
    const tl1 = gsap.timeline()
      tl1.set([img1, img2], {
        y: 500,
        opacity: 0,
      })
        .to([img1,img2], {
          y: 0,
          opacity: 1,
        })

      ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        animation: tl1
      })
}

export function paraHero_section4(container, txt){
const tl_sec4 = gsap.timeline()
      tl_sec4
        .set(txt, {
          opacity: 0,
          y: 400
        })
        .to(txt, {
          opacity: 1,
          y: 0
        })
      ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "restart none none reverse",
        animation: tl_sec4

      })
}
