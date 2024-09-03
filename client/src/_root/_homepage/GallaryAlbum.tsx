import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { a1, a2, a3 } from "@/assets/audiA5/couple/"
import {
  audi1, audi2, audi3, audi4, audi5,
  nissan1, nissan2,
  toyota86,
} from "@/assets/homepage/gallary_album";
import { ScrollTrigger } from "gsap/all"

export const GallaryAlbum = () => {
  const con_col = useRef(null)
  const col1 = useRef(null)
  const col2 = useRef(null)
  const col3 = useRef(null)
  const col4 = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    // gsap.set([col1.current, col3.current], {
    //   yPercent: -10
    // })
    // gsap.set([col2.current, col4.current], {
    //   yPercent: 10
    // }
    // )
    const tl = gsap.timeline()

    gsap.from(col1.current, {
      yPercent: 40,
      scrollTrigger: {
        trigger: con_col.current,
        start: "top 70%",
        end: "bottom top",
        scrub: true,
      }
    })
    gsap.from(col3.current, {
      yPercent: 40,
      scrollTrigger: {
        trigger: con_col.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      }
    })
    // gsap.from(col2.current, {
    //   yPercent: -90,
    //   scrollTrigger: {
    //     trigger: con_col.current,
    //     scrub: true,
    //   }
    // })
    gsap.from(col4.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: con_col.current,
        scrub: true,
      }
    })


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [])
  return (
    <div ref={con_col} className="bg-neutral-900 overflow-y-hidden
       w-screen h-screen flex justify-evenly items-center ">
      <section ref={col1} className="object-cover w-[20%] h-[150%]  hidden xsm:flex flex-col justify-evenly items-center ">
        <img src={nissan2} className="w-full h-[500px] object-cover" />
        <img src={nissan1} className="w-full h-[500px] object-cover" />
      </section>
      <section ref={col2} className="hidden ss:flex flex-col w-[30%] xsm:w-[20%] h-[150%]  justify-evenly items-center">
        <img src={a2} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
      </section>
      <section ref={col3} className="w-[40%] ss:w-[30%] xsm:w-[20%] h-[150%]  flex flex-col justify-evenly items-center">
        <img src={toyota86} className="w-full h-[500px] object-cover" />
        <img src={audi3} className="w-full h-[500px] object-cover" />
      </section>
      <section ref={col4} className="w-[40%] ss:w-[30%] xsm:w-[20%] h-[150%]  flex flex-col justify-evenly items-center">
        <img src={audi2} className="w-full h-[500px] object-cover" />
        <img src={audi4} className="w-full h-[500px] object-cover" />
      </section>
    </div>
  )
}
