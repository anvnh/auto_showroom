import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

export function textAppear(container, txt1, txt2, txt3){
const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none none reverse  ",
        }
      });
      tl.set([txt1, txt2, txt3], {
        opacity: 0,
        x: -1000,
      })
        .to(
          txt1,
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
          },
        )
        .to(
          txt2,
          {
            opacity: 1,
            x: 0,
            duration: 0.5
          },
          "-=0.3"
        )
        .to(
          txt3,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
}