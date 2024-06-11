import { audiA5_banner } from "../../assets"
import { Link } from "react-router-dom"
const Section = () => {
    return (
        <div className='box-border font-poppins Banner'>
            <div>
                <div className="relative">
                    <img className="object-cover" src={audiA5_banner} />
                    <div className="absolute top-0 font-bold text-white lg:mx-[50px] lg:my-[50px] mlg:my-[100px] xl:my-[150px] ">
                        <div className="hidden lg:block ">
                            <div className=" text-[22px] lg:text-[40px]">Dynamic down to the last curve</div>
                            <div className="lg:text-[20px] mt-[10px]">The Audi A5 models are destined to turn heads.</div>
                        </div>
                        <div className="hidden lg:flex lg:flex-row  lg:my-[25px] lg:gap-x-[10px]">
                            <Link to="/audi-A5-Couple">
                                <div className=" text-center lg:w-[270px]  mlg:w-[300px] lg:px-[20px] lg:py-[10px]  text-slate-800 bg-slate-200
                                    hover:bg-slate-600 hover:text-white transition ease-linear
                                    ">
                                    Explore Audi A5 Coupe
                                </div>
                            </Link>
                            <Link to="/audi-s6-limousin">
                                <div className="text-center lg:w-[270px] mlg:w-[300px] lg:px-[20px] lg:py-[10px]  border border-white
                                    hover:bg-green-700 hover:text-white transition ease-linear  
                                    ">
                                    Explore Audi S6 Limousin
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lg:hidden  font-bold text-center text-white mt-[20px]">
                        <div className="text-[23px]  ss:text-[33px] sm:text-[32px]">Dynamic down to the last curve</div>
                        <div className="text-[15px]  ss:text-[20px] mt-[3px] sm:text-[20px]">The Audi A5 models are destined to turn heads.</div>
                    </div>
                    <div className="lg:hidden font-bold flex flex-col  items-center md:flex-row md:justify-center mb-[50px">
                        <Link to="/audi-A5-Couple">
                            <div className=" text-center w-[240px] xs:w-[350px]  px-[20px] py-[10px] text-slate-800 bg-slate-200 ">
                                Explore Audi A5 Coupe
                            </div>
                        </Link>
                        <Link to="/audi-s6-limousin">
                            <div className="text-center w-[240px] xs:w-[350px] px-[20px] py-[10px] text-white  border border-white">
                                Explore Audi S6 Limousin
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section;
