import { audiA5_banner } from "../../assets"
import { Link , Routes, Route } from "react-router-dom"
import { Audi_A5_Couple, Audi_A5_Sportback } from "../../_car/audi/audi_A5"

const Section = () => {
  return (
    <div className='Banner'>
      <Routes>
        <Route path="/audi-A5-Couple" element={<Audi_A5_Couple/>}/>
        <Route  path="/audi-A5-Sportback" element={<Audi_A5_Sportback/>} />
      </Routes>
      <div className='banner mt-[65px] mb-[60px]'>
        <div className="relative">
          <img src={audiA5_banner} />
          <div className="absolute top-0 font-bold text-white lg:mx-[50px] lg:my-[50px] xl:my-[120px]">
            <div className="hidden lg:block ">
              <div className=" text-[22px] lg:text-[40px]">Dynamic down to the last curve</div>
              <div className="lg:text-[20px] mt-[10px]">The Audi A5 models are destined to turn heads.</div>
            </div>
            <div className="hidden lg:flex lg:flex-col xl:flex-row  lg:my-[25px] lg:gap-x-[20px]">
              <Link to="/audi-A5-Couple">
                <div className=" text-center lg:w-[250px] lg:px-[20px] lg:py-[10px] text-slate-800 bg-slate-200 ">
                  Explore Audi A5 Coupe
                </div>
              </Link>
              <Link to="/audi-A5-Sportback">
                <div className="text-center lg:w-[250px] lg:px-[20px] lg:py-[10px]  border border-white">
                  Explore Audi A5 Sportback
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:hidden  font-bold text-center text-white mt-[20px]">
            <div className="text-[20px] sm:text-[30px]">Dynamic down to the last curve</div>
            <div className="text-[15px] sm:text-[17px] mt-[10px]">The Audi A5 models are destined to turn heads.</div>
          </div>
          <div className="lg:hidden flex justify-center mt-[30px] sm:mt-[15px] ">
            <Link to="/audi-A5-Couple">
              <div className=" text-center w-[250px] px-[20px] py-[10px] text-slate-800 bg-slate-200 ">
                Explore Audi A5 Coupe
              </div>
            </Link>
            <Link to="/audi-A5-Sportback">
              <div className="text-center w-[250px] px-[20px] py-[10px] text-white  border border-white">
                Explore Audi A5 Sportback
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section;