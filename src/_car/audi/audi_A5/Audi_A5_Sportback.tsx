import {Navbar} from "@/_root/_homepage"
import {sport1, sport2,sport3, sport4} from "@/assets/audiA5/sportback"
const Audi_A5_Sportback = () => {
  return (
    <div>
      <div className="w-screen">
        <Navbar/>
      </div>
      <div className="">
        <div className="relative">
          <img className="object-cover w-screen h-screen" src={sport1} />
          <div className="absolute z-10 top-0 text-slate-200 mx-[20px] my-[20px] sm:my-[50px] sm:mx-[50px]">
            <div className="font-bold text-[40px] lg:text-[60px]">
              2024 A5 Sportback
            </div>
            <div className="font-semibold lg:text-[27px]">
              Starting at $68,000
            </div>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-800 "></div>
          <div className="absolute z-10  bottom-[150px] text-center w-screen flex flex-col gap-y-[20px] items-center font-bold ">
            <div className="w-[380px] ss:w-[450px] sm:w-[600px]  px-[50px] py-[10px] bg-slate-100 
            hover:bg-green-900 hover:text-slate-200 transition ease-linear
          ">
              Build & price
            </div>
            <div className="w-[380px] ss:w-[450px] sm:w-[600px]  border px-[50px] py-[10px] border-white text-white
            hover:bg-white hover:text-black  transition ease-linear
          ">
              Search inventory
            </div>
          </div>
        </div>
      </div>
      <div className="   mt-[50px] flex flex-col sm:flex-row items-center justify-center text-center w-screen gap-y-[20px]" >
        <div className=" w-[300px] pb-[20px]  border-b sm:border-b-0 border-slate-600 sm:border-r">
          <div className="lg:text-[18px]">EPA-estimated fuel economy</div>
          <div className="text-[30px] lg:text-[35px]">35 MPG</div>
          <div className="lg:text-[18px]">View key MPG info</div>
        </div>
        <div className=" w-[300px] pb-[20px] border-b sm:border-b-0 border-slate-600 sm:border-r">
          <div className="lg:text-[18px]">Transmission</div>
          <div className="text-[30px] lg:text-[35px] ">7-speed</div>
          <div className="lg:text-[18px]">S tronic</div>
        </div>
        <div className=" w-[300px]   ">
          <div className="lg:text-[18px]">Matrix-design</div>
          <div className="text-[30px] lg:text-[35px]">LED headlights</div>
          <div className="lg:text-[18px]">Full LED</div>
        </div>
      </div>
    </div>
  )
}

export default Audi_A5_Sportback