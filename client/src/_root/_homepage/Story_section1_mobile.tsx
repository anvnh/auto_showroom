import {useRef, useEffect} from "react"
import gsap from "gsap"
import {a1} from "@/assets/audiA5/couple/"

const Story_section1_mobile = () => {
      const founder_txt1 = useRef(null)
       const founder1_overlay = useRef(null)
       const section_founder1 = useRef(null)
        
       useEffect(()=>{
        gsap.to(founder1_overlay.current,{
      yPercent:-100,
      scrollTrigger:{
        trigger:section_founder1.current,
        start:"top 90%",
        end:"bottom 60%",
        scrub:true
      }  
    })
       },[])
    return (
        <div ref={section_founder1} className="w-screen h-screen flex flex-col xsm:hidden sticky top-0 bg-black  ">
            <section className=" w-full xsm:w-1/2 h-1/2  xsm:h-full relative overflow-y-hidden">
                <div ref={founder1_overlay} className=" w-full absolute top-0  h-full bg-black"></div>
                <img src={a1} className="w-full h-full" />
            </section>
            <section className="w-full xsm:w-1/2  h-1/2 xsm:h-full mt-[50px] ml-[20px] md:ml-[40px]  flex flex-col justify-between">
                <div className="w-full  h-[40%]">
                    <p className="w-full text-[37px] xsm:text-[28px] md:text-[35px] mlg:text-[48px] xl:text-[50px] font-bold font-syncopate text-yellow-500 xs:text-red-500 ss:text-purple-500 sm:text-pink-500 xsm:text-red-500 md:text-yellow-500 lg:text-red-500 mlg:text-blue-500  ">TOYOTA SUPRA MK4</p>
                    <div className="flex gap-x-[15px] ">
                        <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center  ">
                            <p>Toyota</p>
                        </section>
                        <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                            <p>555hp</p>
                        </section>
                        <section className="w-[100px] h-[40px] border rounded-[20px] flex justify-center items-center ">
                            <p>Japan</p>
                        </section>
                    </div>
                </div>
                <div className="w-[70%] h-[40%]  flex flex-col justify-center gap-y-[20px] mb-[60px] ">
                    <p ref={founder_txt1} className="split1 text-[20px] md:text-[25px] overflow-y-hidden">
                        The legendary twin-turbo 2JZ-GTE produced 276 HP for Japanese markets, but thanks to upgraded turbos and bigger fuel injectors, the American models were blessed with 321 HP, whilst European models made 326 HP.
                    </p>

                </div>
            </section>

        </div>
    )
}

export default Story_section1_mobile