import { audiA5_banner } from "../../assets"
import { Link } from "react-router-dom"
const Section = () => {
  return (
    <div className='box-border font-poppins Banner'>
      <div className='banner mt-[65px] mb-[60px]'>
        <div className="relative">
          <img className="object-cover" src={audiA5_banner} />
          <div className="absolute top-0 font-bold text-white lg:mx-[50px] lg:my-[50px] mlg:my-[100px] xl:my-[150px] ">
            <div className="hidden lg:block ">
              <div className=" text-[22px] lg:text-[40px]">Dynamic down to the last curve</div>
              <div className="lg:text-[20px] mt-[10px]">The Audi A5 models are destined to turn heads.</div>
            </div>
            <div className="hidden lg:flex lg:flex-row  lg:my-[25px] lg:gap-x-[10px]">
              <Link to="/audi-A5-Couple">
                <div className=" text-center lg:w-[250px] mlg:w-[300px] lg:px-[20px] lg:py-[10px]  text-slate-800 bg-slate-200 ">
                  Explore Audi A5 Coupe
                </div>
              </Link>
              <Link to="/audi-A5-Sportback">
                <div className="text-center lg:w-[250px] mlg:w-[300px] lg:px-[20px] lg:py-[10px]  border border-white">
                  Explore Audi A5 Sportback
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:hidden  font-bold text-center text-white mt-[20px]">
            <div className="text-[23px]  ss:text-[33px] sm:text-[40px]">Dynamic down to the last curve</div>
            <div className="text-[15px]  ss:text-[20px] mt-[3px] sm:text-[24px]">The Audi A5 models are destined to turn heads.</div>
          </div>
          <div className="lg:hidden font-bold flex flex-col  items-center md:flex-row md:justify-center  mt-[30px] sm:mt-[35px] ">
            <Link to="/audi-A5-Couple">
              <div className=" text-center w-[250px] xs:w-[350px]  px-[20px] py-[10px] text-slate-800 bg-slate-200 ">
                Explore Audi A5 Coupe
              </div>
            </Link>
            <Link to="/audi-A5-Sportback">
              <div className="text-center w-[250px] xs:w-[350px] px-[20px] py-[10px] text-white  border border-white">
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