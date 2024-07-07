import gsap from "gsap"
import SplitType from 'split-type'

export function  split_txt (split){
    split.forEach((char, i) => {
      const text = new SplitType(char, { types: 'chars' })
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 0.2,
        },
        opacity: 0.2,
        stagger: 0.1
      })
    })
}
