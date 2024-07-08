import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export function imgAppear1(container, img){
    const imgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom bottom",
          scrub: true,
        }
      })
      imgTimeline.set(img, {
        opacity: 0,
        y: 700,
      })
        .to(img, {
          opacity: 1,
          y: 0,
        })
}
export function imgAppear2(container, img){
const imgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom bottom",
          scrub: true,
        }
      })
      imgTimeline.set(img, {
        opacity: 0,
        y: 700,
      })
        .to(img, {
          opacity: 1,
          y: 0,
        })
}
export function contentAppear2(container, h1, p){
const tl = gsap.timeline();
      tl.set([h1, p], {
        opacity: 0,
        x: -1000,
      })
        .to(h1, {
          opacity: 1,
          duration: 0.5,
          x: 0,
        })
        .to(
          p,
          {
            opacity: 1,
            duration: 0.5,
            x: 0,
          },
          "-=0.2"
        );
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none reverse",
        animation: tl,
      });
}

export function contentAppear1(container, h1,p){
const tl = gsap.timeline();
      tl.set([h1, p], {
        opacity: 0,
        x: 1000,
      })
        .to(h1, {
          opacity: 1,
          duration: 0.5,
          x: 0,
        })
        .to(
          p,
          {
            opacity: 1,
            duration: 0.5,
            x: 0,
          },
          "-=0.3"
        );
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none reverse",
        animation: tl,
      });
}
