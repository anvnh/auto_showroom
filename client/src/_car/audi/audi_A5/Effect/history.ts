import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

export function history_imgAppear1(container, img1, img2){

const timeline_section1 = gsap.timeline()
      timeline_section1
        .set([img1, img2], {
          yPercent: 100,
          opacity: 0
        })
        .to([img1, img2], {
          yPercent: 0,
          opacity: 1,
        })
      ScrollTrigger.create({

        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
        animation: timeline_section1

      })
}

export function history_contentAppear1(container, txt){
    const tl_sec1_text = gsap.timeline()
      tl_sec1_text.set(txt, {
        opacity: 0,

      })
      tl_sec1_text.to(txt, {
        opacity: 1,
        duration: 1,

      })
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom bottom",
        animation: tl_sec1_text
      })
}

export function history_imgAppear2(container, img1, img2){
    const tl_section2 = gsap.timeline()
      tl_section2
        .set([img1, img2], {
          yPercent: 100,
        })
        .to([img1, img2], {
          opacity: 1,
          yPercent: 0,
        })
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        animation: tl_section2
      })
}


