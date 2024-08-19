import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { a1, a2, a3 } from "@/assets/audiA5/couple/"

export const GallaryAlbum = () => {
  const con_col = useRef(null)
  const col1 = useRef(null)
  const col2 = useRef(null)
  const col3 = useRef(null)
  const col4 = useRef(null)
  useEffect(() => {
    gsap.set([col1.current, col3.current], {
      yPercent: -10
    })
    gsap.set([col2.current, col4.current], {
      yPercent: 10
    }
    )
    gsap.to(col1.current, {
      yPercent: 10,
      duration: 1,
      scrollTrigger: {
        trigger: con_col.current,
        scrub: true,
      }
    })
    gsap.to(col3.current, {
      yPercent: 30,
      duration: 0.5,
      scrollTrigger: {
        trigger: con_col.current,
        scrub: true,
      }
    })
    gsap.to(col4.current, {
      yPercent: -10,
      duration: 1,
      scrollTrigger: {
        trigger: con_col.current,
        scrub: true,
      }
    })
    gsap.to(col2.current, {
      yPercent: -5,
      duration: 1,
      scrollTrigger: {
        trigger: con_col.current,
        scrub: true,
      }
    })


  }, [])
  return (
    <div ref={con_col} className="bg-neutral-900 overflow-y-hidden
       w-screen h-screen flex justify-evenly items-center ">
      <section ref={col1} className="object-cover w-[20%] h-[400%]  hidden xsm:flex flex-col justify-evenly items-center ">
        <img src={a3} className="w-full h-[500px] object-cover " />
        <img src={a2} className="w-full h-[500px] object-cover" />
        <img src={a1} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
        <img src={a2} className="w-full h-[500px] object-cover" />
      </section>
      <section ref={col2} className="hidden ss:flex flex-col w-[30%] xsm:w-[20%] h-[400%]  justify-evenly items-center">
        <img src={a1} className="w-full h-[500px] object-cover" />
        <img src={a2} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
        <img src={a1} className="w-full h-[500px] object-cover" />
        <img src={a2} className="w-full h-[500px] object-cover" />
      </section>
      <section ref={col3} className="w-[40%] ss:w-[30%] xsm:w-[20%] h-[400%]  flex flex-col justify-evenly items-center">
        <img src={a2} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
        <img src={a1} className="w-full h-[500px] object-cover" />
        <img src={a2} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
      </section>
      <section ref={col4} className="w-[40%] ss:w-[30%] xsm:w-[20%] h-[400%]  flex flex-col justify-evenly items-center">
        <img src={a1} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
        <img src={a2} className="w-full h-[500px] object-cover" />
        <img src={a3} className="w-full h-[500px] object-cover" />
        <img src={a1} className="w-full h-[500px] object-cover" />
      </section>
    </div>
  )
}
