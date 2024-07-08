import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export function price_section(container, txt){
gsap.set(txt,{
      opacity:0,
      x:-200,
     })
        gsap.to(txt, {
          opacity: 1,
          duration: 0.8,
          
          x: 0,
          scrollTrigger:{
              trigger:container,
          start:"top center",
          end:"bottom center",
          }
        });
}

export function slogan_section(container, txt){
 gsap.set(txt, {
        opacity: 0,
        x: -100,
      })
      gsap.to(txt, {
        x: 0,
        opacity: 1,
duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
}